module.exports = {
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-syntax-dynamic-import",
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true
            }
        ],
        [
            "@babel/plugin-proposal-class-properties", 
            { 
                "loose": true
            }
        ],
        "react-hot-loader/babel",
        [
            "import",
            {
                "libraryName": "element-react",
                "libraryDirectory": "dist/npm/es6/src",
                "style": (name, file) => {
                    const compArr = name.split('/')
                    const comp = compArr[compArr.length - 1]
                    return `element-theme-default/lib/${comp}.css`
                }
            }
        ]
    ]
}