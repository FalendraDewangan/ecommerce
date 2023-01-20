import {Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <div className="wrapper">

            <div className="left">
                <div className="search">
					<input type="text" name="" id="" />
                    <Search style={{"fontSize":"16px", "color":"gray"}}/>
                </div>
            </div>

            <div className="middle">
				<div className="logo">
					E-Commerce
				</div>
			</div>

            <div className="right">
				<div className="menuItem">REGISTER</div>
				<div className="menuItem">SIGN IN</div>
				<div className="menuItem">
					<Badge badgeContent={4} color="secondary">
						<ShoppingCartOutlined />
					</Badge>
				</div>
			</div>

        </div>
      
    </div>
  )
}

export default Navbar
