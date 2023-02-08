import React from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      {/* free pg to send props and other general info to loggedin components */}
    
      <Sidebar />
    </>
  )
}
export default Dashboard



// import React, { useState, useEffect } from 'react';
// import Sidebar from './../components/Sidebar';

// const Dashboard = () => {
//   const [articles, setArticles] = useState([])

//   useEffect(() => {
//     fetch('http://127.0.0.1:5000/get', {
//       'method': 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(resp => resp.json())
//     .then(resp => setArticles(resp))
//     .catch(error => console.log(error))
//   }, [])

//   return (
//     <>
//     <div class="page-container">
//       <Sidebar />
//       {/* The other contents here */}
//     </div>

//       {/* <GetArticles articles={articles} /> */}
//     </>
//   );
// }

// export default Dashboard
