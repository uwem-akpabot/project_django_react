import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';

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
        <div className="col-12">
            <div className="card mt-5">
                <div className="card-body">
                    <h4 className="header-title">Add Patient</h4>
                    <form className="needs-validation" novalidate="">

                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom01">First Name *</label>
                                <input type="text" name="fname" className="form-control" id="validationCustom01" placeholder="First name" 
                                    {...register("fname", { required: true })}
                                    required />
                                    {errors.fname && <small className="text-danger text-xs font-italic">First name is required</small>}
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom02">Surname *</label>
                                <input type="text" name="sname" className="form-control" id="validationCustom02" placeholder="Surname" 
                                    {...register("sname", { required: true })}
                                    required />
                                {errors.sname && <small className="text-danger text-xs font-italic">Surname is required</small>}
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom02">Clinic No. *</label>
                                <input type="text" name="clinic_no" className="form-control" id="validationCustom02" placeholder="Clinic number" 
                                    {...register("clinic_no", { required: true })}
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
                                    {...register("phone", { required: true })} />
                                <div className="valid-feedback">
                                    {errors.phone && <small className="text-red-500 text-xs italic">Phone number is required</small>}
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label for="validationCustom04">Gender</label>
                                <input type="text" name="gender" className="form-control" id="validationCustom04" placeholder="Gender" 
                                    {...register("gender", { required: true })} />
                                <div className="valid-feedback">
                                    {errors.gender && <small className="text-red-500 text-xs italic">Gender is required</small>}
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom01">Email </label>
                                <input type="text" name="email" className="form-control" id="validationCustom01" placeholder="Email" 
                                    {...register("email")} />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom02">Next of Kin &amp; Phone</label>
                                <input type="text" name="nextkin" className="form-control" id="validationCustom02" placeholder="Next of kin/Phone no" 
                                    {...register("nextkin")} />
                            </div>
                        </div>

                        <button onClick={handleSubmit(submitForm)} className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>

        <br /><br />
                            
                            
                            
        {/* <div className="bg-gray-100">
            <form>
                <div>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text' name="fname" placeholder="First Name"
                        {...register("fname", { required: true })}
                        required />
                    {errors.fname && <small className="text-red-500 text-xs italic">first name is required</small>}
                </div>
                <div>
                    <label htmlFor='mname'>middle Name</label>
                    <input type='text' name="mname" placeholder="middle Name"
                        {...register("mname", { required: false })} />
                    {errors.mname && <small className="text-red-500 text-xs italic">Error with middle name</small>}
                </div>
                <div>
                    <label htmlFor='sname'>surname</label>
                    <input type='text' name="sname" placeholder="Surname"
                        {...register("sname", { required: true })}
                        required />
                    {errors.sname && <small className="text-red-500 text-xs italic">surname is required</small>}
                </div>


                <div>
                    <label htmlFor='gender'>Gender</label>
                    <input type='text' name="gender" placeholder="Gender"
                        {...register("gender", { required: true })}
                        required />
                    {errors.gender && <small className="text-red-500 text-xs italic">Gender is required</small>}
                </div>
                <div>
                    <label htmlFor='phone'>Phone </label>
                    <input type='text' name="phone" placeholder="Phone"
                        {...register("phone", { required: true })} />
                    {errors.phone && <small className="text-red-500 text-xs italic">Phone is required</small>}
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name="email" placeholder="Email"
                        {...register("email", { required: false })}
                        required />
                    {errors.email && <small className="text-red-500 text-xs italic">Error on Email</small>}
                </div>


                <div>
                    <label htmlFor='address'>Address</label>
                    <input type='text' name="address" placeholder="Address"
                        {...register("address", { required: false })}
                        required />
                    {errors.address && <small className="text-red-500 text-xs italic">Error on Address</small>}
                </div>
                <div>
                    <label htmlFor='others'>Others </label>
                    <input type='text' name="others" placeholder="Phone"
                        {...register("others", { required: false })} />
                    {errors.others && <small className="text-red-500 text-xs italic">Error on Others</small>}
                </div>
                <div>
                    <button className="appearance-none w-full block bg-green-700 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-green-600 focus:outline-none focus:bg-white focus:border-gray-500"
                        onClick={handleSubmit(submitForm)}>Create Admin</button>
                </div>
            </form>
        </div> */}
        </>
    )
}
export default AddPatient;