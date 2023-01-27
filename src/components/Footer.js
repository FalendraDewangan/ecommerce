import {Facebook, Instagram, LocationOn, MailOutlined, Phone, Twitter } from '@mui/icons-material'
import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="left">
            <h1 className="logo" >E-Commerce</h1>
            <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam incidunt esse nisi repudiandae cumque doloribus tempore reprehenderit commodi dicta sapiente, natus voluptate ipsam nihil cupiditate id eveniet ex consequatur numquam eum quidem nam. Dignissimos.</p>
            <div className="socialContainer">
                <a href='/' className="socialIcon" style={{"background":"#3B5999"}} ><Facebook/></a>
                <a href='/' className="socialIcon" style={{"background":"#E4405F"}} ><Instagram/></a>
                <a href='/' className="socialIcon" style={{"background":"#55ACEE"}} ><Twitter/></a>
            </div>
        </div>
        <div className="center">
            <h3>Useful Links</h3>
            <ul className="list">
                <li className="listItem">Home</li>
                <li className="listItem">Cart</li>
                <li className="listItem">Man Fashion</li>
                <li className="listItem">Woman Fashion</li>
                <li className="listItem">Accessories</li>
                <li className="listItem">My Account</li>
                <li className="listItem">Order Tracking</li>
                <li className="listItem">Whishlist</li>
                <li className="listItem">Terms</li>
            </ul>
        </div>
        <div className="right">
            <h3 >Contact</h3>
            <div className="contactItem"><LocationOn style={{marginRight:'10px'}} />south delhi dduc 68745</div>
            <div className="contactItem"><Phone style={{marginRight:'10px'}} />7999634451</div>
            <div className="contactItem"><MailOutlined style={{marginRight:'10px'}} />falendra@gmail.com</div>
            <img src="/static/payment.png" alt="PaymentImage" className="payment" />
        </div>
    </div>
  )
}

export default Footer
