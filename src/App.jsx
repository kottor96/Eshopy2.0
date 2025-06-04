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
  const [produitLuxe,setProduitLuxe] = useState('')
  
  useParams(()=>{
    axios
      .get("https://fakestoreapi.com/products/")
      .then((resultat)=>setListeProduit(resultat.data))
      .catch((error)=>(console.error(error)))
  },[])
  useParams(()=>{
    setProduitLuxe(listeProduit.filter(el=>{
      el.rating.rate>=4
    }))
  },[listeProduit])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home listeProduit={produitLuxe}/>}/>
          <Route path="Product" element={<Product listeProduit={listeProduit}/>} />
          <Route path="Product/:id" element={<ProductDetail listeProduit={listeProduit}/>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
