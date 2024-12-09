import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Product = ({ item, addToCart }) => {

  return (

    <div className="row">
      <div className="col col-lg-5 col-12">
        <div className="shop-single-slider">
          <div className="slider-nav">
            <div>
              <Zoom>
                <img src={item.proImg ? item.proImg : ''} alt="products" />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-lg-7 col-12">
        <div className="product-details">
          <h2>{item.title}</h2>
          <div className="product-rt">
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <span>(25 customer reviews)</span>
          </div>
          <p>There are many variations of passages of Lorem Ipsum and available, but the majority have suffered alteration in somey form.</p>
          <ul>
            <li>Going through the cites of the word in classNameical.</li>
            <li>There are many variations of passages.</li>
            <li>Making it look like readable and spoken English.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Product;
