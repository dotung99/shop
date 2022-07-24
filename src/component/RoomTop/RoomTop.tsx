import React from 'react';

function RoomTop() {
    return (
        <section className="room mt-[10%] m-auto w-[80%]" id="room">
        <div className="container">
          <div className="heading_top flex justify-between">
            <div className="heading mb-12">
              <h5 className="text-lg leading-10 text-[#5f5f5f] font-medium">RAISING COMFORT TO THE HIGHEST LEVEL</h5>
              <h2 className='text-4xl'>Rooms $ Suites</h2>
            </div>
            <div className="">
              <button className="mt-5 bg-[#C1B086] p-4 text-white rounded-full px-10">VIEW ALL</button>
            </div>
          </div>
    
          <div className="content grid grid-cols-3">
            <div className="box mr-10 shadow-2xl ">
              <div className="img">
                <img src="image/r1.jpg" alt=""/>
              </div>
              <div className="mx-5">
                <h3 className='mt-5 leading-10 text-3xl'>Superior Soble Rooms</h3>
                <p className="my-5"> <span>$</span>129 <span>/per night</span> </p>
              </div>
            </div>
            <div className="mx-5 shadow-2xl">
              <div className="img">
                <img src="image/r2.jpg" alt=""/>
              </div>
              <div className="mx-5">
                <h3 className='mt-5 leading-10 text-3xl'>Superior Soble Rooms</h3>
                <p className="my-5"> <span>$</span>129<span>/per night</span> </p>
              </div>
            </div>
            <div className="box ml-10 shadow-2xl">
              <div className="img">
                <img src="./image/r3.jpg" alt=""/>
              </div>
              <div className="mx-5">
                <h3 className='mt-5 leading-10 text-3xl'>Superior Soble Rooms</h3>
                <p className="my-5"><span>$</span>129 <span>/per night</span> </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default RoomTop;