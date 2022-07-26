import React from 'react'
import {BiDumbbell,BiSwim,BiWater} from 'react-icons/bi'
import {FaShip,FaMicrophone,FaUmbrellaBeach,FaSpa,FaSwimmingPool} from 'react-icons/fa'


function Wrapper() {
  const itemService = [
    {
      icon: <FaSwimmingPool/>,
      title: 'Swimming pool'
    },
    {
      icon: <BiDumbbell/>,
      title: 'Gym & yogo'
    },
    {
      icon: <FaSpa/>,
      title: 'Spa & massage'
    },
    {
      icon: <FaShip/>,
      title: 'Boat Tours'
    },
    {
      icon: <BiSwim/>,
      title: 'Surfing Lessons'
    },
    {
      icon: <FaMicrophone/>,
      title: 'Conference room'
    },
    {
      icon: <BiWater/>,
      title: 'Diving & smorking'
    },
    {
      icon: <FaUmbrellaBeach/>,
      title: 'Private Beach'
    }
  ]
    return (
        <section className="relative top mt-[10%]">
            <img src="./image/ami.jpg" className="bg-cover w-full h-[480px]" alt="" />
            <div className="max-w-[80%] m-auto">
          <div className="absolute px-10 top-[-11%] text-white right-[4%] pt-16 w-[40%] h-[600px] bg-[#3f9cc1] mx-28">
            <h2 className='text-5xl font-medium pb-10'>Our Amenities</h2>
            <p className='text-xl font-semibold px-10 pb-10 leading-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className="grid grid-cols-2 px-6 m-auto w-full text-xl">
              {itemService.map((item) => {
                return(
                  <div className="flex my-3 mx-6 text-xl">
                  <h1 className="mr-5 text-3xl">{item.icon}</h1>
                  <span>{item.title}</span>
                </div>
                )       
              })}
            </div>
          </div>
        </div>
      </section>
    );
}

export default Wrapper;