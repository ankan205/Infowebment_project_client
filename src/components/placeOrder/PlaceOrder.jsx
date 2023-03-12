import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";

const PlaceOrder=()=>{
    const {user}=useContext(Context);
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const [error,setError]=useState(false)

    const handleSubmit=async (e)=>{

        e.preventDefault(); 

        setError(false);
        console.log(user.username)
        
    };

    


    return(
        <>
        <div className="placeOrder">
              <span className="placeOrderTitle">Place Order</span>
               <form className="placeOrderForm" onSubmit={handleSubmit} >

                   <label>Username</label>
                   <input type="text" className="placeOrderInput" value={user.username} placeholder="Enter Your Username..."
                    />

                   <label>Mobile Number</label>
                   <input type="number" className="placeOrderInput" placeholder="Enter Your Mobile Number..."  pattern="\d{3}[\-]\d{3}[\-]\d{4}" value={user.mobile}/>

                   <span className="orderAddress"> Address</span>


                   <button className="placeOrderButton" type="submit"> placeOrder</button>

                   
               </form>
               
               { error &&<span style={{color:"red",marginTop:"10px"}}>Something Went Wrong!!</span>}
            </div>
            
        </>
    )
}

export default PlaceOrder;