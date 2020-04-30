'use strict';

// Значения: 0 = off, 1 = warn, 2 = error
module.exports = {
    parser: "babel-eslint",
    rules: {
        // The rules below are listed in the order they appear on the eslint rules page.
        // All rules are listed to make it easier to keep in sync as new ESLint rules are added.
        // http://eslint.org/docs/rules/

        // Possible Errors
        // http://eslint.org/docs/rules/#possible-errors
        // ---------------------------------------------
        'for-direction': 2, // Запрещает циклы, которые могут итерироваться до бесконечности
        // 'getter-return': 9,
        // 'no-await-in-loop': 9,
        // 'no-await-in-loop': '11111',
        'no-compare-neg-zero': 2, // Запрещает сравнение с -0
        'no-cond-assign': 2, // Запрещает оператор присваивания в условных выражениях
        'no-console': [1, { allow: ["warn", "error"] }], // Рекомендация убрать все console.*, кроме console.warn и console.error
        // 'no-constant-condition': [2, { "checkLoops": false }], // Запрещает постоянные выражения в условиях и циклах, кроме рекурсивных выражений с базовым случаем
        // 'no-control-regex': 9,
        'no-debugger': 2, // Запрещает дебаггеры
        'no-dupe-args': 2, // Запрещает дублирование дублирующихся параметров в функции с одинакомы именем
        // 'no-dupe-else-if': 2, // Запрещает дублирование тестовых конструкций в условиях
        'no-dupe-keys': 2, // Запрещает дублирование именей ключей в одном объекте
        'no-duplicate-case': 2, // Запрещает дублирование тестовый конструкций в switch case
        'no-empty': 1, // Рекомендация убрать все пустые конструкции условий и циклов
        // 'no-empty-character-class': 9,
        // 'no-ex-assign': 9,
        'no-extra-boolean-cast': 2, // Запрещает бессмысленные логические превращения
        'no-extra-parens': 1, // Рекомендует убрать скобки там, где их использование бессмысленно
        'no-extra-semi': 2, // Запрещает лишние точки с запятой: после условий, циклов и тд
        'no-func-assign': 1, // Не рекомендует перезаписывать функции, объявленные через declaration
        'no-import-assign': 2, // Запрещает присваивать новые значения переменным, в которые было что-то импортировано
        'no-inner-declarations': [2, 'both'], // Запрещает объявлять переменные через var и функции внутри условий, циктов и тд
        // 'no-invalid-regexp': 9,
        // 'no-irregular-whitespace': 2,
        // 'no-misleading-character-class': 2,
        // 'no-obj-calls': 2,
        // 'no-prototype-builtins': 0,
        // 'no-regex-spaces': 2,
        // 'no-setter-return': 9,
        'no-sparse-arrays': 2, // Запрещает оставлять пустые слоты в массиве (пустота между запятыми)
        'no-template-curly-in-string': 1, // Рекомендация не использовать синтаксис литерала шаблона в обычных кавычках
        'no-unexpected-multiline': 2, // Запрещает запутанные многострочные выражения без разделение точкой с запятой, например объявление переменной за которой на следующий строке без разделение сразу идет применение какой-либой функции
        'no-unreachable': 2, // Запрещает код, который никогда не будет выполнен, после выражений с return, break и тд
        // 'no-unsafe-finally': 2,
        // 'no-unsafe-negation': 0, //
        // 'no-useless-backreference': 9,
        // 'require-atomic-updates': 9,
        'use-isnan': 2, // Запрещает сравнение с NaN, рекомендует использование метода isNaN()
        // 'valid-jsdoc': [2, {
        //     requireParamDescription: false,
        //     requireReturnDescription: false,
        //     requireReturn: false,
        //     prefer: {returns: 'return'},
        // }],
        // 'valid-typeof': 2


        // Best Practices
        // http://eslint.org/docs/rules/#best-practices
        // --------------------------------------------

        // 'accessor-pairs': 0,
        'array-callback-return': 0,
        // 'block-scoped-var': 0,
        // 'class-methods-use-this': 0,
        // 'complexity': 0,
        // 'consistent-return': 0
        // TODO(philipwalton): add an option to enforce braces with the
        // exception of simple, single-line if statements.
        // 'curly': [2, 'multi-line'],
        // 'default-case': 0,
        // 'dot-location': 0,
        // 'dot-notation': 0,
        // 'eqeqeq': 0,
        // 'guard-for-in': 2,
        // 'no-alert': 0,
        // 'no-caller': 2,
        // 'no-case-declarations': 2,
        // 'no-div-regex': 0,
        // 'no-else-return': 0,
        // 'no-empty-function': 0,
        // 'no-empty-pattern': 2,
        // 'no-eq-null': 0,
        // 'no-eval': 0,
        // 'no-extend-native': 2,
        // 'no-extra-bind': 2,
        // 'no-extra-label': 0,
        // 'no-fallthrough': 2,
        // 'no-floating-decimal': 0,
        // 'no-global-assign': 0,
        // 'no-implicit-coercion': 0,
        // 'no-implicit-globals': 0,
        // 'no-implied-eval': 0,
        // 'no-invalid-this': 2,
        // 'no-iterator': 0,
        // 'no-labels': 0,
        // 'no-lone-blocks': 0,
        // 'no-loop-func': 0,
        // 'no-magic-numbers': 0,
        // 'no-multi-spaces': 2,
        // 'no-multi-str': 2,
        // 'no-new': 0,
        // 'no-new-func': 0,
        // 'no-new-wrappers': 2,
        // 'no-octal': 2,
        // 'no-octal-escape': 0,
        // 'no-param-reassign': 0,
        // 'no-proto': 0,
        // 'no-redeclare': 2,
        // 'no-restricted-properties': 0,
        // 'no-return-assign': 0,
        // 'no-script-url': 0,
        // 'no-self-assign': 2,
        // 'no-self-compare': 0,
        // 'no-sequences': 0,
        // 'no-throw-literal': 2,
        // 'no-unmodified-loop-condition': 0,
        // 'no-unused-expressions': 0,
        // 'no-unused-labels': 2,
        // 'no-useless-call': 0,
        // 'no-useless-concat': 0,
        // 'no-useless-escape': 0,
        // 'no-void': 0,
        // 'no-warning-comments': 0,
        // 'no-with': 2,
        // 'prefer-promise-reject-errors': 2,
        // 'radix': 0,
        // 'require-await': 0,
        // 'vars-on-top': 0,
        // 'wrap-iife': 0,
        // 'yoda': 0,

        // Strict Mode
        // http://eslint.org/docs/rules/#strict-mode
        // -----------------------------------------
        // 'strict': 0,

        // Variables
        // http://eslint.org/docs/rules/#variables
        // ---------------------------------------
        // 'init-declarations': 0,
        // 'no-catch-shadow': 0,
        // 'no-delete-var': 2,
        // 'no-label-var': 0,
        // 'no-restricted-globals': 0,
        // 'no-shadow': 0,
        // 'no-shadow-restricted-names': 0,
        // 'no-undef': 2,
        // 'no-undef-init': 0,
        // 'no-undefined': 0,
        // 'no-unused-vars': [2, {args: 'none'}],
        // 'no-use-before-define': 0,

        // Node.js and CommonJS
        // http://eslint.org/docs/rules/#nodejs-and-commonjs
        // -------------------------------------------------
        // 'callback-return': 0,
        // 'global-require': 0,
        // 'handle-callback-err': 0,
        // 'no-buffer-constructor': 0,
        // 'no-mixed-requires': 0,
        // 'no-new-require': 0,
        // 'no-path-concat': 0,
        // 'no-process-env': 0,
        // 'no-process-exit': 0,
        // 'no-restricted-modules': 0,
        // 'no-sync': 0,

        // Stylistic Issues
        // http://eslint.org/docs/rules/#stylistic-issues
        // ----------------------------------------------
        // 'array-bracket-newline': 0,
        // 'array-bracket-spacing': [2, 'never'],
        // 'array-element-newline': 0,
        // 'block-spacing': [2, 'never'],
        // 'brace-style': 2,
        // 'camelcase': [2, {properties: 'never'}],
        // 'capitalized-comments': 0,
        // 'comma-dangle': [2, 'always-multiline'],
        // 'comma-spacing': 2,
        // 'comma-style': 2,
        // 'computed-property-spacing': 2,
        // 'consistent-this': 0,
        // 'eol-last': 2,
        // 'func-call-spacing': 2,
        // 'func-name-matching': 0,
        // 'func-names': 0,
        // 'func-style': 0,
        // 'id-blacklist': 0,
        // 'id-length': 0,
        // 'id-match': 0,
        // 'indent': [
        //     2, 2, {
        //         'CallExpression': {
        //             'arguments': 2,
        //         },
        //         'FunctionDeclaration': {
        //             'body': 1,
        //             'parameters': 2,
        //         },
        //         'FunctionExpression': {
        //             'body': 1,
        //             'parameters': 2,
        //         },
        //         'MemberExpression': 2,
        //         'ObjectExpression': 1,
        //         'SwitchCase': 1,
        //         'ignoredNodes': [
        //             'ConditionalExpression',
        //         ],
        //     },
        // ],
        // 'jsx-quotes': 0,
        // 'key-spacing': 2,
        // 'keyword-spacing': 2,
        // 'line-comment-position': 0,
        // 'linebreak-style': 2,
        // 'lines-around-comment': 0,
        // 'max-depth': 0,
        // 'max-len': [2, {
        //     code: 80,
        //     tabWidth: 2,
        //     ignoreUrls: true,
        //     ignorePattern: 'goog\.(module|require)',
        // }],
        // 'max-lines': 0,
        // 'max-nested-callbacks': 0,
        // 'max-params': 0,
        // 'max-statements': 0,
        // 'max-statements-per-line': 0,
        // TODO(philipwalton): add a rule to enforce the operator appearing
        // at the end of the line.
        // 'multiline-ternary': 0,
        // 'new-cap': 2,
        // 'new-parens': 0,
        // 'newline-per-chained-call': 0,
        // 'no-array-constructor': 2,
        // 'no-bitwise': 0,
        // 'no-continue': 0,
        // 'no-inline-comments': 0,
        // 'no-lonely-if': 0,
        // 'no-mixed-operators': 0,
        // 'no-mixed-spaces-and-tabs': 2,
        // 'no-multi-assign': 0,
        // 'no-multiple-empty-lines': [2, {max: 2}],
        // 'no-negated-condition': 0,
        // 'no-nested-ternary': 0,
        // 'no-new-object': 2,
        // 'no-plusplus': 0,
        // 'no-restricted-syntax': 0,
        // 'no-tabs': 2,
        // 'no-ternary': 0,
        // 'no-trailing-spaces': 2,
        // 'no-underscore-dangle': 0,
        // 'no-unneeded-ternary': 0,
        // 'no-whitespace-before-property': 0,
        // 'nonblock-statement-body-position': 0,
        // 'object-curly-newline': 0,
        // 'object-curly-spacing': 2,
        // 'object-property-newline': 0,
        // 'one-var': [2, {
        //     var: 'never',
        //     let: 'never',
        //     const: 'never',
        // }],
        // 'one-var-declaration-per-line': 0,
        // 'operator-assignment': 0,
        // 'operator-linebreak': [2, 'after'],
        // 'padded-blocks': [2, 'never'],
        // 'padding-line-between-statements': 0,
        // 'quote-props': [2, 'consistent'],
        // 'quotes': [2, 'single', {allowTemplateLiterals: true}],
        // 'require-jsdoc': [2, {
        //     require: {
        //         FunctionDeclaration: true,
        //         MethodDefinition: true,
        //         ClassDeclaration: true,
        //     },
        // }],
        // 'semi': 2,
        // 'semi-spacing': 2,
        // 'semi-style': 0,
        // 'sort-keys': 0,
        // 'sort-vars': 0,
        // 'space-before-blocks': 2,
        // 'space-before-function-paren': [2, {
        //     asyncArrow: 'always',
        //     anonymous: 'never',
        //     named: 'never',
        // }],
        // 'space-in-parens': 0,
        // 'space-infix-ops': 0,
        // 'space-unary-ops': 0,
        // 'spaced-comment': [2, 'always'],
        // 'switch-colon-spacing': 2,
        // 'template-tag-spacing': 0,
        // 'unicode-bom': 0,
        // 'wrap-regex': 0,

        // ECMAScript 6
        // http://eslint.org/docs/rules/#ecmascript-6
        // ------------------------------------------
        // 'arrow-body-style': 0,
        // TODO(philipwalton): technically arrow parens are optional but
        // recommended. ESLint doesn't support a *consistent* setting so
        // "always" is used.
        // 'arrow-parens': [2, 'always'],
        // 'arrow-spacing': 0,
        // 'constructor-super': 2,
        // 'generator-star-spacing': [2, 'after'],
        // 'no-class-assign': 0,
        // 'no-confusing-arrow': 0,
        // 'no-const-assign': 0,
        // 'no-dupe-class-members': 0,
        // 'no-duplicate-imports': 0,
        // 'no-new-symbol': 2,
        // 'no-restricted-imports': 0,
        // 'no-this-before-super': 2,
        // 'no-useless-computed-key': 0,
        // 'no-useless-constructor': 0,
        // 'no-useless-rename': 0,
        // 'no-var': 2,
        // 'object-shorthand': 0,
        // 'prefer-arrow-callback': 0,
        // 'prefer-const': [2, {destructuring: 'all'}],
        // 'prefer-destructuring': 0,
        // 'prefer-numeric-literals': 0,
        // 'prefer-rest-params': 2,
        // 'prefer-spread': 2,
        // 'prefer-template': 0,
        // 'require-yield': 2,
        // 'rest-spread-spacing': 2,
        // 'sort-imports': 0,
        // 'symbol-description': 0,
        // 'template-curly-spacing': 0,
        // 'yield-star-spacing': [2, 'after'],
    },
};
