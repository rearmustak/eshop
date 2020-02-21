import React, { Component } from 'react'
import { render } from 'react-dom'
import Layout from './layouts/Layout'
import TrendingProducts from './components/products/TrendingProducts'

export default class App extends Component {
    render() {
        return (
            <Layout>
                <TrendingProducts />
            </Layout>
        )
    }
}

render(<App />, document.getElementById('root'))
