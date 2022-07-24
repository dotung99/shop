import React from 'react';

function Gallary() {
    return (
        <section className="mt-[5%]" id="gallary">
        <div className="max-w-[80%] m-auto">
          <div className="heading_top flex">
            <div className="heading">
              <h5>WELCOME TO OUR PHOTO GALLERY</h5>
              <h2>Photo Gallery of Our Hotel</h2>
            </div>
            <div className="button">
              <button className="btn1">VIEW GALLERY</button>
            </div>
          </div>
    
          <div className="owl-carousel owl-theme grid grid-cols-5">
            <div className="item">
              <img src="./image/g1.jpg" alt=""/>
            </div>
            <div className="item">
              <img src="./image/g2.jpg" alt=""/>
            </div>
            <div className="item">
              <img src="./image/g3.jpg" alt=""/>
            </div>
            <div className="item">
              <img src="./image/g4.jpg" alt=""/>
            </div>
            <div className="item">
              <img src="./image/g5.jpg" alt=""/>
            </div>
            <div className="item">
              <img src="./image/g6.jpg" alt=""/>
            </div>
            <div className="item">
              <img src="./image/g7.jpg" alt=""/>
            </div>
            <div className="item">
              <img src="./image/g8.jpg" alt=""/>
            </div>
          </div>
    
        </div>
      </section>
    );
}

export default Gallary;