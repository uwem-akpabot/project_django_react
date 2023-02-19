import React, { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaAngleLeft, FaTimes, FaCheck, FaStar } from "react-icons/fa";
import * as ROUTE from '../../../constants/routes';
import * as CONSTANT from "../../../constants/constants";
import axios from 'axios';
import swal from 'sweetalert';

const PatientDetails = () => {
    const { id } = useParams();
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productSalePrice, setProductSalePrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productFeatured, setProductFeatured] = useState('');
    const [productVerified, setProductVerified] = useState('');
    const [productGalleryImage, setProductGalleryImage] = useState([]);

    const getData = () => {
        fetch(`${ROUTE.PRODUCTS_API}/products/${id}`)
          .then((res) => res.json())
          .then((res) => {
            console.log(res.data[0])
            setProductVerified(res.data[0].is_verified)
            setProductFeatured(res.data[0].featured)
            setProductName(res.data[0].name)
            setProductPrice(res.data[0].price)
            setProductSalePrice(res.data[0].sale_price)
            setProductQuantity(res.data[0].quantity)
            setProductDescription(res.data[0].description)
            setProductImage(res.data[0].image_path)
            setProductCategory(res.data[0].product_category)
            res.data[0].products_gallery.map(item => {
                setProductGalleryImage((productGalleryImage) =>[...productGalleryImage, item])
            })
          })
    }

    useEffect(() => {
        getData()
    }, [])

    const featureProduct = useCallback( async (id, e)  => {
        e.preventDefault();
        axios.put(
            `${ROUTE.PRODUCTS_API}/products/${id}/feature`,{
                method : 'PUT',
                body : JSON.stringify({
                    id : id
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res)
            .then(data =>{
              successAlert(data)
            })
            .catch(err => errorAlert(err)
            )
    }, []);

    const unfeatureProduct = useCallback( async (id, e)  => {
        e.preventDefault();
        await axios.put(
            `${ROUTE.PRODUCTS_API}/products/${id}/unfeature`,{
                method : 'PUT',
                body : JSON.stringify({
                    id : id
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res)
            .then(data =>{
              successAlert(data)
            })
            .catch(err => errorAlert(err)
            )
    }, []);

    const verifyProduct = useCallback( async (id, e)  => {
        e.preventDefault();
        await axios.put(
            `${ROUTE.PRODUCTS_API}/products/${id}/verify`,{
                method : 'PUT',
                body : JSON.stringify({
                    id : id
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res)
            .then(data =>{
              successAlert(data)
            })
            .catch(err => errorAlert(err)
            )
    }, []);
    
    const unverifyProduct = useCallback( async (id, e)  => {
        e.preventDefault();
        await axios.put(
            `${ROUTE.PRODUCTS_API}/products/${id}/unverify`,{
                method : 'PUT',
                body : JSON.stringify({
                    id : id
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res)
            .then(data =>{
                successAlert(data)
            })
            .catch(err => errorAlert(err)
            )
    }, []);

    const successAlert = (response) => {
        return(
            swal({
                title: "Info!",
                text: response.data.message,
                icon: "success"
            }).then(function () {
                window.location.reload()
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
                window.location.reload()
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
                    <span className="text-green-700 tracking-wider font-thin text-md"><Link to={ROUTE.ADMIN_PRODUCTS}>Products</Link></span>
                </span>
                <span>/</span>
                <span className="tracking-wide text-md">
                    <span className="text-base">View Product</span>
                </span>
                </div>
        </div>
        <div className="header my-3 h-12 px-4 lg:px-10 py-8  flex items-center justify-between">
            <h1 className="font-medium text-2xl">View Product</h1>
            <Link className="focus:outline-none text-white m-4 p-3 font-semibold rounded-md bg-green-700 hover:bg-green-600 hover:shadow-lg transition-all duration-100" to={ROUTE.ADMIN_PRODUCTS}><span><FaAngleLeft className="inline-block w-5 h-5"/>
            </span> Back</Link>
        </div>
        <div className="flex mx-3 justify-center">
            <div className="w-full lg:w-4/5 bg-white shadow-md p-6">
                <div className="flex py-5 items-center justify-between">
                    {productVerified == 1 ?
                        <button className="rounded-md text-white bg-red-600 p-2 flex justify-between items-center" value={id} onClick={(e) => unverifyProduct(id, e)}>
                              <span><FaTimes className="w-4 h-4 mr-1" /></span> Unverify
                        </button>
                        :
                        <button className="rounded-md text-white bg-green-600 p-2 flex justify-between items-center" value={id} onClick={(e) => verifyProduct(id, e)}>
                              <span><FaCheck className="w-4 h-4 mr-1" /></span> Verify
                        </button>
                    }
                    {productVerified == 1 ?
                        productFeatured == 1 ?
                        <button className="rounded-md text-white bg-red-600 p-2 flex justify-center items-center text-center" value={id} onClick={(e) => unfeatureProduct(id, e)}>
                              <span><FaTimes className="w-4 h-4 mr-1" /></span> Unfeature
                        </button>
                        :
                        <button className="rounded-md text-white bg-green-600 p-2 flex justify-between items-center" value={id} onClick={(e) => featureProduct(id, e)}>
                              <span><FaStar className="w-4 h-4 mr-1" /></span> Feature Product
                        </button>
                        : ''
                        
                    }
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor='name'>Product Name</label>
                        <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d] invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type='text' disabled
                        defaultValue={productName}/>
                    </div>

                    <div className="w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor='name'>Category</label>
                        <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d] invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500" type='text' disabled
                        defaultValue={productCategory}/>
                    </div>

                    <div className="w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor='price'>Price</label>
                        <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]" type='text' disabled
                        value={productPrice}/>
                    </div>

                    <div className="w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor='sale_price'>Sale Price</label>
                        <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]" type='text' disabled
                        value={productSalePrice} />
                    </div>

                    <div className="w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor='quantity'>Count in stock</label>
                        <input className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]" type='number' disabled
                        required value={productQuantity}/>
                    </div>
                    
                    <div className="w-full px-3 mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor='description'>Description</label>
                        <textarea className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]" rows={5}  disabled value={productDescription}/>
                        
                    </div>

                    <div className="w-full px-3 flex justify-end mb-5 text-green-500">
                        <p className="flex mx-4 "> Product image</p>
                    </div>
                    <div className="w-full mx-12 flex justify-center mb-5">
                        {productImage &&
                            (
                                <img src={`${CONSTANT.IMAGE_STORE}/${productImage}`} className="w-32 h-32"/>
                            )
                        }
                    </div>
                    <div className="w-full px-3 flex justify-end mb-5 text-green-500">
                        <p className="flex mx-4 ">Product gallery images</p>
                    </div>
                    <div className="overflow-x-auto flex justify-center mb-5 mx-auto">
                        {productGalleryImage &&
                            
                            productGalleryImage.map((image, index) => {
                                return (
                                    <>
                                        <img key={index}  src={`${CONSTANT.IMAGE_STORE}/${image.path}`} className="w-32 h-32"/>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>          
        </div>        
    </div>

  )
}

export default PatientDetails