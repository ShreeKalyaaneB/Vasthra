import { Carousel } from 'react-responsive-carousel';
import React from 'react';
import './Slider.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Slider = () => {
    return (
      <div className="slider-container">
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} >
        <div >
          <img className='slideimg' src="banner-3-01.jpg" alt="Slider Image 1" />
        </div>
        <div>
          <img className='slideimg' src="main-banner-saree1.png" alt="Slider Image 2" />
        </div>
       
      </Carousel>
      </div>
    );
  }
export default Slider  
