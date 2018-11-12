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
    test: 1
})

export default rootReducer
