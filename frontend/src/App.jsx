import { useState, useEffect } from 'react';

import React from 'react'


const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products/')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching message:', error));
  }, []);
  
  return (
    <div className='min-h-screen bg-gray-100 test-gray-800 p-2'>
      <h1 className='text-3xl font-bold underline'>Product Name</h1>
      <div className='container mx-auto p-4 flex'>
        {products.map(product =>(
          <div className="bg-white rounded p-4 mb-4 shadow w-1/3 m-4" key={product.id}>
            <image >{product.image || "no image"}</image>
            <h2 className='text-xl font-semibold'>{product.name}</h2>
            <p className='text-gray-800'>{product.description}</p>
            <p className='text-red-500 font-bold'>{product.price}</p>
            <button className='bg-green-500 p-1 rounded-md w-30 hover:bg-green-400'>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

