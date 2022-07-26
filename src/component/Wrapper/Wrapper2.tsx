import React from 'react'
import {BiDumbbell,BiSwim,BiWater} from 'react-icons/bi'
import {FaShip,FaMicrophone,FaUmbrellaBeach,FaSpa,FaSwimmingPool} from 'react-icons/fa'


function Wrapper2() {
    return (
        <section className="relative mt-[10%]">
            <img src="./image/w1.jpg" className="bg-cover w-full h-[480px]" alt="" />
            <div className="max-w-[80%] m-auto ">
          <div className="absolute top-[-12%] text-white left-[4%] pt-[5%] px-[3%] w-[42%] h-[600px] bg-[#3f9cc1] mx-28">
            <h5 className='text-xl mb-5'>AT THE HEART OF COMMUNICATION</h5>
            <h2 className='text-4xl font-medium pb-10'>People Say</h2>
            <p className='text-lg font-semibold px-24 pb-10 leading-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className="flex px-6">
            <div className="w-[10%]">
              <img src="image/c.jpg" className="rounded-full" alt=""/>
            </div>
            <div className="mx-5 mt-3 font-thin ">
              <h5>KATE PALMER</h5>
              <h5>IDAHO</h5>
            </div>
          </div>
          </div>
        </div>
      </section>
    );
}

export default Wrapper2;