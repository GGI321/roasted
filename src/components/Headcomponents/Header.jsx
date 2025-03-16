import React from 'react'
import './Header.css'
import logo from "../pics/logo.jpg"
import { Link } from 'react-router-dom';


function Header() {
  const logoStyles = { width: "65px", borderRadius: "50%" }
  return (
    <div className='container'>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <a className="navbar-brand justify-content-center align-items-center" href="#"><img src={logo} alt="Company logo" className='img-fluid circle' style={logoStyles} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link >
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link active" aria-current="page">About</Link >
              </li>

              <li className="nav-item">
                <Link to="/Menu" className="nav-link active" aria-current="page">Menu</Link >
              </li>

              <li className="nav-item">
                <Link to="/Pages" className="nav-link active" aria-current="page">Pages</Link >
              </li>

              <li className="nav-item">
                <Link to="/Blog" className="nav-link active" aria-current="page">Blog</Link >
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link active" aria-current="page">Contact</Link >        </li>
            </ul>
            <button type="button" className="btn btn-warning btn-lg"><Link to="/Book" className="nav-link active" aria-current="page">Book A Table</Link ></button>

          </div>
        </div>
      </nav>
      </div>
    </div>
  )
}

export default Header
