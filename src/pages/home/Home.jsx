import React, { useEffect, useState } from "react";
import Products from "../../components/products/Products";
import './home.css';
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home=()=>{
    const [products,setproducts]=useState([]);
    // const {search}=useLocation()

    useEffect(()=>{
        const fetchProducts=async()=>{
            try{
                const res= await axios.get("http://localhost:5000/server/allproduct/getProducts")
                setproducts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        
        fetchProducts()
    },[])


    return(
        <>
            <div>
                <h1>
                    Welcome
                </h1>
            </div>
            <div className="home">
              <Products products={products}/>
            </div>
        </>
    )
}


export default Home;