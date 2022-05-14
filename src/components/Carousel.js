import {useState} from "react";
import "./styles/carousel.css"
import rightArrow from "../assets/images/carousel/navRightArrow.PNG"
import leftArrow from "../assets/images/carousel/navLeftArrow.PNG"
const Carousel =({listImg})=>{

  const [images,setImage]=useState(listImg)
  const [idImage,setIdImage]=useState(0)
  const innerCarousel = document.querySelector('.carousel-img')

  const changeImg=(sens)=>{

    if(sens==='left' && idImage > 0){
      setIdImage(idImage-1)
    }else if(sens==='right'&& idImage < images.length-1){
      setIdImage(idImage+1)
    }

  }
  return (
    <div className="carousel-container">

      <div className="carousel-btn"  onClick={()=>changeImg('left')}><img src={leftArrow} alt="left arrow" /></div>
      {images[idImage]?<img className="carousel-img"  src={images[idImage]} alt={idImage} />:""}

      <div className="carousel-btn"  onClick={()=>changeImg('right')}><img src={rightArrow} alt="right arrow" /></div>


    </div>
  )
}
export default Carousel