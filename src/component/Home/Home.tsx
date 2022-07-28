import React, { useState } from 'react';

function Home() {
  const imgs=[
      {id:0,value:"image/home1.jpg"},
      {id:1,value:"image/home2.jpg"},
      {id:2,value:"image/home3.jpg"},
      {id:3,value:"image/home4.jpg"}
    ] 
  const [wordData,setWordData]=useState(imgs[0])
  const handleClick=(index:any)=>{
    console.log(index)
    const wordSlider=imgs[index];
    setWordData(wordSlider)
  }
  return (
    <div className="main relative">
       <div className="absolute">
        <div className="max-w-[55%] my-[15%] lg:my-[12%] xl:my-[15%] mx-[5%] text-white">
          <h1 className="text-2xl md:text-3xl xl:text-9xl font-medium">Hello.Salut.Hola</h1>
          <p className="text-[9px] md:text-base xl:text-2xl xl:mt-5 font-sans my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <button className="border-2 p-2 text-[8px] md:text-sm md:px-4 rounded-full outline-none hover:bg-orange-500 hover:text-white hover:border-none xl:px-12 xl:py-6 xl:text-xl xl:mt-5">MORE INFO</button>
        </div>
      </div>
      <img src={wordData.value} className='w-full h-[220px] md:h-full'/> 
      <div className='flex absolute w-20 md:w-28 lg:w-44 xl:w-full lg:top-[17%] md:top-[21%] top-6 right-0 xl:-right-[72%] md:right-[10%] flex-col'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData.id==i?"border-2 w-[70px] md:w-[300px] lg:w-[299px] ":"my-2 w-[70px] md:w-[300px] lg:w-[299px] "} src={data.value} onClick={()=>handleClick(i)} />
        </div>
        )}
      </div>
    </div>
  );
}

export default Home;