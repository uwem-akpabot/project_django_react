import React, { useEffect} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import swal from 'sweetalert';

const AddSoapNote = () => {
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
                    <h4 className="header-title">Add SOAP Note</h4>
                    <form className="needs-validation" novalidate="">

                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom01">Select Patient *</label>
                                <input type="text" name="patient" className="form-control" id="validationCustom01" placeholder="Patient" 
                                    {...register("patient", { required: true })} maxLength="15" 
                                    required />
                                    {errors.patient && <small className="text-danger text-xs font-italic">Patient is required</small>}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom02">Date of Visit *</label>
                                <input type="date" name="date_of_visit" className="form-control" id="validationCustom02" placeholder="date_of_visit" 
                                    {...register("date_of_visit", { required: true })} required />
                                {errors.date_of_visit && <small className="text-danger text-xs font-italic">Date of visit is required</small>}
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom01">Subjective *</label>
                                <textarea name="subjective" className="form-control" id="validationCustom01" placeholder="Subjective" 
                                    {...register("subjective", { required: true })} rows="5"
                                    required ></textarea>
                                    {errors.subjective && <small className="text-danger text-xs font-italic">Subjective is required</small>}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom01">Objective *</label>
                                <textarea name="objective" className="form-control" id="validationCustom01" placeholder="Objective" 
                                    {...register("objective", { required: true })} rows="5"
                                    required ></textarea>
                                    {errors.objective && <small className="text-danger text-xs font-italic">Objective is required</small>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom01">Assessment *</label>
                                <textarea name="assessment" className="form-control" id="validationCustom01" placeholder="Assessment" 
                                    {...register("assessment", { required: true })} rows="5"
                                    required ></textarea>
                                    {errors.assessment && <small className="text-danger text-xs font-italic">Assessment is required</small>}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom01">Plan *</label>
                                <textarea name="plan" className="form-control" id="validationCustom01" placeholder="plan" 
                                    {...register("plan", { required: true })} rows="5"
                                    required ></textarea>
                                    {errors.plan && <small className="text-danger text-xs font-italic">Plan is required</small>}
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-6 mb-3">
                                <label for="validationCustom01">Other Comments</label>
                                <textarea name="comments" className="form-control" id="validationCustom01" placeholder="Other Comments" 
                                    {...register("comments")} rows="3"></textarea>
                            </div>
                        </div>

                        <button onClick={handleSubmit(submitForm)} className="btn btn-primary">Save Note</button>
                    </form>
                </div>
            </div>
        </div>

        <br /><br />
        </>
    )
}
export default AddSoapNote;