import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './component/Header/Header'
import Home from './component/Home/Home'
import Book from './component/Book/Book'
import AboutTop from './component/about/AboutTop'
import Wrapper from './component/Wrapper/Wrapper'
import RoomTop from './component/RoomTop/RoomTop'
import Wrapper2 from './component/Wrapper/Wrapper2'
import Restaurant from './component/Restaurant/Restaurant'
import Gallary from './component/Gallary/Gallary'
import MapTop from './component/Map/Map'
import Footer from './component/Footer/Footer'

function App() {
 
  return (
    <div className="p-0 m-0 box-border">
        <Header/>
        <Home />
        <Book/>
        <AboutTop/>
        <Wrapper/>
        <RoomTop/>
        <Wrapper2/>
        <Restaurant/>
        <Gallary/>
        <MapTop/>
        <Footer/>
    </div>
  )
}

export default App
