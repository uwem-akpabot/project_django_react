import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
// import Header from '../components/Header';

const Dash = (props) => {
  let [notes, setNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)
  
  let {user} = useContext(AuthContext);
  const pageTitle = 'Dashboard';
  
  useEffect(() => {
    getPatients()
  }, [])

  let getPatients = async() => {
    let response = await fetch('http://localhost:8000/api/patients/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+ String(authTokens.access)
      }
    })
    let data = await response.json()

    if (response.status === 200){
      setNotes(data)
    } else if (response.status === 'Unauthorized'){
      logoutUser()
    }
  }

  return (
    <>
    {/* {user && <p>Hello {user.username}</p>}
              
              { notes.map(note => (
                <li key={note.id}>{note.body}</li>
              ))} */}
              
    <div className="main-content-inner check">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-md-6 mt-5 mb-3">
                        <div className="card">
                            <div className="seo-fact sbg1">
                                <div className="p-4 d-flex justify-content-between align-items-center">
                                    <div className="seofct-icon"><i className="ti-thumb-up"></i> Likes</div>
                                    <h2>2,315</h2>
                                </div>
                                <canvas id="seolinechart1" height="50"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-md-5 mb-3">
                        <div className="card">
                            <div className="seo-fact sbg2">
                                <div className="p-4 d-flex justify-content-between align-items-center">
                                    <div className="seofct-icon"><i className="ti-share"></i> Share</div>
                                    <h2>3,984</h2>
                                </div>
                                <canvas id="seolinechart2" height="50"></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-3 mb-lg-0">
                        <div className="card">
                            <div className="seo-fact sbg3">
                                <div className="p-4 d-flex justify-content-between align-items-center">
                                    <div className="seofct-icon">Impressions</div>
                                    <canvas id="seolinechart3" height="60"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="seo-fact sbg4">
                                <div className="p-4 d-flex justify-content-between align-items-center">
                                    <div className="seofct-icon">New Users</div>
                                    <canvas id="seolinechart4" height="60"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 mt-5">
                <div className="card">
                    <div className="card-body pb-0">
                        <div id="socialads" style={{height:'245px'}}></div>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 mt-5">
                <div className="card">
                    <div className="card-body">
                        <h4 className="header-title">Recent Statistics</h4>
                        <div id="salesanalytic"></div>
                    </div>
                </div>
            </div>
            
            <div className="col-lg-4 mt-5">
                <div className="card h-full">
                    <div className="card-body">
                        <h4 className="header-title">Recovery Rate</h4>
                        <canvas id="seolinechart8" height="233"></canvas>
                    </div>
                </div>
            </div>
            <div className="col-xl-5 col-lg-12 mt-5">
                <div className="card">
                    <div className="card-body">
                        <h4 className="header-title">Marketing Area</h4>
                        <div id="seomap"></div>
                    </div>
                </div>
            </div>
            <div className="col-xl-7 col-lg-12 mt-5">
                <div className="card">
                    <div className="card-body bg1">
                        <h4 className="header-title text-white">Client Feadback</h4>
                        <div className="testimonial-carousel owl-carousel">
                            <div className="tst-item">
                                <div className="tstu-img">
                                    <img src="assets/images/team/team-author1.jpg" alt="author image" />
                                </div>
                                <div className="tstu-content">
                                    <h4 className="tstu-name">Abel Franecki</h4>
                                    <span className="profsn">Designer</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum ut nihil numquam a aliquam alias necessitatibus ipsa soluta quam!</p>
                                </div>
                            </div>
                            <div className="tst-item">
                                <div className="tstu-img">
                                    <img src="assets/images/team/team-author2.jpg" alt="author image" />
                                </div>
                                <div className="tstu-content">
                                    <h4 className="tstu-name">Abel Franecki</h4>
                                    <span className="profsn">Designer</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum ut nihil numquam a aliquam alias necessitatibus ipsa soluta quam!</p>
                                </div>
                            </div>
                            <div className="tst-item">
                                <div className="tstu-img">
                                    <img src="assets/images/team/team-author3.jpg" alt="author image" />
                                </div>
                                <div className="tstu-content">
                                    <h4 className="tstu-name">Abel Franecki</h4>
                                    <span className="profsn">Designer</span>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum ut nihil numquam a aliquam alias necessitatibus ipsa soluta quam!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
export default Dash
