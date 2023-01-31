import React, { useState, useEffect } from 'react';
import Sidebar from './../components/Sidebar';
// import Footer from './../components/Footer';
import GetArticles from './../components/GetArticles';
import Dashboard from '../components/Dashboard';
import Topbar from '../components/OffsetArea';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OffsetArea from '../components/OffsetArea';
import Breadcrumb from '../components/Breadcrumb';

const Home = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
    <div class="page-container">
      <Sidebar />
      <div class="main-content">
        <Header />
        <Breadcrumb />
        <Dashboard />
        <Footer />
        <OffsetArea />
      {/* <div className="container-fluid page-body-wrapper"> */}
      {/* <div className="page-body-wrapper">
        <Topbar />
        
        <div className="main-panel">
        <div className="content-wrapper">
          <Dashboard />
        </div> 

        <Footer /> 
      </div>
      </div>*/}
      </div>
    </div>

      {/* <GetArticles articles={articles} /> */}
    </>
  );
}

export default Home
