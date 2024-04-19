import { Link  } from "react-scroll";
import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo.gif';
function Header() {


  return (
    <nav className="navbar sticky-top navbar-expand-lg shadow bg-white">
        <div className="container">
        
    <Link  spy={true}
                    smooth={true}
                    offset={-100}
                    duration={2000} to="Home" className="navbar-brand h1">
                      <img src={Logo}   className="px-1 logo" alt="Portfolio"/> Ali Hamza
                      </Link>
    <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto text-center">
        <li className="nav-item">
          <Link  spy={true}
                    smooth={true}
                    offset={-100}
                    duration={2000} to="Home" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link  spy={true}
                    smooth={true}
                    offset={-100}
                    duration={2000} to="About" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link  spy={true}
                    smooth={true}
                    offset={-100}
                    duration={2000} to="Education" className="nav-link" >Education</Link>
        </li>
        <li className="nav-item">
          <Link  spy={true}
                    smooth={true}
                    offset={-100}
                    duration={2000} to="Skills" className="nav-link" >Skills</Link>
        </li>
        <li className="nav-item">
          <Link  spy={true}
                    smooth={true}
                    offset={-100}
                    duration={2000} to="Projects" className="nav-link" >Projects</Link>
        </li>
        <li className="nav-item">
          <Link  spy={true}
                    smooth={true}
                    offset={-100}
                    duration={2000} to="Experience" className="nav-link" >Experience</Link>
        </li>
        <li className="nav-item">
          <Link  spy={true}
                    smooth={true}
                    offset={-100}
                    duration={2000} to="Contact" className="nav-link" >Contact</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>


 

  )
}
export default Header;