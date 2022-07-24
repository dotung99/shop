import React from 'react';

function Home() {
    return (
        <section className="home absolute top-0 -z-10 w-full" id="home">
    <div className="head_container">
      <div className="box">
        <div className="text max-w-[50%] my-[20%] mx-[10%] text-white">
          <h1 className="text-9xl font-medium">Hello.Salut.Hola</h1>
          <p className="text-base font-sans my-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <button className="border-2 p-5 px-12 text-lg rounded-full outline-none texxt">MORE INFO</button>
        </div>
      </div>
      <div className="image">
        <img src="image/home1.jpg" className="slide absolute top-0 left-0 -z-10"/>
      </div>
      <div className="image_item flex absolute w-56 top-[20%] right-[20%] flex-col">
        <img src="image/home1.jpg" alt="" className="slide active my-5 border-2"/>
        <img src="image/home1.jpg" alt="" className="slide active my-5"/>
        <img src="image/home1.jpg" alt="" className="slide active my-5"/>
        <img src="image/home1.jpg" alt="" className="slide active my-5"/>
      </div>
    </div>
  </section>
    );
}

export default Home;