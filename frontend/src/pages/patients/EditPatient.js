import React, { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import axios from 'axios';

const EditPatient = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [blogId, setblogId] = useState('');
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [productImage, setProductImage] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const [newProductImage, setNewProductImage] = useState();
    const [blogSummary, setBlogSummary] = useState();
    let formData = new FormData();
    const handleChange = (e, editor) => {
        clearErrors('content');
        setBlogContent(editor.getData())
    }
    const {register, handleSubmit, reset, setValue, formState: { errors }, clearErrors } = useForm();
    const getData = async () => {
        setLoading(true)
        await fetch(`${ROUTE.BLOGS_API}/blogs/${id}`)
          .then((res) => res.json())
          .then((res) => {
            setblogId(res.data[0].id)
            setBlogTitle(res.data[0].title)
            setBlogSummary(res.data[0].summary)
            setBlogContent(res.data[0].content)
            setProductImage(res.data[0].image_path)
        })
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setTimeout(() => 
            setValue("title", blogTitle),
            setValue("summary", blogSummary)
        );
    }, [loading]);

    const onSelectFile = useCallback( async (e)  => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        setNewProductImage(file)
        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };
    }, []);

    const submitForm = (data) => {
        
        formData.append('product_image', newProductImage)
        formData.append('title', data.title);
        formData.append('summary', data.summary);
        formData.append('content', blogContent)      

        const requestOptions = {
            method: "POST",
            headers: {
              'Content-type': 'multipart/form-data'
            }
        }
        axios.put(
            `${ROUTE.BLOGS_API}/blogs/${blogId}`,
            formData,
            requestOptions
        ).then(res => res)
        .then(data =>{
            if (data.status == 200 || data.status == 302) {
                successAlert(data)
            }
            else {
                errorAlert(data.message)
            }
        })
        .catch(err => errorAlert(err))
  
      reset()
      setSelectedImage('');
    }

    const successAlert = (response) => {
        return(
          swal({
              title: "Info!",
              text: response.data.message,
              icon: "success"
          }).then(function () {
                getData()
          })
        )
    }
    const errorAlert = (error) => {
        return(
          swal({
              title: "Error!",
              text: error,
              icon: "error"
          }).then(function () {
            getData()
          })          
        )
    }

  return (
    <div className="bg-gray-100">
        <div className="header bg-white h-16 px-10 py-8 border-b-2 border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-green-700 tracking-wider font-thin text-md"><Link to={ROUTE.ADMIN_DASHBOARD}>Home</Link></span>
                <span>/</span>
                <span className="tracking-wide text-md">
                    <span className="text-green-700 tracking-wider font-thin text-md"><Link to={ROUTE.ADMIN_BLOGS}>Blogs</Link></span>
                </span>
                <span>/</span>
                <span className="tracking-wide text-md">
                    <span className="text-base">Edit Blogs</span>
                </span>
                </div>
        </div>
        <div className="header my-3 h-12 px-4 lg:px-10 py-8  flex items-center justify-between">
            <h1 className="font-medium text-2xl">Edit Blogs</h1>
            <Link to={ROUTE.ADMIN_BLOGS} className="focus:outline-none text-white m-4 p-3 font-semibold rounded-md bg-green-700 hover:bg-green-600 hover:shadow-lg transition-all duration-100"> <span><FaAngleLeft className="inline-block w-5 h-5"/>
            </span> Back to Blogs</Link>
        </div>
        {loading
        ? (<div className="h-full flex justify-center items-center">
                <h3 className="font-bold text-green-600 text-2xl mx-auto ">Loading...</h3>
            </div>
        )
        :
        (
            <div className="flex flex-col mx-3 lg:flex-row">
            <form className="w-full lg:w-3/5 bg-white shadow-md p-6">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor='title'>Blog Title</label>
                        <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d] focus:ring-[#98c01d]" type='text' name="title"
                        {...register("title", { required: true })} required onChange={(e) => setBlogTitle(e.target.value)} />
                        {errors.title && <small className="text-red-500 text-xs italic">Blog title is required</small>}
                    </div>

                    <div className="w-full md:w-full px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor='title'>Blog Summary</label>
                            <textarea className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]" 
                            type='text' 
                            name="summary" 
                            placeholder="Blog summary 250 words" rows={3} 
                            {...register("summary", { required: true})}
                            required maxLength={250} onChange={(e) => setBlogSummary(e.target.value)}/>
                            {errors.summary && <small className="text-red-500 text-xs italic mx-auto flex justify-center mt-2">Summary is required</small>}
                        </div>

                    <div className="w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor='content'>Content</label>
                            <CKEditor 
                                editor={ClassicEditor}
                                onChange={handleChange} data={blogContent} className="w-full"
                            />
                    </div>
                    <div className="w-full px-3 mb-12">
                        <label className="cursor-pointer flex w-fit max-w-lg flex-col items-center justify-center rounded-xl border-2 border-dashed border-green-400 bg-white p-6 mx-auto" htmlFor='product_image'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>

                        <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">Blog image</h2>

                        <p className="mt-2 text-gray-500 tracking-wide">Upload or drag & drop your file SVG, PNG, JPG or GIF. </p>

                        <input name="product_image" id="product_image" type="file" className="hidden" onChange={onSelectFile} accept="image/png, image/jpeg, image/webp"/>
                        </label>
                        {errors.product_image && <small className="text-red-500 text-xs italic">Blog image is required</small>}
                    </div>
                    {errors.product_image && <small className="text-red-500 text-xs italic">Blog image is required</small>}

                    <div className="w-full mx-12 flex justify-center mb-5">
                        {productImage &&
                            (
                                <img src={`${CONSTANT.IMAGE_STORE}/${productImage}`}  className={selectedImage ? "hidden" : `w-32 h-32 $`}/>
                            )
                        }
                        {selectedImage &&
                            (
                                <img src={selectedImage} className="w-32 h-32"/>
                            )
                        } 
                    </div>
                    <div className="w-full px-3 mb-6">
                        <button className="appearance-none w-full block bg-green-700 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-green-600 focus:outline-none focus:bg-white focus:border-gray-500"
                        onClick={handleSubmit(submitForm)}
                        >Update Blog</button>
                    </div>
                </div>
            </form>          
        </div> 
        )
        }       
    </div>
  )
}

export default EditPatient