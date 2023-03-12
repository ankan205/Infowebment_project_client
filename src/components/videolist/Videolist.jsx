import React from "react";
import Singlevideo from "../singlevideo/Singlevideo";
// import './post.css';

const videos =({videos})=>{

    
    return (
        <>
            <div className="videos">
            {/* {

               videos.forEach((v)=>{
                <Singlevideo videos={v} />   

               })
            } */}
               {videos.map((v)=>(
               
                <Singlevideo video={v} />   
               ))}
              
            </div>
        </>
    )
}

export default videos;