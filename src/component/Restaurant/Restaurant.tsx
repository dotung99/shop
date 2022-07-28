import React, { useState } from 'react';


function Restaurant() {
  const Item = [
    { 
      id:0,
      title: 'Italin Restaurant',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    { 
      id:1,
      title: 'Mexican Restaurant',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    { 
      id:2,
      title: 'Italin Restaurant',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    { 
      id:3,
      title: 'Mexican Restaurant',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
  ]
  const [openDesc,setOpenDesc] = useState(Item[1])
  const handleOpenDesc = (index:any) => {
  }
  
    return (
        <section className="restaurant mt-[10%]" id="restaurant">
    <div className="max-w-[100%] xl:max-w-[80%] m-auto md:flex">
      <div className="md:w-1/2">
        <img src="./image/re.jpg" className='w-full h-full' alt=""/>
      </div>
      <div className="md:w-1/2 lg:px-32">
        <div className="text-center">
          <h2 className="mb-5 text-3xl ">Our Restaurant</h2>
          <p className="mb-5 text-sm mx-5 leading-10"> Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="">
          {Item.map((item: any,i:any) =>
           <div className="text-center" key={i}>
            <h2 className={openDesc.id === i ? "":"accordionIHeading text-[#C1B086]"} onClick={() => handleOpenDesc(i)}>{item.title}</h2>
           <div className="shadow-2xl font-normal">
           {openDesc &&  <p className="px-6 py-10">{openDesc.desc}</p>}
           </div>
         </div>
          )}
        </div>
      </div>
    </div>
  </section>
    );
}
export default Restaurant;