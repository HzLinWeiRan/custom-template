import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'
import 'element-theme-default/lib/base.css'

import Main from './main.js'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(reduxPromise))

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', async () => {
        const nextRootReducer = await import('./reducers/index')
        store.replaceReducer(nextRootReducer.default)
    })
}


ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('app')
)
