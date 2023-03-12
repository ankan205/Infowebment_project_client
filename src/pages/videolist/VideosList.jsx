import React, { useEffect, useState } from "react";
import VideoList from "../../components/videolist/Videolist";

// import './home.css';
import axios from "axios";
import { useLocation } from "react-router-dom";

const VideosList=()=>{
    const [videos,setVideos]=useState([]);
    

    useEffect(()=>{
        const fetchVideo=async()=>{
            try{
                const res= await axios.get("http://localhost:5000/server/videoList/getvideolist")
                setVideos(res.data)

                // console.log(res.data);
            }catch(err){
                console.log(err)
            }
        }
        
        fetchVideo()
    },[])


    return(
        <>
            <div className="videoList">
              <VideoList videos={videos} />
            </div>
        </>
    )
}


export default VideosList;