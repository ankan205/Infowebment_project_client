import React from "react";
import Product from "../product/Product";
// import './post.css';

const products =({products})=>{
    return (
        <>
            <div className="products">
               {products.map((p)=>(
                <Product product={p}/>
               ))}
              
              
            </div>
        </>
    )
}

export default products;