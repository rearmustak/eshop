import React from 'react'
import products from './../../data/products.json'
import SingleProduct from './SingleProduct.js'

class TendingProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = { products }
    }

    componentDidMount() {
        this.setState({
            products: products,
        })
    }

    render() {
        return (
            <>
                {/* Start Product Area */}
                <div className="product-area section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h2>Trending Item</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="product-info row">
                                    {this.state.products.map(product => (
                                        <SingleProduct {...product} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Product Area */}
            </>
        )
    }
}

export default TendingProducts
