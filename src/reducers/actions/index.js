import { createAction } from 'redux-actions'

export const testAction = createAction('TEST_ACTION', async (val) => ({
    test: val
}))
