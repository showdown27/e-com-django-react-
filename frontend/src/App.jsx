import ProductList from "../pages/ProductList.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductDetail from "../pages/ProductDetails.jsx"

import React from 'react'
import ProductDetails from "../pages/ProductDetails.jsx"


const App = () => {  
  return (
    
      <Router>
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/product/:id" element = {<ProductDetails/>}></Route>
      </Routes>
    </Router>
    
    
  )
}

export default App

