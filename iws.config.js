const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    default: {
        // publicPath: "/",
        htmlOptionData: {
            baseUrl: '222',
            publicPath: '111222',
            ihosSuffix: 'dev.'
        },
        defineData: {
            'process.env': true,
            'process.publicPath': ''
        }
    },
    dev: {
        // publicPath: "/",
        htmlOptionData: {
            baseUrl: '222',
            publicPath: '111222',
            ihosSuffix: 'dev.'
        },
        defineData: {
            'process.env': true
        }
    },
    test1: {
        htmlOptionData: {
            baseUrl: '222',
            publicPath: '111222'
        }
    }
}
