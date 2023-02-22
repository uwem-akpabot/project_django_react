import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';
import SideComponent_Patient from '../../components/SideComponent_Patient';

const AddPatient = () => {
    const {register, handleSubmit, reset, formState: { errors } } = useForm();
    let formData = new FormData();

    const submitForm = (data) => {
        formData.append('fname', data.fname)
        formData.append('sname', data.sname)
        formData.append('clinic_no', data.clinic_no);
        formData.append('address', data.address);
        formData.append('phone', data.phone);
        formData.append('gender', data.gender);
        formData.append('email', data.email);
        formData.append('nextkin', data.nextkin);

        console.log('Getting set to post data')
        const requestOptions = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }
        axios.post(
            `http://localhost:8000/api/patients/create/`,
            formData,
            requestOptions
        ).then(res => res)
        .then(data =>{
            successAlert(data)
        })
        .catch(err => errorAlert(err))
    }
    
    const successAlert = (response) => {
        return(
          swal({
              title: "Saved successfully!",
              text: response.data.message,
              icon: "success"
          }).then(function() {
            reset()
          })           
        )
    }

    const errorAlert = (error) => {
        return(
          swal({
              title: "Error!",
              text: error.message,
              icon: "error"
          })              
        )
    }

    useEffect(() => {
        // setStateLst(stateList)
     },[])

    return (
        <>
        <div className="main-content-inner">
            <div className="row">
                <div className="col-12 col-md-8 mt-5">
                    {/* <div className="col-md-6 mb-3 mt-5 mb-lg-0"> */}
                        <div className="card">
                            <div className="seo-fact sbg1">
                                <div className="p-4 d-flex justify-content-between align-items-center">
                                    <div className="seofct-icon"><i className="fa fa-ambulance"></i> Add New Patient</div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    <div className="card">
                        <div className="card-body">
                            {/* <h4 className="header-title">Add Patient</h4> */}
                            <form className="needs-validation" novalidate="">

                                <div className="form-row">
                                    <div className="col-12 col-md-6 mb-3">
                                        <label for="validationCustom01">First Name *</label>
                                        <input type="text" name="fname" className="form-control" id="validationCustom01" placeholder="First name" 
                                            {...register("fname", { required: true })} maxLength="15" 
                                            required />
                                            {errors.fname && <small className="text-danger text-xs font-italic">First name is required</small>}
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <label for="validationCustom02">Surname *</label>
                                        <input type="text" name="sname" className="form-control" id="validationCustom02" placeholder="Surname" 
                                            {...register("sname", { required: true })} maxLength="15" 
                                            required />
                                        {errors.sname && <small className="text-danger text-xs font-italic">Surname is required</small>}
                                    </div>
                                    <div className="col-12 col-md-4 mb-3">
                                        <label for="validationCustom02">Clinic No. *</label>
                                        <input type="number" name="clinic_no" className="form-control" id="validationCustom02" placeholder="Clinic number" 
                                            {...register("clinic_no", { required: true })} maxLength="8" 
                                            required />
                                        {errors.clinic_no && <small className="text-danger text-xs font-italic">Clinic number is required</small>}
                                    </div>
                                    <div className="col-12 col-md-8 mb-3">
                                        <label for="validationCustom03">Contact Address</label>
                                        <input type="text" name="address" className="form-control" id="validationCustom03" placeholder="Address" 
                                            {...register("address")} />
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <label for="validationCustom04">Phone No.</label>
                                        <input type="number" name="phone" className="form-control" id="validationCustom04" placeholder="Phone number" 
                                        {...register("phone")} maxLength="12" />
                                    </div>
                                    {/* <div className="col-md-3 mb-3">
                                        <label for="validationCustom04">Gender *</label>
                                        <input type="text" name="gender" className="form-control" id="validationCustom04" placeholder="Gender" 
                                            {...register("gender", { required: true })} />
                                        <div className="valid-feedback">
                                            {errors.gender && <small className="text-red-500 text-xs italic">Gender is required</small>}
                                        </div>
                                    </div> */}
                                    <div className="col-12 col-md-6 mb-3">
                                        <label for="validationCustom02">Gender *</label>
                                        <select name="gender" className="form-control" id="validationCustom02" 
                                            {...register("gender", { required: true })} required >
                                            <option value="">- Choose -</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                        {errors.gender && <small className="text-danger text-xs font-italic">Gender is required</small>}
                                        {/* <input type="text" name="gender" className="form-control" id="validationCustom02" placeholder="Gender" 
                                            {...register("gender", { required: true })} maxLength="8" 
                                            required /> */}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-12 col-md-6 mb-3">
                                        <label for="validationCustom01">Email </label>
                                        <input type="email" name="email" className="form-control" id="validationCustom01" placeholder="Email" 
                                            {...register("email")} maxLength="30" />
                                    </div>
                                    <div className="col-12 col-md-6 mb-3">
                                        <label for="validationCustom02">Next of Kin &amp; Phone</label>
                                        <input type="text" name="nextkin" className="form-control" id="validationCustom02" placeholder="Next of kin/Phone no" 
                                            {...register("nextkin")} maxLength="30" />
                                    </div>
                                </div>

                                <hr />
                                <button onClick={handleSubmit(submitForm)} className="btn btn-primary btn-rounded py-2 px-4 mb-2">Save Info</button>
                            </form>
                        </div>
                    </div>
                </div>
                
                <SideComponent_Patient /> 
            </div>
        </div>
    </>
    )
}
export default AddPatient;