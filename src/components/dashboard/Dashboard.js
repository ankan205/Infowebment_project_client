// import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
// import axios from 'axios';

// import './dashboard.css';
// // import Navbar from '../Navbar/Navbar';

// class Dashboard extends React.Component {
// //   constructor(props) {
// //     super(props);

// //     let shouldRedirect = false;
// //     if (localStorage.getItem('userTokenTime')) {
// //       // Check if user holds token which is valid in accordance to time
// //       const data = JSON.parse(localStorage.getItem('userTokenTime'));
// //       if (new Date().getTime() - data.time > (1 * 60 * 60 * 1000)) {
// //         // It's been more than hour since you have visited dashboard
// //         localStorage.removeItem('userTokenTime');
// //         shouldRedirect = true;
// //       }
// //     } else {
// //       shouldRedirect = true;
// //     }

// //     this.state = {
// //       redirect: shouldRedirect,
// //       videoList: []
// //     }
// //   }

//   componentDidMount() {
//     {
//       axios.get('http://localhost:5000/server/videoList').then(res => {
//         this.setState({
//           videoList: res.data,
          
//         });
//       });
//     }
//   }

//   render() {
    

//     const videos = this.state.videoList.map(video => {
//       return (
//         <div className="video col-xs-12 col-sm-12 col-md-3 col-lg-4" key={video._id}>
//           <Link to={'/video/' + video.upload_title}>
//             <div className="video-thumbnail">
//               <img src={video.thumbnail_path} alt="video thubmnail" />
//             </div>
//           </Link>
//           <span className="username">
//             <Link to={'/api/videos/' + video.upload_title}>
//               {video.uploader_name}
//             </Link>
//           </span>
//           <span className="video-title">{video.upload_title.replace(/_/g, ' ')}</span>
//         </div>
//       );
//     });

//     return (
//       <>
//         <div className="container mt-5">
//           <h4>Videos</h4>
//           <hr className="my-4" />
//           <div className="streams row">
//             {videos}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Dashboard;


import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import './dashboard.css';

const Dashboard=()=>{
    const video_url="http://localhost:5000/api/videos/outdoors_hiking_path_footpath_nature_868.mp4";
    return(
    <>
       <video  controls ={true} width="100%">
        <source src={video_url} type="video/mp4"/>
       </video>
    </>)
}

export default Dashboard