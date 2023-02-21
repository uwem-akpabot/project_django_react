import React, { useState, useEffect, useContext, useCallback } from 'react';
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import SideComponent_Patient from '../../components/SideComponent_Patient';

const PatientsList = () => {
  let [patients, setPatients] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)
  
  let {user} = useContext(AuthContext);

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
      setPatients(data)
    } else if (response.status === 'Unauthorized'){
      logoutUser()
    }
  }

  const successAlert = (response) => {
    return(
      swal({
          title: "Deleted successfully!",
          text: response.data.message,
          icon: "success"
      }).then(function () {
            getPatients()
      })
    )
  }
  const errorAlert = (error) => {
      return(
        swal({
            title: "Error!",
            text: error,
            icon: "error"
        }).then(function () {
          getPatients()
        })          
      )
  }

  const deletePatient = useCallback( async (id)  => {
    if(window.confirm('Are you sure you want to delete?')){
      axios.delete(
        `http://localhost:8000/api/patients/${id}/delete/`,{
            method : 'DELETE',
            body : JSON.stringify({
                id : id
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res)
        .then(data =>{
          successAlert(data)
        })
        .catch(err => errorAlert(err)
        )
    }
  }, []);

  return (
    <>
        <div className="main-content-inner">
            <div className="row">
                <div className="col-12 col-md-8 mt-5">
                    {/* <div className="col-md-6 mb-3 mt-5 mb-lg-0"> */}
                        <div className="card">
                            <div className="seo-fact sbg1 pt-2">
                                <div className="p-4 d-flex justify-content-between align-items-center">
                                    <div className="seofct-icon">Patients List</div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    <div className="card mt-0">
                        {/* <div className="card-body"> */}
                          <div className="single-table">
                              <div className="table-responsive">
                                  <table className="table table-hover progress-table">
                                      <thead className="text-uppercase sbg1">
                                          <tr class="text-white">
                                              <th scope="col">Clinic No</th>
                                              <th scope="col">Patient's Name</th>
                                              <th scope="col">Sex</th>
                                              <th scope="col">Phone</th>
                                              <th scope="col">Status</th>
                                              <th scope="col">Action</th>
                                          </tr>
                                      </thead>
                                      <tbody>

                                      { patients.map(patient => (
                                        <tr key={patient.id}>
                                          <th scope="row">{patient.clinic_no}</th>
                                          <td>{patient.fname} {patient.sname}</td>
                                          <td>{patient.gender.substring(0,1)}</td>
                                          <td>{patient.phone}</td>
                                          <td><span className="status-p bg-warning px-2">pending</span></td>
                                          {/* <span className="status-p bg-success">complate</span>
                                          <span className="status-p bg-primary">complate</span>
                                          <span className="status-p bg-danger">complate</span> */}

                                          <td>
                                            <ul className="d-flex my-0">
                                              <li className="mr-3"><Link to={`http://localhost:8000/api/patients/${patient.id}/update/`} className="text-info" 
                                                title="Edit" alt="Edit"><i className="fa fa-edit"></i></Link></li>

                                              <li><button onClick={() => deletePatient(patient.id)} value={patient.id} className="text-danger"
                                                title="Delete" alt="Delete"><i className="fa fa-trash"></i></button></li>
                                            </ul>
                                          </td>
                                        </tr>
                                      ))}

                                      </tbody>
                                  </table>
                              </div>
                          </div>
                        {/* </div> */}
                    </div>
                </div>
                
                <SideComponent_Patient /> 
            </div>
        </div>
        </>


    // <>
    // <div className="main-content-inner">

    //   <div className="row">
    //     <div className="col-12 mt-5">
    //             <div className="card">
    //                 <div className="card-body">
    //                     <h4 className="header-title">Manage Patients</h4>
    //                     <Link to="/add-patient" className="pull-right"> <span></span> Add New Patient</Link>
    //                     <div className="single-table">
    //                         <div className="table-responsive">
    //                             <table className="table table-hover progress-table">
    //                                 <thead className="text-uppercase bg-dark">
    //                                     <tr class="text-white">
    //                                         <th scope="col">ID</th>
    //                                         <th scope="col">First Name</th>
    //                                         <th scope="col">Last Name</th>
    //                                         <th scope="col">Gender</th>
    //                                         <th scope="col">Phone</th>
    //                                         <th scope="col">Status</th>
    //                                         <th scope="col">Action</th>
    //                                     </tr>
    //                                 </thead>
    //                                 <tbody>

    //                                 { patients.map(patient => (
    //                                   <tr key={patient.id}>
    //                                     <th scope="row">{patient.clinic_no}</th>
    //                                     <td>{patient.fname}</td>
    //                                     <td>{patient.sname}</td>
    //                                     <td>{patient.gender}</td>
    //                                     <td>{patient.phone}</td>
    //                                     <td><span className="status-p bg-warning">pending</span></td>
    //                                     {/* <span className="status-p bg-success">complate</span>
    //                                     <span className="status-p bg-primary">complate</span>
    //                                     <span className="status-p bg-danger">complate</span> */}

    //                                     <td>
    //                                       <ul className="d-flex my-0">
    //                                         <li className="mr-3"><Link to={`http://localhost:8000/api/patients/${patient.id}/update/`} className="text-info" 
    //                                           title="Edit" alt="Edit"><i className="fa fa-edit"></i></Link></li>

    //                                         <li><button onClick={() => deletePatient(patient.id)} value={patient.id} className="text-danger"
    //                                           title="Delete" alt="Delete"><i className="fa fa-trash"></i></button></li>
    //                                       </ul>
    //                                     </td>
    //                                   </tr>
    //                                 ))}

    //                                 </tbody>
    //                             </table>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // </>
  )
}

export default PatientsList
