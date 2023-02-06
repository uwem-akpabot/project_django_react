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
    <div class="main-content-inner">
      <div class="row">
          <div class="col-12 mt-5">
            <div class="card">
                <div class="card-body">
                    <h4 class="header-title">Manage Patients</h4>
                    <div class="table table-responsive">
                        <table>
                            <thead class="text-capitalize">
                                <tr>
                                    <th>First Name</th>
                                    <th>Middle Name</th>
                                    <th>Surname</th>
                                    <th>Gender</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                            { patients.map(patient => (
                              <tr key={patient.id}>
                                <td>{patient.fname}</td>
                                <td>{patient.mname}</td>
                                <td>{patient.sname}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.phone}</td>
                                <td>{patient.email}</td>
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
    {/* <div className="main-content-inner check">
        <div className="row">
            <div className="col-lg-8">
              Patient List
                
            </div>
        </div>
    </div> */}
    </>
  )
}

export default PatientsList
