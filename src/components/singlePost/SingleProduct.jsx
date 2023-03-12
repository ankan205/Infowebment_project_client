import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './singleProduct.css'
import axios from "axios";
import { Context } from "../../context/Context";


const SingleProduct=()=>{
    const location=useLocation();
    const path=location.pathname.split("/")[2];
    const [product,setProduct]=useState({})
   
    const {user}=useContext(Context);
    // const PF="http://localhost:5000/images/"

    const[name,setName]=useState("");
    const[desc,setDesc]=useState("");
    const[quantity,setQuantity]=useState("");
    const[price,setPrice]=useState("");
    // const[updateMode,setUpdateMode]=useState(false);

    

    useEffect(()=>{
      const getProduct=async()=>{
        const res=await axios.get("http://localhost:5000/server/product/"+path)
        console.log(path);
        console.log(res.data);
        setProduct(res.data)
        setName(res.data.name);
        setDesc(res.data.description);
        setQuantity(res.data.quantity);
        setPrice(res.data.price);
      };

      getProduct();
    },[path])

    // const handleDelete= async()=>{

    //   try{
    //     await axios.delete("http://localhost:5000/api/posts/"+path,{
    //       data:{username:user.username},
    //     })
    //     window.location.replace("/")
    //   }catch(err){
    //     console.log(err);
    //   }
      
    // };

    // const handleUpdate=async()=>{
    //   try{
    //     await axios.put("http://localhost:5000/api/posts/"+path,{
    //       username:user.username,
    //       name,
    //       desc
    //     })
    //     // window.location.reload()

    //     setUpdateMode(false);
    //   }catch(err){
    //     console.log(err);
    //   }
    // }

    return(
        <>
         <div className="singleproduct">
           <div className="singleProductWrapper">
            {/* {product.photo && (
              <img src={PF+ product.photo} alt="" className="singlePostImg" />
            ) } */}
            {/* {
              updateMode ? <input type="text" value={name} className="singlePostNameInput" autoFocus onChange={(e)=>setName(e.target.value)} /> : (
                
                <h1 className="singleProductName">
                    {name}
                    {product.username===user?.username  && 
                    
                      <div className="singlePostEdit">
                          <i className=" singlePostIcon fa-regular fa-pen-to-square" onClick={()=> setUpdateMode(true)}></i>
                          <i className=" singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
                      </div>
                      }
               </h1>
              )
            } */}

            <h1 className="singleProductName">
                    {name}
            </h1>

            <p className="singlePostDesc">
                Description: {desc}
               </p>

               <p className="singlePostQuantity">
                Quantity: {quantity}
               </p>
               <p className="singlePostPrice">
                Price: {price}
               </p>


            {/* {product.productPictures && (
              <img src={product.productPictures[0].id} alt="" className="singlePostImg" />
            ) } */}
             
            
             {/* <div className="singlePostInfo">
               <span className="singlePostAuthor">
                   Author:
                   <Link to={`/?user=${product.username}`} className="link">
                       <b>{product.username}</b>
                   </Link> 
               </span>
               <span className="singlePostDate"> 
                   {new Date(product.createdAt).toDateString()}
               </span>
             </div>


             {updateMode ? <textarea className="singlePostDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)} />: (

              <p className="singlePostDesc">
                {desc}
               </p>
             )}

             {updateMode &&
              <button className="singlePostButton" onClick={handleUpdate}>Update</button>
             } */}


             <button type="submit" name="place_order"  >
                
                <Link className="link" to={`/product/placeorder/${path}`}>Place Order</Link>
            </button>
             
            
           </div>
         </div>
        </>
    )
}

export default SingleProduct;