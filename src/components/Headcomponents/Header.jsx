// import React from 'react'
// import './Header.css'
// import logo from "../pics/logo.jpg"
// import { Link } from 'react-router-dom';


// function Header() {
//   const logoStyles = { width: "65px", borderRadius: "50%" }
//   return (
//     <div className='container'>
//       <div className="container">
//       <nav className="navbar navbar-expand-lg navbar-light">
//         <div className="container">
//           <a className="navbar-brand justify-content-center align-items-center" href="#"><img src={logo} alt="Company logo" className='img-fluid circle' style={logoStyles} /></a>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarNav">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link to="/" className="nav-link active" aria-current="page">Home</Link >
//               </li>
//               <li className="nav-item">
//                 <Link to="/About" className="nav-link active" aria-current="page">About</Link >
//               </li>

//               <li className="nav-item">
//                 <Link to="/Menu" className="nav-link active" aria-current="page">Menu</Link >
//               </li>

//               <li className="nav-item">
//                 <Link to="/Pages" className="nav-link active" aria-current="page">Pages</Link >
//               </li>

//               <li className="nav-item">
//                 <Link to="/Blog" className="nav-link active" aria-current="page">Blog</Link >
//               </li>
//               <li className="nav-item">
//                 <Link to="/Contact" className="nav-link active" aria-current="page">Contact</Link >        </li>
//             </ul>

//           </div>
//           <button type="button" className="btn btn-warning "><Link to="/Book" className="nav-link active" aria-current="page">Book A Table</Link ></button>

//         </div>
//       </nav>
//       </div>
//     </div>
//   )
// }

// export default Header
import React from 'react';
import './Header.css';
import logo from "../pics/logo.jpg";
import { Link } from 'react-router-dom';

function Header() {
  const logoStyles = { 
    width: "65px", 
    borderRadius: "50%",
    transition: "transform 0.3s ease"
  };

  return (
    <header className="bg-dark  sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark mb-5 ">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img 
              src={logo} 
              alt="Company logo" 
              className="img-fluid circle" 
              style={logoStyles}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            />
          </Link>

          <div className="d-flex ">
              <Link 
                to="/Book" 
                className="btn btn-warning px-4 py-2 fw-bold btn-sm"
              >
                Book A Table
              </Link>
            </div> 
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

         
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-2">
                <Link 
                  to="/" 
                  className="nav-link px-3 py-2 rounded" 
                  activeClassName="active"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link 
                  to="/About" 
                  className="nav-link px-3 py-2 rounded" 
                  activeClassName="active"
                >
                  About
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link 
                  to="/Menu" 
                  className="nav-link px-3 py-2 rounded" 
                  activeClassName="active"
                >
                  Menu
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link 
                  to="/Pages" 
                  className="nav-link px-3 py-2 rounded" 
                  activeClassName="active"
                >
                  Pages
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link 
                  to="/Blog" 
                  className="nav-link px-3 py-2 rounded" 
                  activeClassName="active"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link 
                  to="/Contact" 
                  className="nav-link px-3 py-2 rounded" 
                  activeClassName="active"
                >
                  Contact
                </Link>
              </li>
            </ul>
            
            
          </div>
        
        </nav>
      </div>
    </header>
  );
}

export default Header;