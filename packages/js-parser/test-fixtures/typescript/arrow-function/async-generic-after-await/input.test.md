# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > arrow-function > async-generic-after-await`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "typescript/arrow-function/async-generic-after-await/input.ts"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "typescript/arrow-function/async-generic-after-await/input.ts"
		end: Object {
			column: 0
			index: 54
			line: 5
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
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Expected a semicolon or a line terminator"}]}
			}
			location: Object {
				filename: "typescript/arrow-function/async-generic-after-await/input.ts"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 13
					index: 41
					line: 3
				}
				start: Object {
					column: 14
					index: 42
					line: 3
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "typescript/arrow-function/async-generic-after-await/input.ts"
				end: Object {
					column: 2
					index: 53
					line: 4
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSArrowFunctionExpression {
				loc: Object {
					filename: "typescript/arrow-function/async-generic-after-await/input.ts"
					end: Object {
						column: 1
						index: 52
						line: 4
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				head: JSFunctionHead {
					async: true
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: Object {
						filename: "typescript/arrow-function/async-generic-after-await/input.ts"
						end: Object {
							column: 11
							index: 11
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
				}
				body: JSBlockStatement {
					directives: Array []
					loc: Object {
						filename: "typescript/arrow-function/async-generic-after-await/input.ts"
						end: Object {
							column: 1
							index: 52
							line: 4
						}
						start: Object {
							column: 12
							index: 12
							line: 1
						}
					}
					body: Array [
						JSExpressionStatement {
							loc: Object {
								filename: "typescript/arrow-function/async-generic-after-await/input.ts"
								end: Object {
									column: 13
									index: 27
									line: 2
								}
								start: Object {
									column: 2
									index: 16
									line: 2
								}
							}
							expression: JSAwaitExpression {
								loc: Object {
									filename: "typescript/arrow-function/async-generic-after-await/input.ts"
									end: Object {
										column: 12
										index: 26
										line: 2
									}
									start: Object {
										column: 2
										index: 16
										line: 2
									}
								}
								argument: JSNullLiteral {
									loc: Object {
										filename: "typescript/arrow-function/async-generic-after-await/input.ts"
										end: Object {
											column: 12
											index: 26
											line: 2
										}
										start: Object {
											column: 8
											index: 22
											line: 2
										}
									}
								}
							}
						}
						JSExpressionStatement {
							loc: Object {
								filename: "typescript/arrow-function/async-generic-after-await/input.ts"
								end: Object {
									column: 13
									index: 41
									line: 3
								}
								start: Object {
									column: 2
									index: 30
									line: 3
								}
							}
							expression: JSCallExpression {
								arguments: Array []
								loc: Object {
									filename: "typescript/arrow-function/async-generic-after-await/input.ts"
									end: Object {
										column: 13
										index: 41
										line: 3
									}
									start: Object {
										column: 2
										index: 30
										line: 3
									}
								}
								callee: JSReferenceIdentifier {
									name: "async"
									loc: Object {
										filename: "typescript/arrow-function/async-generic-after-await/input.ts"
										identifierName: "async"
										end: Object {
											column: 7
											index: 35
											line: 3
										}
										start: Object {
											column: 2
											index: 30
											line: 3
										}
									}
								}
								typeArguments: TSTypeParameterInstantiation {
									loc: Object {
										filename: "typescript/arrow-function/async-generic-after-await/input.ts"
										end: Object {
											column: 11
											index: 39
											line: 3
										}
										start: Object {
											column: 8
											index: 36
											line: 3
										}
									}
									params: Array [
										TSTypeReference {
											typeParameters: undefined
											loc: Object {
												filename: "typescript/arrow-function/async-generic-after-await/input.ts"
												end: Object {
													column: 10
													index: 38
													line: 3
												}
												start: Object {
													column: 9
													index: 37
													line: 3
												}
											}
											typeName: JSReferenceIdentifier {
												name: "T"
												loc: Object {
													filename: "typescript/arrow-function/async-generic-after-await/input.ts"
													identifierName: "T"
													end: Object {
														column: 10
														index: 38
														line: 3
													}
													start: Object {
														column: 9
														index: 37
														line: 3
													}
												}
											}
										}
									]
								}
							}
						}
						JSExpressionStatement {
							loc: Object {
								filename: "typescript/arrow-function/async-generic-after-await/input.ts"
								end: Object {
									column: 16
									index: 44
									line: 3
								}
								start: Object {
									column: 14
									index: 42
									line: 3
								}
							}
							expression: JSReferenceIdentifier {
								name: "INVALID_PLACEHOLDER"
								loc: Object {
									filename: "typescript/arrow-function/async-generic-after-await/input.ts"
									end: Object {
										column: 16
										index: 44
										line: 3
									}
									start: Object {
										column: 14
										index: 42
										line: 3
									}
								}
							}
						}
						JSExpressionStatement {
							loc: Object {
								filename: "typescript/arrow-function/async-generic-after-await/input.ts"
								end: Object {
									column: 22
									index: 50
									line: 3
								}
								start: Object {
									column: 17
									index: 45
									line: 3
								}
							}
							expression: JSNullLiteral {
								loc: Object {
									filename: "typescript/arrow-function/async-generic-after-await/input.ts"
									end: Object {
										column: 21
										index: 49
										line: 3
									}
									start: Object {
										column: 17
										index: 45
										line: 3
									}
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

 typescript/arrow-function/async-generic-after-await/input.ts:3:14 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    1 │ async () => {
    2 │   await null;
  > 3 │   async <T>() => null;
      │               ^
    4 │ };

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
