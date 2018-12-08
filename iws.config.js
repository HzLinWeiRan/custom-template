module.exports = {
    dev: {
        // publicPath: "/",
        htmlOptionData: {
            baseUrl: '222',
            publicPath: '111222',
            ihosSuffix: 'dev.'
        },
        defineData: {
            "process.env": true
        }
    },
    test1: {
        htmlOptionData: {
            baseUrl: '222',
            publicPath: '111222'
        }
    }
}
