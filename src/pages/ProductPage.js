import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import '../css/ProductPage.css'

const Product = () => {
  return (
    <div className="productPage">
      <Navbar />
      <Announcement />
      <div className="productWrapper">
        <div className="imgContainer">
          <img src="/static/2.png" alt="" />
        </div>
        <div className="infoContainer">
          <h1 className="title">Denim</h1>
          <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ipsum, sunt vero a impedit labore consectetur repellendus temporibus blanditiis voluptatem quas, distinctio itaque. Temporibus labore perferendis dicta laboriosam nostrum, fugit sed voluptatum laudantium magnam.</p>
          <span className="price">$ 20</span>
          <div className="filterConatiner">
            <div className="filter">
              <span className="filterTitle">Color</span>
              <div className="filterColor" style={{ backgroundColor: "black" }}></div>
              <div className="filterColor" style={{ backgroundColor: "darkblue" }}></div>
              <div className="filterColor" style={{ backgroundColor: "gray" }}></div>
            </div>

            <div className="filter">
              <span className="filterTitle">Size</span>
                <select name="" id="">
                  <option value="">XS</option>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                  <option value="">XXL</option>
                </select>
            </div>
          </div>
          <div className="addContainer">
            <Remove/>
            <div className="amount">1</div>
            <Add/>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Product
