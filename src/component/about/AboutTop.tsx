import React from 'react';

function AboutTop() {
    return (
        <section className="md:mt-[10%] md:mx-5" id="about">
        <div className="lg:max-w-[80%] m-auto md:flex">
          <div className="md:w-[50%]">
            <div className="relative mb-14">
              <img src="./image/a1.jpg" alt="" className="w-full h-[550px] p-14"/>
              <img src="./image/a2.jpg" alt="" className="absolute right-[10%] md:w-[200px] md:right-[2%] bottom-[5px] z-10 w-[255px] h-[120px]"/>
            </div>
          </div>
          <div className="md:w-[50%]">
            <div className="relative text-center mt-10 mx-2">
              <h5 className="pt-5 text-[#5f5f5f] font-normal text-lg md:text-base">RAISING COMFOMRT TO THE HIGHEST LEVEL</h5>
              <h2 className='text-4xl font-normal text-[#222222] mt-5 mb-10 md:text-2xl'>Welcome to Luviana Hotel Resort</h2>
              <p className='leading-6 text-[#5f5f5f] mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <p className='leading-6 text-[#5f5f5f] mb-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <button className="bg-[#C1B086] text-white py-4 px-10 rounded-full hover:bg-orange-700">READ MORE</button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutTop;