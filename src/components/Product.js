import React, { useContext } from 'react'
import { DataContext } from './DataContext/DataProvider'
import {Link} from 'react-router-dom'

const Product = () => {
    // const [products] = useContext(DataContext)
    // console.log(products);
    const value = useContext(DataContext)
    // console.log(value);
    const [products] = value.products
    const addCart = value.addCart
    // console.log(products);
    return (
        <div className="products">
            {
                products.map(product => (
                    <div className="card" key={product._id}>
                        <Link to={`/products/${product._id}`}>
                            <img src={product.images[0]} alt="item" />
                        </Link>
                        <div className="box">
                            <h3 title={product.title}>
                                <Link to={`/products/${product._id}`}>{product.title}</Link>
                            </h3>
                            <h4>{product.price} ₫</h4>
                            <p>{product.description}</p>
                            <button onClick={()=>addCart(product._id)}>Thêm vào giỏ</button>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Product
