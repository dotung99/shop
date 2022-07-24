import React from 'react';

function Restaurant() {
    return (
        <section className="restaurant mt-[10%]" id="restaurant">
    <div className="max-w-[80%] m-auto flex">
      <div className="w-[50%]">
        <img src="./image/re.jpg" className='w-full h-full' alt=""/>
      </div>
      <div className="w-1/2 pl-20">
        <div className="text">
          <h2 className="mb-5 text-3xl">Our Restaurant</h2>
          <p className="leading-6 mb-12"> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="accordionWrapper">
          <div className="accordionItem open">
            <h2 className="accordionIHeading text-[#C1B086]">Italian Kitchen</h2>
            <div className="accordionItemContent">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="accordionItem close">
            <h2 className="accordionIHeading text-[#C1B086]">Mexican Kitchen</h2>
            <div className="accordionItemContent">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="accordionItem close">
            <h2 className="accordionIHeading text-[#C1B086]">Italian Kitchen</h2>
            <div className="accordionItemContent">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="accordionItem close">
            <h2 className="accordionIHeading text-[#C1B086]">Mexican Kitchen</h2>
            <div className="accordionItemContent">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    );
}

export default Restaurant;