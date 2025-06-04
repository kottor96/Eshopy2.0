import { useState } from 'react'
import { Routes,Route, useParams } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layout/Layout'
import Product from './pages/product'
import ProductDetail from './pages/ProductDetail'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from "axios";


function App() {

  const [listeProduit,setListeProduit] = useState([])
  
  useParams(()=>{
    
    axios
      .get("https://fakestoreapi.com/products/")
      .then((resultat)=>setListeProduit(resultat.data))
      .catch((error)=>(console.error(error)))
  },[])

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
