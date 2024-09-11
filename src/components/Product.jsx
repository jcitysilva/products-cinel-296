import React from 'react'
import ProductStock from './ProductStock'
import productUiRules from './../product-ui-rules.json'

const { categoryUiRules } = productUiRules

function Product(props) {

    const { product } = props
    const { name, brand, price, category, availability: { stock } } = product

    console.log(categoryUiRules)

    const { backgroundColor, color } = categoryUiRules[category]

    return (
        <div className='product'
            style={{
                backgroundColor, color
            }}
        >
            <h1 className='name'>{name}</h1>
            <h3 className='brand'>{brand}</h3>

            <div className='product-info'>

                <div className='price'>{price}€</div>

                <ProductStock stock={stock} />

            </div>
        </div>
    )
}

export default Product