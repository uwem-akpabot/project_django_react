import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthContext';

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

  return (
    <>
    <div className="main-content-inner">

      <div className="row">
        <div className="col-12 mt-5">
                <div className="card">
                    <div className="card-body">
                        <h4 className="header-title">Manage Patients</h4>
                        <div className="single-table">
                            <div className="table-responsive">
                                <table className="table table-hover progress-table">
                                    <thead className="text-uppercase bg-dark">
                                        <tr class="text-white">
                                            <th scope="col">ID</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                    { patients.map(patient => (
                                      <tr key={patient.id}>
                                        <th scope="row">{patient.clinic_no}</th>
                                        <td>{patient.fname}</td>
                                        <td>{patient.sname}</td>
                                        <td>{patient.gender}</td>
                                        <td>{patient.phone}</td>
                                        <td><span className="status-p bg-warning">pending</span></td>
                                        {/* <span className="status-p bg-success">complate</span>
                                        <span className="status-p bg-primary">complate</span>
                                        <span className="status-p bg-danger">complate</span> */}

                                        <td>
                                          <ul className="d-flex my-0">
                                            <li className="mr-3"><a href="#" className="text-info" title="Edit" alt="Edit">
                                              <i className="fa fa-edit"></i></a></li>
                                            <li><a href="#" className="text-danger" title="Delete" alt="Delete">
                                              <i className="fa fa-trash"></i></a></li>
                                          </ul>
                                        </td>
                                      </tr>
                                    ))}

                                    </tbody>
                                </table>
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

export default PatientsList
