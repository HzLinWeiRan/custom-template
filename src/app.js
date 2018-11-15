import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Link
} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'

import RouteWithSubRoutes from './components/RouteWithSubRoutes'
import routes from './routes'
import reducers from './reducers'
import './app.scss'

const store = createStore(reducers, applyMiddleware(reduxPromise))
fdsafdas

class App extends PureComponent {
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

ReactDOM.render(<App />, document.getElementById('app'))
