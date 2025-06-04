import { useEffect, useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layout/Layout'
import Product from './pages/product'
import ProductDetail from './pages/ProductDetail'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from "axios";


function App() {

  const [listeProduit,setListeProduit] = useState([])
  const [listeFilter,setListeFilter] = useState([])
  const [produitLuxe,setProduitLuxe] = useState('')
  const [filter,setFilter] = useState('tous')
  const [categorie,setCategorie] = useState([])
  const [car, setCar] = useState([]);


  useEffect(()=>{
    axios
      .get("https://fakestoreapi.com/products/")
      .then((resultat)=>setListeProduit(resultat.data))
      .catch((error)=>(console.error(error)))
    
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((resultat)=>setCategorie(resultat.data))
      .catch((error)=>console.error(error))

  },[])

  useEffect(()=>{
    setProduitLuxe(listeProduit.filter(el=>el.rating.rate>=4
    ))
    setCar(listeProduit.slice(0,5))
  },[listeProduit])

  useEffect(()=>{
    setListeFilter(filter === 'tous'
    ? listeProduit
    : listeProduit.filter(el => el.category === filter)
    )
  },[filter,listeProduit])

  function modif_filter(newFiltre) {
    setFilter(newFiltre)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout modif_filter={modif_filter} categorie={categorie} filter={filter}/>}>
          <Route index element={<Home listeProduit={produitLuxe} car={car}/>}/>
          <Route path="Product" element={<Product listeProduit={listeFilter}/>} />
          <Route path="Product/:id" element={<ProductDetail listeProduit={listeProduit}/>}/>
        </Route>
      </Routes>      
    </>
  )
}

export default App
