/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
	AnyNode,
	JSRegExpAnyCharacter,
	jsRegExpAnyCharacter,
} from "@romefrontend/ast";

export default function JSRegExpAnyCharacter(node: AnyNode) {
	node = jsRegExpAnyCharacter.assert(node);
	throw new Error("unimplemented");
}
