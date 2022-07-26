import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallary() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  const imgItem = [
    {img:'./image/g1.jpg'},{img:'./image/g2.jpg'},{img:'./image/g3.jpg'},{img:'./image/g4.jpg'},
    {img:'./image/g5.jpg'},{img:'./image/g6.jpg'},{img:'./image/g7.jpg'},{img:'./image/g8.jpg'}]
    return (
        <section className="mt-[5%]" id="gallary">
        <div className="max-w-[80%] m-auto">
          <div className="heading_top flex justify-between mb-[4%]">
            <div className="heading">
              <h5 className='text-xl leading-10 text-[#5f5f5f]'>WELCOME TO OUR PHOTO GALLERY</h5>
              <h2 className='text-4xl'>Photo Gallery of Our Hotel</h2>
            </div>
            <div className="button">
              <button className="bg-[#C1B086] text-white py-6 px-14 rounded-full">VIEW GALLERY</button>
            </div>
          </div>
          <Slider {...settings}>
          {imgItem.map((item) => {
            return (
              <div>
            <img src={item.img} className='w-full h-[480px] pl-4' alt=""/>
          </div>
            )      
          })}
         
          </Slider>
    
        </div>
      </section>
    );
}

export default Gallary;