import Product from '../Product/Product'

import './ProductList.css'

const ProductList = ({ products, onDelete }) => {

  return (
    <div className="product-list w-10 flex flex-wrap m-auto prouct_cart">
      {products.map((item) => {
        return <Product key={item.id} product={item} onDelete={onDelete} src={item.image}/>
      })}
    </div>
  )
}

export default ProductList
