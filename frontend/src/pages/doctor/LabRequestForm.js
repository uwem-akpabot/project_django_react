import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';
import SideComponent_Consultation from '../../components/SideComponent_Consultation';

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
        <div className="main-content-inner">
            <div className="row">
                <div className="col-12 mt-5">
                    {/* <div className="col-md-6 mb-3 mt-5 mb-lg-0"> */}
                        <div className="card">
                            <div className="seo-fact sbg3">
                                <div className="p-4 d-flex justify-content-between align-items-center">
                                    <div className="seofct-icon"><i className="fa fa-stethoscope"></i> Laboratory Request Form</div>
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
                                        <label for="validationCustom02">Patient *</label>
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
                                    <div className="col-12 col-md-4 mb-3">
                                        <div className="sbg4">
                                            <div className="p-4 d-flex justify-content-between align-items-center">
                                                <div className="seofct-icon"> Profile Test</div>
                                                <h2 className="seofct-icon"><i className="ti-thumb-up"></i></h2>
                                            </div>
                                            <div className="row custom-checkboxes px-4">
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor="" className="text-white"> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 mb-3">
                                        <div className="sbg4">
                                            <div className="p-4 d-flex justify-content-between align-items-center">
                                                <div className="seofct-icon"> Profile Test</div>
                                                <h2 className="seofct-icon"><i className="ti-thumb-up"></i></h2>
                                            </div>
                                            <div className="row custom-checkboxes px-4">
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor="" className="text-white"> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 mb-3">
                                        <div className="sbg4">
                                            <div className="p-4 d-flex justify-content-between align-items-center">
                                                <div className="seofct-icon"> Profile Test</div>
                                                <h2 className="seofct-icon"><i className="ti-thumb-up"></i></h2>
                                            </div>
                                            <div className="row custom-checkboxes px-4">
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor="" className="text-white"> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 mb-3">
                                        <div className="sbg4">
                                            <div className="p-4 d-flex justify-content-between align-items-center">
                                                <div className="seofct-icon"> Profile Test</div>
                                                <h2 className="seofct-icon"><i className="ti-thumb-up"></i></h2>
                                            </div>
                                            <div className="row custom-checkboxes px-4">
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor="" className="text-white"> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 mb-3">
                                        <div className="sbg4">
                                            <div className="p-4 d-flex justify-content-between align-items-center">
                                                <div className="seofct-icon"> Profile Test</div>
                                                <h2 className="seofct-icon"><i className="ti-thumb-up"></i></h2>
                                            </div>
                                            <div className="row custom-checkboxes px-4">
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor="" className="text-white"> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr />
                                <button onClick={handleSubmit(submitForm)} className="btn btn-primary btn-rounded py-2 px-4 mb-2">Save Info</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default LabRequestForm;