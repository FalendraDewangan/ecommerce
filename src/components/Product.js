import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import '../css/Product.css'

const Product = (props) => {
  return (
    <div className="productContainer">
        <img src={props.imgUrl} alt="Not found" />
        <div className="productInfo">
            <div className="icon">
                <ShoppingCartOutlined/>
            </div>
            <div className="icon">
                <SearchOutlined/>
            </div>
            <div className="icon">
                <FavoriteBorderOutlined/>
            </div>
            
        </div>
    </div>
  )
}

export default Product
