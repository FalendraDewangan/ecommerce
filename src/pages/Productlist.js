import React from 'react'
import Products from '../components/Products'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import '../css/Productlist.css'
import { KeyboardArrowDownOutlined } from '@mui/icons-material'


const Productlist = () => {
    return (
        <div className="productList">
            <Navbar />
            <Announcement />
            <h1 className="title">Dresses</h1>
            <div className="filterContainer">
                <div className="filter">
                    <span className="filteText">Filter Products :</span>
                    <select name="" id="" className="select">
                        <option className="option" disabled selected >Color <KeyboardArrowDownOutlined/></option>
                        <option value="" className="option">White</option>
                        <option value="" className="option">Black</option>
                        <option value="" className="option">Red</option>
                        <option value="" className="option">Blue</option>
                        <option value="" className="option">Yellow</option>
                        <option value="" className="option">Green</option>
                    </select>

                    <select name="" id="" className="select">
                        <option className="option" disabled selected >Size <KeyboardArrowDownOutlined/></option>
                        <option value="" className="option">XS</option>
                        <option value="" className="option">S</option>
                        <option value="" className="option">M</option>
                        <option value="" className="option">L</option>
                        <option value="" className="option">XL</option>
                        <option value="" className="option">XXL</option>
                    </select>
                </div>


                <div className="filter">
                    <span className="filteText">Sort Products : </span>
                    <select name="" id="" className="select">
                        <option value="" className="option">Newest <KeyboardArrowDownOutlined/></option>
                        <option value="" className="option">Price (asc)</option>
                        <option value="" className="option">Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Productlist
