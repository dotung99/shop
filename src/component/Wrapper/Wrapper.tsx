import React from 'react'
import {BiDumbbell,BiSwim,BiWater} from 'react-icons/bi'
import {FaShip,FaMicrophone,FaUmbrellaBeach,FaSpa,FaSwimmingPool} from 'react-icons/fa'


function Wrapper() {
    return (
        <section className="relative top mt-[10%]">
            <img src="./image/ami.jpg" className="bg-cover" alt="" />
            <div className="max-w-[80%] m-auto">
          <div className="absolute p-12 top-[-10%] text-white right-[4%] pt-24 w-[40%] h-[600px] bg-[#3f9cc1] mx-28">
            <h2 className='text-4xl pb-10'>Our Amenities</h2>
            <p className='text-base px-6 pb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className="grid grid-cols-2 px-6 m-auto w-full">
              <div className="flex">
                <FaSwimmingPool/>
                <span>Swimming pool</span>
              </div>
              <div className="flex">
                <BiDumbbell/>
                <span>Gym & yogo</span>
              </div>
              <div className="flex">
                <FaSpa/>
                <span>Spa & massage</span>
              </div>
              <div className="box flex">
                <FaShip/>
                <span>Boat Tours</span>
              </div>
              <div className="box flex">
                <BiSwim/>
                <span>Surfing Lessons</span>
              </div>
              <div className="box flex">
                <FaMicrophone/>
                <span>Conference room</span>
              </div>
              <div className="box flex">
                <BiWater/>
                <span>Diving & smorking</span>
              </div>
              <div className="box flex">
                <FaUmbrellaBeach/>
                <span>Private Beach</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Wrapper;