# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > assert-predicate > asserts-as-identifier`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
		end: Object {
			column: 0
			index: 58
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {
					parts: Array [
						RAW_MARKUP {value: "Unexpected token, expected "}
						"("
					]
				}
			}
			location: Object {
				filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 31
					index: 31
					line: 1
				}
				start: Object {
					column: 17
					index: 17
					line: 1
				}
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "function"
				loc: Object {
					filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
					identifierName: "function"
					end: Object {
						column: 16
						index: 16
						line: 1
					}
					start: Object {
						column: 8
						index: 8
						line: 1
					}
				}
			}
			declare: true
			loc: Object {
				filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
				end: Object {
					column: 57
					index: 57
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
					end: Object {
						column: 31
						index: 31
						line: 1
					}
					start: Object {
						column: 17
						index: 17
						line: 1
					}
				}
				params: Array [
					JSBindingIdentifier {
						name: "assertIsString"
						loc: Object {
							filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
							identifierName: "assertIsString"
							end: Object {
								column: 31
								index: 31
								line: 1
							}
							start: Object {
								column: 17
								index: 17
								line: 1
							}
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
								end: Object {
									column: 31
									index: 31
									line: 1
								}
								start: Object {
									column: 17
									index: 17
									line: 1
								}
							}
						}
					}
				]
			}
			body: JSBlockStatement {
				directives: Array []
				loc: Object {
					filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
					end: Object {
						column: 57
						index: 57
						line: 1
					}
					start: Object {
						column: 31
						index: 31
						line: 1
					}
				}
				body: Array [
					JSExpressionStatement {
						loc: Object {
							filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
							end: Object {
								column: 47
								index: 47
								line: 1
							}
							start: Object {
								column: 31
								index: 31
								line: 1
							}
						}
						expression: JSReferenceIdentifier {
							name: "value"
							loc: Object {
								filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
								identifierName: "value"
								end: Object {
									column: 37
									index: 37
									line: 1
								}
								start: Object {
									column: 32
									index: 32
									line: 1
								}
							}
						}
					}
					JSExpressionStatement {
						loc: Object {
							filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
							end: Object {
								column: 48
								index: 48
								line: 1
							}
							start: Object {
								column: 47
								index: 47
								line: 1
							}
						}
						expression: JSReferenceIdentifier {
							name: "INVALID_PLACEHOLDER"
							loc: Object {
								filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
								end: Object {
									column: 48
									index: 48
									line: 1
								}
								start: Object {
									column: 47
									index: 47
									line: 1
								}
							}
						}
					}
					JSExpressionStatement {
						loc: Object {
							filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
							end: Object {
								column: 57
								index: 57
								line: 1
							}
							start: Object {
								column: 49
								index: 49
								line: 1
							}
						}
						expression: JSReferenceIdentifier {
							name: "asserts"
							loc: Object {
								filename: "typescript/assert-predicate/asserts-as-identifier/input.ts"
								identifierName: "asserts"
								end: Object {
									column: 56
									index: 56
									line: 1
								}
								start: Object {
									column: 49
									index: 49
									line: 1
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 typescript/assert-predicate/asserts-as-identifier/input.ts:1:17 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected token, expected (

    declare function assertIsString(value: unknown): asserts;
                     ^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
