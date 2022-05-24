import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header=()=> {
  useEffect( () => {
      
    const timer = setTimeout(() => {
       console.log('Header here');
    }, 2000);     
  },[])


    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-info">

        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>   
            <li className="nav-item">
              <Link className="nav-link" to="/Login">
                Login/Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}
export default Header