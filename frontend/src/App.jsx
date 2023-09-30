import React from 'react';
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
const App = ()=>{
  return (
   
    <div>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>

      </Routes>

      <Footer/>
    </div>
  )
}
export default App;