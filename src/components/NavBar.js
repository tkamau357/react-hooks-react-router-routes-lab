import React from "react";
import { Link } from "react-router-dom";

const NavBar=()=>{
    console.log("Navbar Page")
  return (
    <div className="nav">
        <ul>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/Movies" className="nav-link">Movies</Link></li>
            <li><Link to="/Directors" className="nav-link">Directors</Link></li>
            <li><Link to="/Actors" className="nav-link">Actors</Link></li>
        </ul>
    </div>
  );
}

export default NavBar;
