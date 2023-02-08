import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';

const AddPatient = () => {
    const {register, handleSubmit, reset, formState: { errors } } = useForm();
    let formData = new FormData();

    const submitForm = (data) => {
        formData.append('fname', data.fname)
        formData.append('mname', data.mname)
        formData.append('sname', data.sname)
        formData.append('gender', data.gender);
        formData.append('phone', data.phone);
        formData.append('email', data.email);
        formData.append('address', data.address);
        formData.append('others', data.others);

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
              title: "Info!",
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
                                        <h4 className="header-title">Server side</h4>
                                        <form className="needs-validation" novalidate="">
                                            <div className="form-row">
                                                <div className="col-md-4 mb-3">
                                                    <label for="validationCustom01">First name</label>
                                                    <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="Mark" required="" />
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label for="validationCustom02">Last name</label>
                                                    <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required="" />
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </div>
                                                <div className="col-md-4 mb-3">
                                                    <label for="validationCustomUsername">Username</label>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                        </div>
                                                        <input type="text" className="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required="" />
                                                        <div className="invalid-feedback">
                                                            Please choose a username.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-md-6 mb-3">
                                                    <label for="validationCustom03">City</label>
                                                    <input type="text" className="form-control" id="validationCustom03" placeholder="City" required="" />
                                                    <div className="invalid-feedback">
                                                        Please provide a valid city.
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label for="validationCustom04">State</label>
                                                    <input type="text" className="form-control" id="validationCustom04" placeholder="State" required="" />
                                                    <div className="invalid-feedback">
                                                        Please provide a valid state.
                                                    </div>
                                                </div>
                                                <div className="col-md-3 mb-3">
                                                    <label for="validationCustom05">Zip</label>
                                                    <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required="" />
                                                    <div className="invalid-feedback">
                                                        Please provide a valid zip.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required="" />
                                                    <label className="form-check-label" for="invalidCheck">
                                                        Agree to terms and conditions
                                                    </label>
                                                    <div className="invalid-feedback">
                                                        You must agree before submitting.
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary" type="submit">Submit form</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            
                            
        <div className="bg-gray-100">
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
        </div>
        </>
    )
}
export default AddPatient;