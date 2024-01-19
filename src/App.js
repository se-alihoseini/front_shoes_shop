import { useState, useEffect } from 'react'

import ProductList from './components/ProductList/ProductList'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Modal from "./components/modal/Modal";
// import [useState] from 'react'

const App = () => {
  const [products, setProducts] = useState([])
  const [show_modal, setshowModal]=useState(true)
  const closeBtn=()=>{
    setshowModal(false)
  }
  const openBtn=()=>{
    setshowModal(true)
  }

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/v1/product/')

      const responoseData = await response.json()

      setProducts(responoseData)
    }

    sendRequest()
  }, [])

  const getProduct = async (id) => {
    await fetch(`http://localhost:8000/products/${id}`, {
      method: 'GET',
    })

    setProducts(products.filter((item) => item.id !== id))
  }

  return (
      <div className="container">
        {/* header*/}
        <Header open_sgn_btn={openBtn}/>
          {show_modal && <Modal closeBtn={closeBtn}/>}
        <hr className="solid"/>
          <Menu/>
        <ProductList products={products} onDelete={getProduct}/>
        <Footer/>
        {/* footer*/}
      </div>
  )
}

export default App
