// production

module.exports = {
	"extends": "eslint:recommended",
	"ignorePatterns": ["node_modules", "serviceWorker.ts", "jest.config.js", "src/typings"],
	"env": {
		"browser": true,
		"es6": true,
		"node": true,
		"jest": true
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"project": "tsconfig.json",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"@typescript-eslint/tslint",
		"jsdoc",
		"prefer-arrow",
		"react",
		"react-hooks"
	],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"rules": {
		"react/jsx-wrap-multilines": ["error", {
			"declaration": "parens",
			"assignment": "parens",
			"return": "parens",
			"arrow": "parens-new-line",
			"condition": "ignore",
			"logical": "ignore",
			"prop": "ignore"
		}],
		"react/self-closing-comp": "error",
		"react/no-string-refs": "error",
		"react/jsx-no-bind": ["error", { allowArrowFunctions: true }],
		"react/jsx-key": "error",
		"react/jsx-equals-spacing": [2, "never"],
		"react/jsx-curly-spacing": "error",
		"react/jsx-boolean-value": "error",
		"jsx-quotes": ["error", "prefer-double"],
		"eqeqeq": ["error"],
		"prefer-template": "error",
		"quotes": ["error", "single", { "allowTemplateLiterals": true }],
		"camelcase": ["error", { allow: [ "en_", "pl_", "id_", "access_", "Knt_", "ja_", "ru_" ] }],
		"no-underscore-dangle": "error",
		"one-var": ["error", "never"],
		"no-unused-expressions": "error",
		"no-multiple-empty-lines": ["error", { "max": 1 }],
		"padding-line-between-statements": [
			"error",
			{
				"blankLine": "always",
				"prev": "*",
				"next": "return"
			}
		],
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				"multiline": {
					"delimiter": "comma",
					"requireLast": false
				}
			}
		],
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": [
			"error",
			{
				"default": "generic"
			}
		],
		"@typescript-eslint/ban-types": [
			"off",
			{
				"types": {
					"Object": {
						"message": "Avoid using the `Object` type. Did you mean `object`?"
					},
					"Function": {
						"message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
					},
					"Boolean": {
						"message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
					},
					"Number": {
						"message": "Avoid using the `Number` type. Did you mean `number`?"
					},
					"String": {
						"message": "Avoid using the `String` type. Did you mean `string`?"
					},
					"Symbol": {
						"message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
					}
				}
			}
		],
		"@typescript-eslint/class-name-casing": "off",
		"@typescript-eslint/consistent-type-assertions": "off",
		"@typescript-eslint/consistent-type-definitions": "off",
		"@typescript-eslint/explicit-member-accessibility": ["off", {
			"accessibility": "explicit"
		}],
		"@typescript-eslint/indent": [
			"error",
			4,
			{
				"ArrayExpression": "first",
				"FunctionDeclaration": {
					"parameters": "first"
				},
				"FunctionExpression": {
					"parameters": "first"
				},
				"SwitchCase": 1
			}
		],
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/no-empty-function": "off",
		"@typescript-eslint/no-empty-interface": "error",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-for-in-array": "error",
		"@typescript-eslint/no-inferrable-types": "off",
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-namespace": "error",
		"@typescript-eslint/no-parameter-properties": "off",
		"@typescript-eslint/no-require-imports": "off",
		"@typescript-eslint/no-this-alias": "error",
		"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/restrict-plus-operands": "error",
		"@typescript-eslint/semi": ["error", "never"],
		"@typescript-eslint/triple-slash-reference": ["error", {
			"path": "always",
			"types": "prefer-import",
			"lib": "always"
		}],
		"@typescript-eslint/unified-signatures": "error",
		"arrow-body-style": "error",
		"arrow-parens": ["error", "as-needed"],
		"brace-style": ["error", "1tbs"],
		"comma-dangle": "error",
		"complexity": "off",
		"constructor-super": "error",
		"curly": "error",
		"default-case": "error",
		"dot-notation": "error",
		"guard-for-in": "error",
		"id-match": "error",
		"import/no-extraneous-dependencies": "off",
		"import/no-internal-modules": "off",
		"import/order": "off",
		"jsdoc/check-alignment": "error",
		"jsdoc/check-indentation": "error",
		"jsdoc/newline-after-description": "error",
		"max-classes-per-file": ["error", 1],
		"max-len": "off",
		"new-parens": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-cond-assign": "error",
		"no-console": "error",
		"no-debugger": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-empty": "off",
		"no-eval": "error",
		"no-extra-bind": "error",
		"no-fallthrough": "error",
		"no-invalid-this": "error",
		"no-irregular-whitespace": "error",
		"no-magic-numbers": "off",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-null/no-null": "off",
		"no-redeclare": "error",
		"no-return-await": "error",
		"no-sequences": "error",
		"no-shadow": ["off", {
			"hoist": "all"
		}],
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-unsafe-finally": "error",
		"no-unused-vars": "off",
		"no-unused-labels": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"prefer-arrow/prefer-arrow-functions": ["warn", {
			"disallowPrototype": true,
			"singleReturnOnly": false,
			"classPropertiesAllowed": false
		}],
		"prefer-const": "error",
		"prefer-object-spread": "error",
		"quote-props": ["error", "as-needed"],
		"radix": "error",
		"space-in-parens": ["error", "never"],
		"spaced-comment": ["error", "always", {
			"markers": [
				"/"
			]
		}],
		"use-isnan": "error",
		"valid-typeof": "off",
		"@typescript-eslint/tslint/config": ["error", {
			"rules": {
				"import-spacing": false,
				"prefer-conditional-expression": true,
				"prefer-method-signature": true,
				"prefer-switch": true,
				"typedef": [
					true,
					"parameter",
					"property-declaration",
					"member-variable-declaration"
				],
				"whitespace": [
					true,
					"check-module",
					"check-preblock",
					"check-type",
					"check-separator",
					"check-branch"
				]
			}
		}]
	}
};
