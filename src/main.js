import React, { PureComponent } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link
} from 'react-router-dom'
import { hot } from 'react-hot-loader'
import { Button } from 'antd'
import RouteWithSubRoutes from './components/RouteWithSubRoutes'
import routes from './routes'
import './main.less'

@hot(module)
class Main extends PureComponent {
    render() {
        return (
            <Router basename={process.publicPath}>
                <div>
                    <Link to="/"><Button type="primary">index</Button></Link>
                    <br />
                    <Link to="/page1"><Button>page1</Button></Link>
                    <br />
                    <Link to="/page2"><Button>page2</Button></Link>
                    <Switch>
                        {routes.map(route => (
                            <RouteWithSubRoutes key={route.path} {...route} />
                        ))}
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Main
