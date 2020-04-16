'use strict';

module.exports = {
    extends: [
        require.resolve('@leo-tools/eslint-config-common')
    ],
    rules: {
        'vue/max-attributes-per-line': 0,
        'vue/attribute-hyphenation': 0,
        'vue/html-self-closing': 0,
        'vue/component-name-in-template-casing': 0,
        'vue/html-closing-bracket-spacing': 0,
        'vue/singleline-html-element-content-newline': 0,
        'vue/no-unused-components': 0,
        'vue/multiline-html-element-content-newline': 0,
        'vue/no-use-v-if-with-v-for': 0,
        'vue/html-closing-bracket-newline': 0,
        'vue/no-parsing-error': 0,
        'vue/order-in-components': [
            'error',
            {
                order: [
                    'el',
                    'name',
                    'parent',
                    'functional',
                    ['delimiters', 'comments'],
                    ['components', 'directives', 'filters'],
                    'extends',
                    'mixins',
                    'inheritAttrs',
                    'model',
                    ['props', 'propsData'],
                    'fetch',
                    'asyncData',
                    'data',
                    'computed',
                    'watch',
                    'LIFECYCLE_HOOKS',
                    'methods',
                    'head',
                    ['template', 'render'],
                    'renderError'
                ]
            }
        ],
        'vue/attributes-order': [
            'error',
            {
                order: [
                    'DEFINITION',
                    'LIST_RENDERING',
                    'CONDITIONALS',
                    'RENDER_MODIFIERS',
                    'GLOBAL',
                    'UNIQUE',
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'OTHER_ATTR',
                    'EVENTS',
                    'CONTENT'
                ],
                alphabetical: false
            }
        ],
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
