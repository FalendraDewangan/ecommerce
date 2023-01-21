import { ArrowBack, ArrowForward } from '@mui/icons-material'
import "../css/Slider.css"
import Slide from './Slide'

const Slider = () => {
  let n = 3;
  let i = 0;
  function handleOnclick()
  {
      console.log(i);
      let ele = document.getElementsByClassName("sliderWrapper")[0];
      ele.style.translate = `${i*100}vw`
      console.log("btn clicked")
  }

  setInterval(() => {
    i=(i-1)%n; 
    handleOnclick();
  }, 4000);

  console.log("changed");

  return (
    <div className="sliderContainer">
        <div className="arrow" style={{"left":"0px"}} onClick={()=>{i=(i+1-n)%n; handleOnclick();}}>
              <ArrowBack/>
        </div>
      
        <div className="sliderWrapper">
          <Slide title="Summer Sale" imgUrl="/static/1.png" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit, quis minima corporis expedita ipsa. Laborum excepturi quis saepe minus ullam id obcaecati veritatis officiis optio corporis, nesciunt asperiores, porro ad possimus expedita. Dicta?"/>
          <Slide title="Winter Sale" imgUrl="/static/2.png" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit, quis minima corporis expedita ipsa. Laborum excepturi quis saepe minus ullam id obcaecati veritatis officiis optio corporis, nesciunt asperiores, porro ad possimus expedita. Dicta?"/>
          <Slide title="Popular Sale" imgUrl="/static/3.png" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit, quis minima corporis expedita ipsa. Laborum excepturi quis saepe minus ullam id obcaecati veritatis officiis optio corporis, nesciunt asperiores, porro ad possimus expedita. Dicta?"/>
        </div>

        <div className="arrow" style={{"right":"0px"}} onClick={()=>{i=(i-1)%n; handleOnclick();}}>
                <ArrowForward/>
        </div>
    </div>
  )
}

export default Slider
