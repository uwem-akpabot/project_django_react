import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';
import SideComponent_Consultation from '../../components/SideComponent_Consultation';

const AddSoapNote = () => {
    const {register, handleSubmit, reset, formState: { errors } } = useForm();
    let formData = new FormData();

    const submitForm = (data) => {
        formData.append('patient', data.patient)
        formData.append('date_of_visit', data.date_of_visit)
        formData.append('subjective', data.subjective);
        formData.append('objective', data.objective);
        formData.append('assessment', data.assessment);
        formData.append('plan', data.plan);
        formData.append('comment', data.comment);

        console.log('Getting set to post data')
        const requestOptions = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }
        axios.post(
            `http://localhost:8000/api/soapnote/addsoapnote/`,
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
                            <div className="seo-fact sbg3">
                                <div className="p-4 d-flex justify-content-between align-items-center">
                                    <div className="seofct-icon"><i className="fa fa-stethoscope"></i> Add S.O.A.P. Note</div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    <div className="card">
                        <div className="card-body">
                            {/* <h4 className="header-title">Add Patient</h4> */}
                            <form className="needs-validation" novalidate="">
                                <div className="form-row">
                                    <div className="col-12 col-md-8 mb-3">
                                        <label for="validationCustom01">Select Patient *</label>
                                        <input type="text" name="patient" className="form-control border-sbg3" id="validationCustom01" placeholder="Patient" 
                                            {...register("patient", { required: true })} maxLength="15" 
                                            required />
                                            {errors.patient && <small className="text-danger text-xs font-italic">Patient is required</small>}
                                    </div> 

                                    <div className="col-12 col-md-4 mb-3">
                                        <label for="validationCustom02">Date of Visit *</label>
                                        <input type="date" name="date_of_visit" className="form-control border-sbg3" id="validationCustom02" placeholder="date_of_visit" 
                                            {...register("date_of_visit", { required: true })} required />
                                        {errors.date_of_visit && <small className="text-danger text-xs font-italic">Date of visit is required</small>}
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label for="validationCustom01">Subjective *</label>
                                        <textarea name="subjective" className="form-control border-sbg3" id="validationCustom01" placeholder="Subjective" 
                                            {...register("subjective", { required: true })} rows="3"
                                            required ></textarea>
                                            {errors.subjective && <small className="text-danger text-xs font-italic">Subjective is required</small>}
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label for="validationCustom01">Objective *</label>
                                        <textarea name="objective" className="form-control border-sbg3" id="validationCustom01" placeholder="Objective" 
                                            {...register("objective", { required: true })} rows="3"
                                            required ></textarea>
                                            {errors.objective && <small className="text-danger text-xs font-italic">Objective is required</small>}
                                    </div>

                                    <div className="col-12 mb-3">
                                        <label for="validationCustom01">Assessment *</label>
                                        <textarea name="assessment" className="form-control border-sbg3" id="validationCustom01" placeholder="Assessment" 
                                            {...register("assessment", { required: true })} rows="3"
                                            required ></textarea>
                                            {errors.assessment && <small className="text-danger text-xs font-italic">Assessment is required</small>}
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label for="validationCustom01">Plan *</label>
                                        <textarea name="plan" className="form-control border-sbg3" id="validationCustom01" placeholder="Plan" 
                                            {...register("plan", { required: true })} rows="3"
                                            required ></textarea>
                                            {errors.plan && <small className="text-danger text-xs font-italic">Plan is required</small>}
                                    </div>
                                    <div className="col-12 col-md-8 mb-3">
                                        <label for="validationCustom01">Other Comments</label>
                                        <textarea name="comment" className="form-control border-sbg3" id="validationCustom01" placeholder="Other Comments" 
                                            {...register("comment")} rows="2"></textarea>
                                    </div>
                                </div>
                                <hr />
                                <button onClick={handleSubmit(submitForm)} className="btn btn-primary btn-rounded py-2 px-4 mb-2">Save Note</button>
                                    {/* <div className="col-12 col-md-6 mb-3">
                                        <label for="validationCustom02">Gender *</label>
                                        <select name="gender" className="form-control" id="validationCustom02" 
                                            {...register("gender", { required: true })} required >
                                            <option value="">- Choose -</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                        {errors.gender && <small className="text-danger text-xs font-italic">Gender is required</small>}
                                    </div> */}
                            </form>
                        </div>
                    </div>
                </div>
                
                <SideComponent_Consultation /> 
            </div>
        </div>
        </>





        // <div className="col-12">
        //     <div className="card mt-5">
        //         <div className="card-body">
        //             <h4 className="header-title">Add SOAP Note</h4>
        //             <form className="needs-validation" novalidate="">

        //                 <div className="form-row">
        //                     <div className="col-md-6 mb-3">
        //                         <label for="validationCustom01">Select Patient *</label>
        //                         <input type="text" name="patient" className="form-control" id="validationCustom01" placeholder="Patient" 
        //                             {...register("patient", { required: true })} maxLength="15" 
        //                             required />
        //                             {errors.patient && <small className="text-danger text-xs font-italic">Patient is required</small>}
        //                     </div>
        //                     <div className="col-md-6 mb-3">
        //                         <label for="validationCustom02">Date of Visit *</label>
        //                         <input type="date" name="date_of_visit" className="form-control" id="validationCustom02" placeholder="date_of_visit" 
        //                             {...register("date_of_visit", { required: true })} required />
        //                         {errors.date_of_visit && <small className="text-danger text-xs font-italic">Date of visit is required</small>}
        //                     </div>
        //                 </div>
                        
        //                 <div className="form-row">
        //                     <div className="col-md-6 mb-3">
        //                         <label for="validationCustom01">Subjective *</label>
        //                         <textarea name="subjective" className="form-control" id="validationCustom01" placeholder="Subjective" 
        //                             {...register("subjective", { required: true })} rows="5"
        //                             required ></textarea>
        //                             {errors.subjective && <small className="text-danger text-xs font-italic">Subjective is required</small>}
        //                     </div>
        //                     <div className="col-md-6 mb-3">
        //                         <label for="validationCustom01">Objective *</label>
        //                         <textarea name="objective" className="form-control" id="validationCustom01" placeholder="Objective" 
        //                             {...register("objective", { required: true })} rows="5"
        //                             required ></textarea>
        //                             {errors.objective && <small className="text-danger text-xs font-italic">Objective is required</small>}
        //                     </div>
        //                 </div>

        //                 <div className="form-row">
        //                     <div className="col-md-6 mb-3">
        //                         <label for="validationCustom01">Assessment *</label>
        //                         <textarea name="assessment" className="form-control" id="validationCustom01" placeholder="Assessment" 
        //                             {...register("assessment", { required: true })} rows="5"
        //                             required ></textarea>
        //                             {errors.assessment && <small className="text-danger text-xs font-italic">Assessment is required</small>}
        //                     </div>
        //                     <div className="col-md-6 mb-3">
        //                         <label for="validationCustom01">Plan *</label>
        //                         <textarea name="plan" className="form-control" id="validationCustom01" placeholder="Plan" 
        //                             {...register("plan", { required: true })} rows="5"
        //                             required ></textarea>
        //                             {errors.plan && <small className="text-danger text-xs font-italic">Plan is required</small>}
        //                     </div>
        //                 </div>

        //                 <div className="form-row">
        //                     <div className="col-md-6 mb-3">
        //                         <label for="validationCustom01">Other Comments</label>
        //                         <textarea name="comment" className="form-control" id="validationCustom01" placeholder="Other Comments" 
        //                             {...register("comment")} rows="3"></textarea>
        //                     </div>
        //                 </div>

        //                 <button onClick={handleSubmit(submitForm)} className="btn btn-primary">Save Note</button>
        //             </form>
        //         </div>
        //     </div>
        // </div>

        
    )
}
export default AddSoapNote;