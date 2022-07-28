import React from 'react';

function RoomTop() {
  const Item = [
    {
      image: './image/r1.jpg',
      title: 'Superior Soble Rooms',
      price: 129
    },
    {
      image: './image/r2.jpg',
      title: 'Superior Soble Rooms',
      price: 129
    },
    {
      image: './image/r3.jpg',
      title: 'Superior Soble Rooms',
      price: 129
    }
  ]
    return (
        <section className="mt-[10%] m-auto w-[100%] lg:max-w-[80%]" id="room">
        <div className="">
          <div className="lg:flex text-center mb-5 justify-between">
            <div className="">
              <h5 className="text-base mb-2 text-[#5f5f5f] font-medium">RAISING COMFORT TO THE HIGHEST LEVEL</h5>
              <h2 className='text-3xl'>Rooms $ Suites</h2>
            </div>
            <div className="">
              <button className="mt-5 bg-[#C1B086] p-4 text-white rounded-full px-10 hover:bg-orange-700">VIEW ALL</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {Item.map((item: any) =>
             <div className="my-2 shadow-2xl mx-2">
             <div className="">
               <img src={item.image} className="w-[1300px]" alt=""/>
             </div>
             <div className="text-center">
               <h3 className='mt-5 leading-10 text-3xl'>{item.title}</h3>
               <p className="my-5"> <span>$</span>{item.price}<span>/per night</span> </p>
             </div>
           </div>
            )}
          </div>
        </div>
      </section>
    );
}

export default RoomTop;