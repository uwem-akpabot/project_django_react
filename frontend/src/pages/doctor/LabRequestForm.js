import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';
import SideComponent_Consultation from '../../components/SideComponent_Consultation';

const LabRequestForm = (props) => {
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
            `${props.host_url}/patients/create/`,
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
                                            <option value="Male">John Doe</option>
                                            <option value="Female">Abobakar Afine</option>
                                        </select>
                                        {errors.gender && <small className="text-danger text-xs font-italic">Gender is required</small>}
                                        {/* <input type="text" name="gender" className="form-control" id="validationCustom02" placeholder="Gender" 
                                            {...register("gender", { required: true })} maxLength="8" 
                                            required /> */}
                                    </div>
                                </div>
                                <div className="form-row"> 
                                    <div className="col-12 col-md-4 mb-3">
                                        <div className="sbg4 pb-4">
                                            <div className="p-4 d-flex justify-content-between align-items-center">
                                                <div className="seofct-icon text-dark"> Profile Test</div>
                                                <h2 className="seofct-icon"><i className="ti-thumb-up"></i></h2>
                                            </div>
                                            <div className="row text-dark px-4">
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; LIP</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; GT9</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; GTI</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; NEO</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; ES</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; HB3</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; DFS</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; LFT</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; RFT</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; TFT</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; MAC</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 mb-3">
                                        <div className="sbg1 pb-4">
                                            <div className="p-4 d-flex justify-content-between align-items-center">
                                                <div className="seofct-icon"> Biochemistry</div>
                                                <h2 className="seofct-icon"><i className="ti-thumb-up"></i></h2>
                                            </div>
                                            <div className="row custom-checkboxes px-4">
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor="" className="text-white"> &nbsp; CEA</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; CA 1</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; CA 5</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; HIV 1 &amp; 2</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; Uric Acid</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; Glucose</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; Free T4</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; PSA</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; CA 9</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; HBA1c</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; HBSAc</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; H. Pylari</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4 mb-3">
                                        <div className="sbg2 pb-4">
                                            <div className="p-4 d-flex justify-content-between align-items-center">
                                                <div className="seofct-icon"> Haematology</div>
                                                <h2 className="seofct-icon"><i className="ti-thumb-up"></i></h2>
                                            </div>
                                            <div className="row custom-checkboxes px-4">
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor="" className="text-white"> &nbsp; FBE</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; FBC</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; HB</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; TWDC</label>
                                                </div>
                                                <div className="col-6">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; Platelets</label>
                                                </div>
                                                <div className="col-12">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; ABO and RH (D)</label>
                                                </div>
                                                <div className="col-12">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; Malaria Parasites</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 mb-3">
                                        <div className="sbg3 pb-4">
                                            <div className="p-4 d-flex justify-content-between align-items-center">
                                                <div className="seofct-icon"> Microbiology</div>
                                                <h2 className="seofct-icon"><i className="ti-thumb-up"></i></h2>
                                            </div>
                                            <div className="row custom-checkboxes px-4">
                                                <div className="col-12">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor="" className="text-white"> &nbsp; Urine</label>
                                                </div>
                                                <div className="col-12">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; Microscopy</label>
                                                </div>
                                                <div className="col-12">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; RPR (VDRL)</label>
                                                </div>
                                                <div className="col-12">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; AFB (Smear Only)</label>
                                                </div>
                                                <div className="col-12">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; AFB (Smear and Culture)</label>
                                                </div>
                                                <div className="col-12">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; G2000</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 mb-3">
                                        <div className="bg-secondary pb-4">
                                            <div className="p-4 d-flex justify-content-between align-items-center">
                                                <div className="seofct-icon text-dark"> Anatomical Pathology</div>
                                                <h2 className="seofct-icon"><i className="ti-thumb-up"></i></h2>
                                            </div>
                                            <div className="row text-dark px-4">
                                                <div className="col-12">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; Histology</label>
                                                </div>
                                                <div className="col-12">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; Non-Gynae/FNA</label>
                                                </div>
                                                <div className="col-12">
                                                    <input type="checkbox" name="profile_test" value="G2000" id="validationCustom01" />
                                                    <label htmlFor=""> &nbsp; Site</label>
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