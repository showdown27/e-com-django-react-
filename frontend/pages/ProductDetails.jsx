import { useParams } from "react-router-dom";
import { use, useEffect, useState } from "react"; 

import React from 'react'

const ProductDetails = () => {
    const { id } = useParams();
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${BASEURL}/api/products/${id}/`)
        .then((response)=>{
            if(!response.ok){
                throw new Error("fetch failed");
            }
            return response.json()
    }).then((data)=>{
        setProduct(data);
        setLoading(false);
    }).catch((error)=>{
        setError(error.message);
        setLoading(false);
    }, [id, BASEURL])
    })

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error: {error}</div>
    }
    if(!product){
        return <div>Product not found</div>
    }

  return (    
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
            <div className="flex flex:col md:flex-row gap-8">
                <img src={`${product.image}`} alt={product.name} className="w-full md:w-1/2 h-auto object-cover rounded-lg"/>
            </div>
            <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <p className="text-gray-600">{product.price}</p>
                <p className="text-gray-700 mt-4">{product.description}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart 
                </button>
                {/*Home button*/}
                <div className="mt-4">
                    <a href="/">
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Back to Products
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )}


export default ProductDetails
