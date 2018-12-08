import React from 'react'
import Loadable from 'react-loadable'
// import Loading from "./Loading"

const loadableHandler = loader => Loadable({
    loader,
    loading: () => <div>222</div>
})

const routes = [
    {
        path: '/',
        exact: true,
        component: loadableHandler(() => import('../page/index'))
    },
    {
        path: '/page1',
        component: loadableHandler(() => import('../page/page1'))
    },
    {
        path: '/page2',
        component: loadableHandler(() => import('../page/page2'))
    },
]

export default routes
