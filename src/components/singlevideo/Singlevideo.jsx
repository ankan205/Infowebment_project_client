import React from "react";
import './singlevideo.css'
import {Link} from "react-router-dom"

const Singlevideo=({video})=>{
    // let src=video.video_path;
    
    console.log(video)
    return(
        <>
            <div className="video">
              
                <div className="videoInfo">
                    <video  width="600" height="350" controls autoplay controlsList="nodownload" oncontextmenu="return false;">
                       <source src={video.video_path} type="video/mp4" />

                    </video>
                    
                </div>
                

            </div>
        </>
    )
}

export default Singlevideo;