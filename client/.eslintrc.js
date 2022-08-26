module.exports = {
    extends: ['plugin:prettier/recommended'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 11,
        requireConfigFile: false,
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    plugins: ['prettier', 'react-hooks'],
    rules: {
        'import/no-cycle': [0],
        'import/prefer-default-export': [0],
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'all',
                endOfLine: 'auto',
            },
        ],
        // "no-console": 'error',
        'react/no-did-mount-set-state': [0],
        'react/no-did-update-set-state': [0],
        'react/jsx-props-no-spreading': [0],
        'no-nested-ternary': [0],
        'class-methods-use-this': [0],
        'object-shorthand': [
            'error',
            'always',
            {
                avoidQuotes: false,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'jest/no-jasmine-globals': [0],
        'jest/no-disabled-tests': [0],
    },
    env: {
        jest: true,
        mocha: true,
        es6: true,
        browser: true,
    },
};
