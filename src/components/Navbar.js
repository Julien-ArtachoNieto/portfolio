import "./styles/navbar.css"
import NavbarBtn from "./NavbarBtn";
import {NavLink} from "react-router-dom";

const Navbar = ()=>{
  return (
    <nav className="navbar-container">
      <NavbarBtn/>
      <h1 >Julien Artacho~Nieto <em>Full-Stack Web developer</em></h1>
      <ul className='navbar-menu'>
       <li className='navbar-menu-item'><NavLink to="/" >Home </NavLink></li>
        <li className='navbar-menu-item'><NavLink to="projets">Projets</NavLink></li>
        <li className='navbar-menu-item'>Expériences</li>
        <li className='navbar-menu-item'><NavLink to="contact" >Contact </NavLink></li>
      </ul>
    </nav>
  )
}
export default Navbar