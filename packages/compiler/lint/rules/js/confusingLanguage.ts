/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Path} from "@romefrontend/compiler";
import {AnyNode} from "@romefrontend/ast";
import {PositionTracker, SourceLocation} from "@romefrontend/parser-core";
import {ob1Coerce0} from "@romefrontend/ob1";
import {isIdentifierish} from "@romefrontend/js-ast-utils";
import {DiagnosticAdvice, descriptions} from "@romefrontend/diagnostics";
import {preserveCasing} from "@romefrontend/string-utils";
import {Markup, markup} from "@romefrontend/cli-layout";

type ConfusingLanguage = Array<{
	description: Markup;
	word: string;
	suggestion: string;
	advice: DiagnosticAdvice;
}>;

export const confusingLanguage: ConfusingLanguage = [
	{
		"description": markup`The word <emphasis>whitelist</emphasis> can be considered racially charged language.`,
		"word": "whitelist",
		"suggestion": "allowlist",
		"advice": [
			{
				"type": "log",
				"category": "info",
				"text": markup`See <hyperlink target=\"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/\" /> for a more detailed explanation.`,
			},
		],
	},
	{
		"description": markup`The word <emphasis>blacklist</emphasis> can be considered racially charged language.`,
		"word": "blacklist",
		"suggestion": "denylist",
		"advice": [
			{
				"type": "log",
				"category": "info",
				"text": markup`See <hyperlink target=\"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6148600/\" /> for a more detailed explanation.`,
			},
		],
	},
];

// Fast regex for checking if we need to validate a string
const regex = new RegExp(
	confusingLanguage.map((term) => term.word).join("|"),
	"gi",
);

type CheckResult = {
	loc: SourceLocation;
	word: string;
	description: Markup;
	suggestion: string;
	startIndex: number;
	endIndex: number;
	advice: DiagnosticAdvice;
};

function check(
	loc: SourceLocation,
	input: string,
): {
	fixed: string;
	results: Array<CheckResult>;
} {
	let fixed = input;
	if (!regex.test(input)) {
		return {
			fixed,
			results: [],
		};
	}

	const lower = input.toLowerCase();
	const tracker = new PositionTracker(lower, loc.start);
	const results: Array<CheckResult> = [];

	// This is a bit more complicated since we try to do the minimal amount of work
	for (let i = 0; i < lower.length; i++) {
		const char = lower[i];

		for (const {advice, word, description, suggestion} of confusingLanguage) {
			if (char === word[0] && lower.startsWith(word, i)) {
				const wordWithSourceCasing = input.slice(i, i + word.length);

				results.push({
					// We want to preserve the original casing
					word: wordWithSourceCasing,
					description,
					advice,
					suggestion: preserveCasing(wordWithSourceCasing, suggestion),
					startIndex: i,
					endIndex: i + word.length,
					// Calculate the actual location of this
					loc: {
						...loc,
						start: tracker.getPositionFromIndex(ob1Coerce0(i)),
						end: tracker.getPositionFromIndex(ob1Coerce0(i + word.length)),
					},
				});

				i += word.length;
				break;
			}
		}
	}

	// Walk backwards through the results, autofixing with the suggestions
	// Walking backwards means we don't need to maintain offsets
	for (let i = results.length - 1; i >= 0; i--) {
		const result = results[i];
		fixed =
			fixed.slice(0, result.startIndex) +
			result.suggestion +
			fixed.slice(result.endIndex);
	}

	return {
		results,
		fixed,
	};
}

export default {
	name: "js/inconsiderateLanguage",
	enter(path: Path): AnyNode {
		const {node, context} = path;

		const {loc} = node;
		if (loc !== undefined) {
			// Infer a string to check
			let value: undefined | string;
			if (node.type === "CommentBlock" || node.type === "CommentLine") {
				value = node.value;
			}
			if (isIdentifierish(node)) {
				value = node.name;
			}

			if (value !== undefined) {
				// Produce diagnostics
				const {results, fixed} = check(loc, value);
				let suppressed = false;
				for (const {loc, description, suggestion, advice} of results) {
					({suppressed} = context.addLocDiagnostic(
						loc,
						descriptions.LINT.JS_CONFUSING_LANGUAGE(
							description,
							suggestion,
							advice,
						),
						{fixable: true},
					));

					if (suppressed) {
						break;
					}
				}

				// Autofix if not suppressed
				if (results.length > 0 && !suppressed) {
					if (node.type === "CommentBlock" || node.type === "CommentLine") {
						return {
							...node,
							value: fixed,
						};
					}

					if (isIdentifierish(node)) {
						return {
							...node,
							name: fixed,
						};
					}
				}
			}
		}

		return node;
	},
};
