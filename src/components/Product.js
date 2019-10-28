import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

import propTypes from 'prop-types';

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log("click img container")}
          >
            <Link to="/details">
              <img src={img} alt="product" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("add to cart");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
          {/* card footer */}
          <div className="card-footer display-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
                <h5 className="text-blue font-italic mb-0">
                  <span className="span mr-1">$</span>
                  {price}
                </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: propTypes.shape({
    id: propTypes.number,
    img: propTypes.string,
    title: propTypes.string,
    price: propTypes.number,
    inCart: propTypes.bool,
  }).isRequired
}

const ProductWrapper = styled.div`
  .card{
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;

  }
  &:hover{
    .card{
      border: .04rem sold rgba(0,0,0,.2);
      box-shadow: 2px 2px 5px 0 rgba(0,0,0,.2);
    }
    .card-footer{
      background: rgb(247,247,247);
    }
  }
  .img-container{
    position: relative;
    overflow: hidden;
  }
  .card-img-top{
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top{
    transform: scale(1.2);
  }
  .cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: .2rem .4rem;
    border: none;
    background: var(--lightBlue);
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: .5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all .3s linear;
  }
  .img-container:hover .cart-btn{
    transform: translate(0%, 0%);
  }
  .cart-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
