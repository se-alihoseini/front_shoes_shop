import './Product.css'

const Product = ({ product, onView,src }) => {
  return (
    <div className="product">
        <div>
            <img className="product_cart_image" src={src} alt="" />
        </div>
      <div>{product.title}</div>
      <div>
        <button className="btn" onClick={() => onView(product.id)}>
          مشاهده
        </button>
      </div>
    </div>
  )
}

export default Product
