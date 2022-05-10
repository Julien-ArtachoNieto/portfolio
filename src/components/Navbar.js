import "./styles/navbar.css"
const Navbar = ()=>{
  return (
    <nav className="navbar-container">
      <div className='navbar-btn'>
        <div className='navbar-btn-line'></div>
        <div className='navbar-btn-line'></div>
        <div className='navbar-btn-line'></div>
      </div>
      <h1 >Julien Artacho~Nieto <em>Full-Stack Web developer</em></h1>
      <ul className='navbar-menu'>
        <li className='navbar-menu-item'>Home</li>
        <li className='navbar-menu-item'>Projet</li>
        <li className='navbar-menu-item'>Contact</li>
      </ul>
    </nav>
  )
}
export default Navbar