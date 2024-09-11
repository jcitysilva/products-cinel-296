import React from 'react'

function ProductStock(props) {

    const { stock } = props

    /* Se for stock 0, dizer "no stock" */
    if (stock == 0) return <div className='stock-message no-stock'>
        Sem Stock
    </div>

    /* Se for stock 1-9, dizer "low stock" */
    else if (stock > 0 && stock < 10) return <div className='stock-message low-stock'>
        Stock Baixo
    </div>

    /* Se for stock 10+, dizer "in stock" */
    else if (stock >= 10) return <div className='stock-message in-stock'>
        Em Stock
    </div>

    else {
        console.warn("No stock provided (ProductStock.jsx)")
        return <></>
    }

}

export default ProductStock