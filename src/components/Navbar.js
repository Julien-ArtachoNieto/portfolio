import "./styles/navbar.css"
import keyboardIcon from "../assets/images/icons/coding.png"
import NavbarBtn from "./NavbarBtn";
import {NavLink} from "react-router-dom";
import {useState} from "react";

const Navbar = ()=>{
  const [toggle,setToggle]=useState(false)
  const displayMenu=()=>{
    const menu = document.querySelector('.navbar-menu-mobil-container')
    if(!toggle && window.innerWidth<1024) {
      menu.style = "display:flex"
      setToggle(true)
    }else{
      menu.style= "display:none"
      setToggle(false)
    }
  }
  return (
    <nav className="navbar-container">
      <img className="navbar-icon" src={keyboardIcon} alt="" onClick={displayMenu}/>
      <h1 className="navbar-title">Julien Artacho~Nieto <em>Full-Stack Web developer</em></h1>
      <ul className='navbar-menu'>
       <li className='navbar-menu-item'><NavLink to="portfolio" >Home </NavLink></li>
        <li className='navbar-menu-item'><NavLink to="projets">Projets</NavLink></li>
        <li className='navbar-menu-item'><NavLink to="experiences"> Expériences</NavLink></li>
        <li className='navbar-menu-item'><NavLink to="contact" >Contact </NavLink></li>
      </ul>
      <div className="navbar-menu-mobil-container">
        <ul className='navbar-menu-mobil'>
          <li className='navbar-menu-item'><NavLink to="portfolio" onClick={displayMenu}>Home </NavLink></li>
          <li className='navbar-menu-item'><NavLink to="projets" onClick={displayMenu}>Projets</NavLink></li>
          <li className='navbar-menu-item'><NavLink to="experiences"onClick={displayMenu}> Expériences</NavLink></li>
          <li className='navbar-menu-item'><NavLink to="contact" onClick={displayMenu}>Contact </NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
export default Navbar