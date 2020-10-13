import React from 'react'
import Layout from '../layouts/Layout'
import TendingProducts from '../components/products/TrendingProducts'
import Discount from '../components/discount/Discount'



const Home = () => {
    return (
        <Layout>
            <TendingProducts />
            <Discount/>
        </Layout>
    )
}

export default Home
