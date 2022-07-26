import React from 'react';

function Header() {
    return (
        <>
        <header className="m-auto w-full absolute z-10" id="navigation-menu">
            <div className="">
            <nav className='flex mx-56 justify-between m-auto]'>
                <a href="#" className="logo pt-6 max-w-[25%]">
                <img src="./image/logo.png" className="" alt="oke"/>
                </a>   
                <ul className="pt-8 flex text-2xl text-white font-medium">
                <li> <a href="#home" className="mx-8">Home</a> </li>
                <li> <a href="#about" className="mx-8">About</a> </li>
                <li> <a href="#rooms" className="mx-8">Rooms</a> </li>
                <li> <a href="#restaurant" className="mx-8">Restaurant</a> </li>
                <li> <a href="#gallery" className="mx-8">Gallery</a> </li>
                <li> <a href="#contact" className="mx-8">Contact</a> </li>
                </ul>
            </nav>
            </div>
        </header>
        </>
    );
}

export default Header;