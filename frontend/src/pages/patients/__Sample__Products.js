import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineProductionQuantityLimits, MdInfoOutline, MdStarOutline, MdStar } from "react-icons/md";

import * as ROUTE from '../../../constants/routes';
import * as CONSTANT from '../../../constants/constants';

function Products() {
    const [loading, setLoading] = useState(false);
    const [products, fetchProducts] = useState([]);
    const getData = () => {
      setLoading(true)
      fetch(`${ROUTE.PRODUCTS_API}/products`)
        .then((res) => res.json())
        .then((res) => {
          fetchProducts(res.results)
          setLoading(false)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    let productList;
    if(products.length > 0){
      productList = products.map((item, i) => {
            return (
                <tr key={i}>
                    <td className="p-2">
                        <input type="checkbox" className="w-5 h-5" />
                    </td>
                    <td className="p-2 w-8">
                    <img src={`${CONSTANT.IMAGE_STORE}/${item.image_path}`} className="w-8 h-8 mx-auto overflow-hidden" alt={item.name} />
                    </td>
                    <td className="p-2 text-left">
                        {item.name}
                    </td>
                    <td className="p-2">
                        {item.sku}
                    </td>
                    <td className="p-2">
                      <span className={
                        item.sale_price ? "line-through mr-1" : "" }>{ item.price }</span> { item.sale_price ? item.sale_price : ''}
                        
                    </td>
                    <td className="p-2">
                        { item.product_category }
                    </td>
                    <td className="p-2">
                        {item.featured == 1 ?
                        <span><MdStar className="mx-auto h-6 w-6 text-green-600 text-center" /></span>
                        :
                        <span><MdStarOutline className="mx-auto h-6 w-6 text-green-600 text-center" /></span>}
                    </td>
                    <td className="">
                        {item.is_verified == 1 ?
                        <span className="rounded-md text-white bg-green-600 p-1 flex justify-center items-center text-center">Verified</span>
                        :
                        <span className="rounded-md  text-white bg-red-600 p-1 flex justify-center items-center text-center">Unverified</span>}
                    </td>
                    <td className="p-2">
                      <div className="flex justify-center">
                            <Link to={`${ROUTE.ADMIN_VIEW_PRODUCT}/${item.id}`} className="rounded-md hover:bg-gray-100 text-green-600 p-2 flex justify-between items-center">
                                <span><MdInfoOutline className="w-4 h-4 mr-1"/>
                                    </span> View
                            </Link>
                        </div>
                    </td>
                </tr>
            )
        }

        );
    } else {
      productList =  (<tr className=''><td colSpan={10} className="">
        <div className="flex flex-col my-4 space-y-3 justify-center items-center text-xl font-medium tracking-wide py-4 text-green-700 text-center">
            <MdOutlineProductionQuantityLimits className="w-16 h-16" />
            <p>No products added yet</p>
        </div>
        </td></tr>)
        
    }

    let productsLoading = (
      <>
          <tr className="mx-auto">
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div className="flex justify-center">
                      <div data-placeholder className="w-1/2 h-8 bg-gray-200 overflow-hidden relative">
                      </div>
                  </div>    
              </td>
          </tr>
          <tr className="mx-auto">
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>              
              <td className="p-2">
                  <div className="flex justify-center">
                      <div data-placeholder className="w-1/2 h-8 bg-gray-200 overflow-hidden relative">
                      </div>
                  </div>    
              </td>
          </tr>
          <tr className="mx-auto">
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div data-placeholder className="w-full h-8 bg-gray-200 overflow-hidden relative mx-auto">
                  </div>
              </td>
              <td className="p-2">
                  <div className="flex justify-center">
                      <div data-placeholder className="w-1/2 h-8 bg-gray-200 overflow-hidden relative">
                      </div>
                  </div>    
              </td>
          </tr>
      </>
    )

  return (
    <div className="bg-gray-100">
        <div className="header bg-white h-16 px-10 py-8 border-b-2 border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-400">
                <span className="text-green-700 tracking-wider font-thin text-md"><Link to={ROUTE.ADMIN_DASHBOARD}>Home</Link></span>
                <span>/</span>
                <span className="tracking-wide text-md">
                    <span className="text-base">Products</span>
                </span>
                <span>/</span>
              </div>
        </div>
        <div className="header my-3 h-12 px-10 py-8  flex items-center justify-between">
            <h1 className="font-medium text-2xl">All Products</h1>
        </div>
        <div className="flex flex-col mx-3 lg:flex-row">
            <div className="w-full m-4 bg-white shadow-lg text-lg rounded-sm border border-gray-200">
                <div className="overflow-x-auto rounded-lg  p-3">
                    <table className="w-full whitespace-nowrap">
                        <thead className="text-sm font-semibold uppercase text-gray-800 bg-gray-50">
                            <tr className="font-semibold text-center">
                                <th><input type="checkbox" className="w-5 h-5"/></th>
                                <th className='w-12'><svg xmlns="http://www.w3.org/2000/svg" className="fill-current w-5 h-5 mx-auto" ><path d="M6 22h12a2 2 0 0 0 2-2V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zm7-18 5 5h-5V4zm-4.5 7a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 8.5 11zm.5 5 1.597 1.363L13 13l4 6H7l2-3z"></path></svg></th>
                                <th className="p-2 text-left">Product
                                </th>
                                <th className="p-2">SKU
                                </th>
                                <th className="p-2">Price
                                </th>
                                <th className="p-2">Category
                                </th>
                                <th className="p-2">Featured
                                </th>
                                <th className="p-2">Status
                                </th>
                                <th className="p-2">Action
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-sm divide-y divide-gray-100 text-center">
                          { loading
                            ? productsLoading
                            : productList }
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>        
    </div>
  )
}

export default Products