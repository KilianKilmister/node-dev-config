

module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended'
  ],
  'env': {
    'node': true
  },
  'parser': "babel-eslint",
  'root': true,
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    'require': 'writable',
    'module': 'writable'
  },
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
    'allowImportExportEverywhere': true,
    babelOptions: {
      configFile: "node_modules/@slick_kilmister/eslint-config-node/.babelrc",
    },
  },
  'plugins': [
    'markdown',
    'json-format',
    'node',
    'import',
    'eslint-comments',
    'no-secrets',
    'no-loops',
    'babel'
  ], 'settings': {
    'json/sort-package-json': 'pro',
    "import/resolver": {
      "node": {}
    },
    'rules': {

      "indent": [ "error", 2 ],

      'space-in-parens': [
        'error',
        'always',
        {
          'exceptions': [
            '{}',
            '[]',
            '()',
            'empty'
          ]
        }
      ],
      'space-infix-ops': [
        'error',
        {
          'int32Hint': false
        }
      ],
      'space-unary-ops': [
        1,
        {
          'words': true,
          'nonwords': false
        }
      ],
      'no-unexpected-multiline': 2,
      'no-loops/no-loops': 2,
      'array-bracket-spacing': [
        1,
        'never'
      ],
      'no-irregular-whitespace': [
        'error',
        {
          'skipComments': true
        }
      ],
      'block-spacing': 1,
      'no-restricted-syntax': [
        'error',
        {
          'selector': 'SequenceExpression',
          'message': 'The comma operator is confusing and a common mistake.'
        }
      ],
      'semi': [
        1,
        'never'
      ],
      'object-curly-spacing': [
        1,
        'always',
        {
          'arraysInObjects': false,
          'objectsInObjects': false
        }
      ],
      'quotes': [
        1,
        'single',
        'avoid-escape'
      ],
      'no-unused-vars': [
        1,
        {
          'vars': 'all',
          'args': 'none'
        }
      ],
      'eqeqeq': [
        2,
        'smart'
      ],
      'key-spacing': [
        1,
        {
          'beforeColon': false,
          'afterColon': true
        }
      ],
      'keyword-spacing': 1,
      'lines-around-comment': [
        1,
        {
          'beforeBlockComment': true,
          'afterBlockComment': false,
          'beforeLineComment': true,
          'afterLineComment': false,
          'allowBlockStart': true,
          'allowObjectStart': true,
          'allowArrayStart': true,
          "allowClassStart": true,
          "ignorePattern": "<|"
        }
      ],
      'space-before-function-paren': [
        1,
        'never'
      ],
      'space-before-blocks': [
        1,
        'always'
      ],
      'multiline-comment-style': [
        1,
        'bare-block'
      ],
      'spaced-comment': [
        1,
        'always',
        {
          'markers': [
            'TODO',
            'FIXME',
            'ANCHOR',
            'STUB',
            'NOTE',
            'REVIEW',
            'SECTION',
            'INFO',
            '<|'
          ]
        }
      ],
      'no-secrets/no-secrets': [
        'error',
        {
          'additionalRegexes': {
            'Basic Auth': 'Authorization: Basic [A-Za-z0-9+/=]*'
          }
        }
      ],
      'node/no-unsupported-features/es-syntax': 'off',
    }
  }
}
