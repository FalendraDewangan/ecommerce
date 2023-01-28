import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import '../css/Cart.css'
import { Add, Remove } from '@mui/icons-material'

const Cart = () => {
  return (
    <div className="cart">
      <Navbar />
      <Announcement />
      <div className="wrapper">
        <h1 className="title">YOUR BAG</h1>
        <div className="top">
          <button style={{ border: "2px solid black", backgroundColor: "transparent" }}>CONTINUE SHOPPING</button>
          <div className="topTexts">
            <span className="topText">Shopping Bag(2)</span>
            <span className="topText">Your Wishlist (0)</span>
          </div>
          <button style={{ backgroundColor: "black", color: "white" }}>CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="info">
            <div className="product">
              <div className="productDetail">
                <img src="/static/3.png" alt="" />
                <div className="detail">
                  <div className="name"><b>Product: </b>JESSIE THUNDER SHOES</div>
                  <div className="id"><b>ID: </b>35546543245</div>
                  <div className="productColor" style={{ backgroundColor: "black" }} />
                  <div className="productSize"><b>Size:</b>37.5</div>
                </div>
              </div>
              <div className="priceDetail">
                <div className="productAmountContainer">
                  <Add/>
                  <div className="productAmount">2</div>
                  <Remove/>
                </div>
                <div className="productPrice">$ 80</div>
              </div>
            </div>
            <hr />
          </div>
          <div className="summary">
            <h1 className="summaryTitle">ORDER SUMMARY</h1>
            <div className="summaryItem">
              <span className="summaryItemText">Subtotal</span>
              <span className="summaryItemPrice">$ 80</span>
            </div>

            <div className="summaryItem">
              <span className="summaryItemText">Estimated Shipping</span>
              <span className="summaryItemPrice">$ 5</span>
            </div>

            <div className="summaryItem">
              <span className="summaryItemText">Shipping Discount</span>
              <span className="summaryItemPrice">$ -5</span>
            </div>

            <div className="summaryItem">
              <span className="summaryItemText"><b>Total</b></span>
              <span className="summaryItemPrice"><b>$ 80</b></span>
            </div>
            <button>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
