import React from 'react'

const SingleProduct = ({ name, price, discount_price, image, hover_image }) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-4 col-12">
            <div className="single-product">
                <div className="product-img">
                    <a href="product-details.html">
                        <img className="default-img" src={image} alt={name} />
                        <img className="hover-img" src={hover_image} alt={name} />
                        <span className="out-of-stock">Hot</span>
                    </a>
                    <div className="button-head">
                        <div className="product-action">
                            <a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#">
                                <i className=" ti-eye" />
                                <span>Quick Shop</span>
                            </a>
                            <a title="Wishlist" href="#">
                                <i className=" ti-heart " />
                                <span>Add to Wishlist</span>
                            </a>
                            <a title="Compare" href="#">
                                <i className="ti-bar-chart-alt" />
                                <span>Add to Compare</span>
                            </a>
                        </div>
                        <div className="product-action-2">
                            <a title="Add to cart" href="#">
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
                <div className="product-content">
                    <h3>
                        <a href="product-details.html">${name}</a>
                    </h3>
                    <div className="product-price">
                        <span className="old">${price}</span>
                        <span>${discount_price}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
