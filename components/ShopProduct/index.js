import React from "react";
import Link from "next/link";


const ShopProduct = ({ products, addToCartProduct }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="wpo-shop-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="shop-grids clearfix">
                            {products.length > 0 &&
                                products.slice(0, 12).map((product, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder" >
                                            <img src={product.proImg} alt="" style={{height: "395px"}}/>
                                        </div>
                                        <div className="details">
                                            <h3><Link onClick={ClickHandler} href={'/contact'}>{product.title}</Link></h3>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopProduct;
