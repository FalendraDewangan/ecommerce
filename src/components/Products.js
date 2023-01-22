import '../css/Products.css'
import Product from './Product'

const Products = () => {
  return (
    <div className="productsContainer">
        <Product imgUrl="/static/7.png"/>
        <Product imgUrl="/static/8.png"/>
        <Product imgUrl="/static/9.png"/>
        <Product imgUrl="/static/10.png"/>
    </div>
  )
}

export default Products
