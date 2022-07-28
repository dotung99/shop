import React from 'react';

function Header() {
    return (
        <>
        <header className="m-auto w-full absolute px-36 md:px-24 lg:px-10 z-10" id="navigation-menu">
            <div className="">
            <nav className='md:flex md:w-30 xl:w-full pt-2 justify-between m-auto md:m-0'>
                <a href="#" className=" md:w-[100px] xl:w-full xl: md:pt-5">
                <img src="./image/logo.png" className="" alt="oke"/>
                </a>   
                <ul className="pt-5 md:flex md:text-xs lg:text-2xl xl:text-3xl xl:pt-10 hidden text-white font-medium">
                <li> <a href="#home" className="xl:mx-8 md:mx-2">Home</a> </li>
                <li> <a href="#about" className="xl:mx-8 md:mx-2">About</a> </li>
                <li> <a href="#room" className="xl:mx-8 md:mx-2">Rooms</a> </li>
                <li> <a href="#restaurant" className="xl:mx-8 md:mx-2">Restaurant</a> </li>
                <li> <a href="#gallery" className="xl:mx-8 md:mx-2">Gallery</a> </li>
                <li> <a href="#contact" className="xl:mx-8 md:mx-2">Contact</a> </li>
                </ul>
            </nav>
            </div>
        </header>
        </>
    );
}

export default Header;