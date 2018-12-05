import { handleActions } from 'redux-actions'
import { testAction } from './actions'

const rootReducer = handleActions({
    [testAction]: (state, { payload }) => {
        console.log(payload)
        return {
            ...state,
            test: payload.test
        }
    }
}, {
    test: 10001
})

export default rootReducer
