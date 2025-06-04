import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layout/Layout'
import Product from './pages/product'
import ProductDetail from './pages/ProductDetail'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="Product" element={<Product/>} />
          <Route path=":Product/:id" element={<ProductDetail/>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
