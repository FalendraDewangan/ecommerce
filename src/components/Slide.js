import React from 'react'
import '../css/Slide.css'

const Slide = (props) => {
  return (
    <div className="slide">
              <div className="slideImg">
                <img src={props.imgUrl} alt="not found" />
              </div>
              <div className="slideInfo">
                <h1>{props.title}</h1>
                <div className="description">
                  <p>{props.desc}</p>
                </div>
                <button>Show Now</button>
              </div>
            </div>
  )
}

export default Slide
