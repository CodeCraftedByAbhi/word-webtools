import React,{useState} from "react";
import {Link} from 'react-router-dom'

export default function Navbar() {

  const [dark,light]=useState('dark')
  

  const handleClick = () => {
    let text = dark
    
    if(text === 'dark'){
      light('light')
      document.body.style.backgroundColor= "white"
      document.body.style.color= "black"
    }

    if(text === 'light'){
      light('dark')
      document.body.style.backgroundColor= "#1E1E1E"
      document.body.style.color= "white"
    }
  }

  return (
    <nav className={`navbar bg-${dark}`}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1" style={{color:(dark ==='dark')?'white':'black'}}>Text-WebTool</span>
        <ul className="nav justify-content-end">
          <li className="nav-item" style={{color:(dark ==='dark')?'white':'black'}}>
            <button style={{backgroundColor: "rgba(0,0,0,0)", border:"none"}}><Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
            </button>
          </li>
          <li className="nav-item">
          <button style={{backgroundColor: "rgba(0,0,0,0)", border:"none"}}><Link className="nav-link" to="/about">
              About Us
            </Link>
            </button>
          </li>
        </ul>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={handleClick}
          />
          <label className="form-check-label " for="flexSwitchCheckDefault" style={{color:(dark ==='dark')?'white':'black'}}>
            Enable {dark} mode
          </label>
        </div>
      </div>
    </nav>
  );
}
