import React from 'react';
import AddPatient from './AddPatient';
import PatientsList from './ManagePatients';
// import AddProduct from '../../components/AddProduct';
// import PostForm from '../../components/PostForm';

const AppPostForm = () => {
  return (
    <div className="row">
      <div className="col-6">
        <AddPatient />
      </div>
      <div className="col-6">
        <PatientsList />
      </div>
    </div>
  )
}

export default AppPostForm
