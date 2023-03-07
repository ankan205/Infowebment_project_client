import React from "react";
import './Product.css'
import {Link} from "react-router-dom"

const Product=({product})=>{
    
    
    return(
        <>
            <div className="product">
              
                <div className="productInfo">
                    
                    
                    <Link to={`/product/${product._id}`} className="link">
                        <span className="postTitle">
                            {product.name}
                        </span>
                    </Link>
                    <hr/>
                    <span className="productDate">{new Date(product.createdAt).toDateString()}</span>
                </div>
                <p className="productDesc">
                   {product.desc}
                </p>
                <p className="productPrice">
                    {product.price}
                </p>
                <p className="productQuantity">
                   {product.quantity}
                </p>
            </div>
        </>
    )
}

export default Product;