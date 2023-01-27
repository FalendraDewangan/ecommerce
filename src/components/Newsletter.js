import { Send } from '@mui/icons-material'
import React from 'react'
import '../css/Newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter">
        <div className="title">Newsletter</div>
        <div className="desc">Get timely updates from your favorite products.</div>
        <div className="inputContainer">
            <input type='email' placeholder='Your email' />
            <button><Send/></button>
        </div>
    </div>
  )
}

export default Newsletter
