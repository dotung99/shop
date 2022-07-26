import React, { useState } from 'react';

function Home() {
  // const imageItems = [
  //   {id:0,value:"image/home1.jpg"},
  //   {id:1,value:"image/home2.jpg"},
  //   {id:2,value:"image/home3.jpg"},
  //   {id:3,value:"image/home4.jpg"}] 
  // const [selectedImage,setSelectedImage]=useState(imageItems[0])
  // const handleClick=(i)=> {
  //   console.log(i)
  //   const wordSlider =  imageItems[i];
  //   setSelectedImage(wordSlider)
  // }
  
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
        <div className="max-w-[45%] my-[20%] mx-[10%] text-white">
          <h1 className="text-9xl font-medium">Hello.Salut.Hola</h1>
          <p className="text-base font-sans my-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <button className="border-2 p-5 px-12 text-lg rounded-full outline-none texxt">MORE INFO</button>
        </div>
      </div>
      <img src={wordData.value} className='w-full'/> 
      <div className='flex absolute w-56 top-[20%] right-[20%] flex-col'>
        {imgs.map((data,i)=>
        <div className="thumbnail" key={i} >
          <img className={wordData.id==i?"border-2 w-[500px]":"my-5 w-[500px]"} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" />
        </div>
        )}
      </div>
    </div>
  );
}

export default Home;