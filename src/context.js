import React, { Component } from 'react'
import Product from './components/Product';
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();
//Provider
//Consumer

 class ProductProvider extends Component {
    state ={
        products: storeProducts,
        detailProduct
    }

    handleDetail = () => {
        console.log('detail');
    }
    addToCart = () => {
        console.log('cart');
    }

    render() {
        return (
            <ProductContext.Provider value={{
                // products: this.state.products
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}
