import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';

const LabRequestForm = () => {
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
        <div className="col-12">
            <div className="card mt-5">
                <div className="card-body">
                    <h4 className="header-title">Add Patient</h4>
                    <form className="needs-validation" novalidate="">

                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom01">First Name *</label>
                                <input type="text" name="fname" className="form-control" id="validationCustom01" placeholder="First name" 
                                    {...register("fname", { required: true })} maxLength="15" 
                                    required />
                                    {errors.fname && <small className="text-danger text-xs font-italic">First name is required</small>}
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom02">Surname *</label>
                                <input type="text" name="sname" className="form-control" id="validationCustom02" placeholder="Surname" 
                                    {...register("sname", { required: true })} maxLength="15" 
                                    required />
                                {errors.sname && <small className="text-danger text-xs font-italic">Surname is required</small>}
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom02">Clinic No. *</label>
                                <input type="text" name="clinic_no" className="form-control" id="validationCustom02" placeholder="Clinic number" 
                                    {...register("clinic_no", { required: true })} maxLength="8" 
                                    required />
                                {errors.clinic_no && <small className="text-danger text-xs font-italic">Clinic number is required</small>}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom03">Contact Address</label>
                                <input type="text" name="address" className="form-control" id="validationCustom03" placeholder="Address" 
                                    {...register("address")} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="validationCustom04">Phone No.</label>
                                <input type="text" name="phone" className="form-control" id="validationCustom04" placeholder="Phone number" 
                                   maxLength="12" />
                            </div>
                            {/* <div className="col-md-3 mb-3">
                                <label for="validationCustom04">Gender *</label>
                                <input type="text" name="gender" className="form-control" id="validationCustom04" placeholder="Gender" 
                                    {...register("gender", { required: true })} />
                                <div className="valid-feedback">
                                    {errors.gender && <small className="text-red-500 text-xs italic">Gender is required</small>}
                                </div>
                            </div> */}
                            <div className="col-md-3 mb-3">
                                <label for="validationCustom02">Gender *</label>
                                <input type="text" name="gender" className="form-control" id="validationCustom02" placeholder="Gender" 
                                    {...register("gender", { required: true })} maxLength="8" 
                                    required />
                                {errors.gender && <small className="text-danger text-xs font-italic">Gender is required</small>}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom01">Email </label>
                                <input type="text" name="email" className="form-control" id="validationCustom01" placeholder="Email" 
                                    {...register("email")} maxLength="30" />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom02">Next of Kin &amp; Phone</label>
                                <input type="text" name="nextkin" className="form-control" id="validationCustom02" placeholder="Next of kin/Phone no" 
                                    {...register("nextkin")} maxLength="30" />
                            </div>
                        </div>

                        <button onClick={handleSubmit(submitForm)} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

        <br /><br />
        </>
    )
}
export default LabRequestForm;