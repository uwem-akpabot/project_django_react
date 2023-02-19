import React, { useEffect, useState } from 'react'

const PatientsAdd = () => {
  
    let createNote = async () => {
        fetch('/api/patients/create/', {
            method: "POST", 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(patient)
        })
    }

  return (
    <>
    <div class="main-content-inner">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-12">
                        <div class="card mt-5">
                            <div class="card-body">
                                <h4 class="header-title">Add Patients</h4>
                                <form class="needs-validation" novalidate="">
                                    <div class="form-row">
                                        <div class="col-md-4 mb-3">
                                            <label for="validationCustom01">First Name</label>
                                            <input type="text" class="form-control" id="validationCustom01" placeholder="First Name" required="" />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="validationCustom02">Middle Name</label>
                                            <input type="text" class="form-control" id="validationCustom02" placeholder="Middle Name" />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="validationCustom01">Surname</label>
                                            <input type="text" class="form-control" id="validationCustom01" placeholder="Surname" required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-4 mb-3">
                                            <label for="validationCustom01">Gender</label>
                                            <input type="text" class="form-control" id="validationCustom01" placeholder="Gender" required />
                                            <div class="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="validationCustom02">Phone</label>
                                            <input type="text" class="form-control" id="validationCustom02" placeholder="Phone Number" required />
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="validationCustom01">Email</label>
                                            <input type="text" class="form-control" id="validationCustom01" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-md-8 mb-3">
                                            <label for="validationCustom01">Contact Address</label>
                                            <textarea class="form-control" id="validationCustom01" placeholder="Address" rows="4" />
                                        </div>
                                        <div class="col-md-4 mb-3">
                                            <label for="validationCustom01">Others</label>
                                            <input type="text" class="form-control" id="validationCustom01" placeholder="Other info" />
                                        </div>
                                    </div>
                                    <button class="btn btn-primary" type="submit">Submit Information</button>
                                </form>
                            </div>
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

export default PatientsAdd
