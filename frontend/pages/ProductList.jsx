import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard.jsx"

import React from 'react'

const ProductList = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
    useEffect(() => {
        fetch(`${BASEURL}/api/products/`).then((response) => {
            if(!response.ok){
                throw new Error("failed to fetch data");
            }
            return response.json();
        }).then((data)=>{
            setProduct(data)
            setLoading(false)
        }).catch((error)=>{
            setError(error.message);
            setLoading(false);
        })
    }, [])

    if(loading){
        return <div>Loading...</div>
    }

  return (
    <div className="bg-gray-100 min-h-screen">
      <p className="text-3xl font-bold text-center py-6 bg-white shadow-md">Product List</p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
        {product.length>0 ? (
            product.map((product)=>(
                <ProductCard key = {product.id} product = {product}></ProductCard>
            ))
        ): (
            <p className="text-center col-span-full text-gray-500">No product available</p>
        )}
      </div>
    </div>
  )
}

export default ProductList
