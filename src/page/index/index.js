import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { testAction } from '../../reducers/actions'

@connect(state => ({
    test: state.test
}))
class Index extends PureComponent {
    state = {}

    componentDidMount() {
        const { dispatch } = this.props
        setTimeout(() => {
            // 改变redux数据测试
            dispatch(testAction(999))
        }, 3000)
    }

    render() {
        const { test } = this.props
        return (
            <div>
                redux 测试
                {test}
            </div>
        )
    }
}

export default Index
