import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  
  const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
  return (
    <Link to={`/product/${product.id}`}>
    <div className='bg-white rounded-md shadow-md hover:shadow-lg p-2 m-1 cursor-pointer'>
      <img src={`${BASEURL}${product.image}`} alt={product.name} className='w-full h-56 object-cover rounded-lg mb-4'/>
      <h2 className='font-bold text-gray-800 text-lg truncate'>{product.name}</h2>
      <p className='text-red-600 font-medium'>{product.price}</p>
    </div>
    </Link>
  )
}

export default ProductCard
