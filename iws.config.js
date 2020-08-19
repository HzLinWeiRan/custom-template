module.exports = {
    default: {
        publicPath: '/',
        htmlOptionData: {
            baseUrl: '222',
            publicPath: '111222'
        },
        defineData: {
            'process.env': true,
            'process.publicPath': JSON.stringify('/')
        }
    },
    dev: {
        publicPath: '/',
        htmlOptionData: {
            baseUrl: '222',
            publicPath: '111222',
            ihosSuffix: 'dev.'
        }
    },
    test1: {
        publicPath: '/dist/',
        htmlOptionData: {
            baseUrl: '222',
            publicPath: '111222'
        },
        defineData: {
            'process.env': true,
            'process.publicPath': '/dist/'
        }
    }
}
