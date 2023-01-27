import React from "react";

import "./Products.css";
const Products = () => {
  return (
    <div className='product_main_div'>
      <h1 className='text-center'>Our Trending Products</h1>
      <div className='container '>
        <div className='row'>
          <div className='col-lg-3 col-sm-6'>
            <div className='card' style={{ width: "18rem" }}>
              <img src='p1.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Apple Laptop</h5>
                <p className='card-text'>
                 Trending Laptop
                </p>
              </div>
             
              <div className='card-body'>
                <a href='#' className='card-link  btn-success'>
                  Add To Card
                </a>
                <a href='#' className='card-link  btn-primary'>
                 View Product
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6'>
            <div className='card' style={{ width: "18rem" }}>
              <img src='p1.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Apple Laptop</h5>
                <p className='card-text'>
                 Trending Laptop
                </p>
              </div>
             
              <div className='card-body'>
                <a href='#' className='card-link  btn-success'>
                  Add To Card
                </a>
                <a href='#' className='card-link  btn-primary'>
                 View Product
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6'>
            <div className='card' style={{ width: "18rem" }}>
              <img src='p1.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Apple Laptop</h5>
                <p className='card-text'>
                 Trending Laptop
                </p>
              </div>
             
              <div className='card-body'>
                <a href='#' className='card-link  btn-success'>
                  Add To Card
                </a>
                <a href='#' className='card-link  btn-primary'>
                 View Product
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-sm-6'>
            <div className='card' style={{ width: "18rem" }}>
              <img src='p1.jpg' className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>Apple Laptop</h5>
                <p className='card-text'>
                 Trending Laptop
                </p>
              </div>
             
              <div className='card-body'>
                <a href='#' className='card-link  btn-success'>
                  Add To Card
                </a>
                <a href='#' className='card-link  btn-primary'>
                 View Product
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
