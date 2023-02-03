import React, { useEffect, useState } from 'react'

const Prescriptions = () => {
  let [patient, setPatients] = useState([])

  useEffect(() => {
    setPatients()
  }, [])

  let getPatients = async () => {
    let response = await fetch('http://localhost:8000/api/patients/')
    let data = await response.json()
    console.log(data)
    setPatients(data)
  }

  return (
    <>
    <div className="main-content-inner check">
        <div className="row">
            <div className="col-lg-8">
              Prescriptions
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Prescriptions
