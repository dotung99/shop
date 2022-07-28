import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallary() {

  const settings = {
    dots: false,
    infinite: true,
    autoPlaySpeed:true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const imgItem = [
    {img:'./image/g1.jpg'},{img:'./image/g2.jpg'},{img:'./image/g3.jpg'},{img:'./image/g4.jpg'},
    {img:'./image/g5.jpg'},{img:'./image/g6.jpg'},{img:'./image/g7.jpg'},{img:'./image/g8.jpg'}]
    return (
        <section className="mt-[5%]" id="gallery">
        <div className="lg:max-w-[80%] max-w-[100%] m-auto">
          <div className="text-center lg:flex justify-between mb-[4%]">
            <div className="">
              <h5 className='text-base leading-10 text-[#5f5f5f]'>WELCOME TO OUR PHOTO GALLERY</h5>
              <h2 className='text-2xl mb-5'>Photo Gallery of Our Hotel</h2>
            </div>
            <div className="button">
              <button className="bg-[#C1B086] text-white py-3 px-8 rounded-full hover:bg-orange-700">VIEW GALLERY</button>
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