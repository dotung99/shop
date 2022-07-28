import React from 'react'
import {BiDumbbell,BiSwim,BiWater} from 'react-icons/bi'
import {FaShip,FaMicrophone,FaUmbrellaBeach,FaSpa,FaSwimmingPool} from 'react-icons/fa'


function Wrapper2() {
    return (
        <section className="relative mt-[10%]">
          <div className="max-w-[100%] m-auto text-center">
          <div className="lg:absolute w-full top-[-11%] text-white right-[4%] pt-16 lg:w-[40%] xl:h-[130%] h-full bg-[#3f9cc1]">
            <h5 className='text-sm mb-5'>AT THE HEART OF COMMUNICATION</h5>
            <h2 className='text-3xl font-medium pb-10'>People Say</h2>
            <p className='text-base font-semibold md:px-20 pb-10 leading-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className="flex px-6">
            <div className="w-[10%]">
              <img src="image/c.jpg" className="rounded-full" alt=""/>
            </div>
            <div className="mx-5 font-thin">
              <h5>KATE PALMER</h5>
              <h5>IDAHO</h5>
            </div>
          </div>
          </div>
        </div>
            <img src="./image/w1.jpg" className="bg-cover w-full h-[480px]" alt="" />
      </section>
    );
}

export default Wrapper2;