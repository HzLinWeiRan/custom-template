

module.exports = {
    extends: 'airbnb',
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow debugger during development
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // 'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-debugger': 0,
        'no-console': 0,
        'arrow-parens': 0,
        'comma-dangle': 0,
        'semi': 0,
        indent: [2, 4],
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'import/named': 0,
        'react/prop-types': 0,
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': ['js', 'jsx'],
        'react/prefer-stateless-function': 0,
        // 'react/react-in-jsx-scope': 0
    }
}