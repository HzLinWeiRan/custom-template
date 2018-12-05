import React, { PureComponent } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link
} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'
import { hot } from 'react-hot-loader'

import RouteWithSubRoutes from './components/RouteWithSubRoutes'
import routes from './routes'
import reducers from './reducers'
import './app.scss'

const store = createStore(reducers, applyMiddleware(reduxPromise))

@hot(module)
class Main extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <div>测试页面</div>
                        <Link to="/">index</Link>
                        <br />
                        <Link to="/page1">page</Link>
                        <Switch>
                            {routes.map(route => (
                                <RouteWithSubRoutes key={route.path} {...route} />
                            ))}
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default Main
