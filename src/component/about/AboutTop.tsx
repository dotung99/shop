import React from 'react';

function AboutTop() {
    return (
        <section className="about top mt-[10%]" id="about">
        <div className="max-w-[80%] m-auto flex">
          <div className="w-[50%]">
            <div className="img relative mb-14">
              <img src="./image/a1.jpg" alt="" className="w-[410px] h-[550px]"/>
              <img src="./image/a2.jpg" alt="" className="absolute right-[25%] bottom-[5px] z-10 w-[325px] h-[220px]"/>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="relative">
              <h5 className="pt-5 text-[#5f5f5f] font-normal text-lg">RAISING COMFOMRT TO THE HIGHEST LEVEL</h5>
              <h2 className='text-4xl font-normal text-[#222222] mt-5 mb-10'>Welcome to Luviana Hotel Resort</h2>
              <p className='leading-6 text-[#5f5f5f] mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <p className='leading-6 text-[#5f5f5f] mb-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button className="bg-[#C1B086] text-white py-8 px-14 rounded-full">READ MORE</button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutTop;