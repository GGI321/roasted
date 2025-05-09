
// import React from 'react'
// import './Footer.css'
// import logo from "../pics/logo.jpg"
// import a from "../pics/a.png"
// import b from "../pics/b.png"
// import c from "../pics/c.png"
// import d from "../pics/d.png"
// import ic1 from "../pics/ic1.png"
// import ic2 from "../pics/ic2.png"
// import ic3 from "../pics/ic3.png"
// import ic4 from "../pics/ic4.png"
// import { Link } from 'react-router-dom'

// function Footer() {
//     const styleF = { width: "80px", borderRadius: "20%" }
//     return (
//         <div className='container-fluid bg-dark text-white py-4'>
//             <div className='container'>
//                 <div className="row">
                    
//                     <div className="col-md-4 col-sm-12 mb-4 mb-md-0 text-center text-md-start">
//                         <div className="d-flex flex-column align-items-center align-items-md-start">
//                             <div className="mb-3">
//                                 <img src={logo} alt="Roasted Rice Logo" className='img-fluid' style={styleF} />
//                                 <h5 className="mt-2">roasted rice</h5>
//                             </div>
//                             <p className="text-center text-md-start mb-3">
//                                 In the new era of technology we look a in the future with certainty and pride to for our company and.
//                             </p>
//                             <div className="d-flex justify-content-center justify-content-md-start gap-3">
//                                 <img src={ic1} alt="Social icon" className='img-fluid' style={{width: "30px"}} />
//                                 <img src={ic2} alt="Social icon" className='img-fluid' style={{width: "30px"}} />
//                                 <img src={ic3} alt="Social icon" className='img-fluid' style={{width: "30px"}} />
//                                 <img src={ic4} alt="Social icon" className='img-fluid' style={{width: "30px"}} />
//                             </div>
//                         </div>
//                     </div>

            
//                     <div className="col-md-4 col-sm-12 mb-4 mb-md-0">
//                         <div className="d-flex flex-column align-items-center align-items-md-start">
//                             <h5 className="mb-3">Pages</h5>
//                             <ul className="list-unstyled d-flex flex-column gap-2">
//                                 <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
//                                 <li><Link to="/About" className="text-white text-decoration-none">About</Link></li>
//                                 <li><Link to="/Pages" className="text-white text-decoration-none">Pages</Link></li>
//                                 <li><Link to="/Blog" className="text-white text-decoration-none">Blog</Link></li>
//                                 <li><Link to="/Book" className="text-white text-decoration-none">Book A Table</Link></li>
//                                 <li><Link to="/Menu" className="text-white text-decoration-none">Menu</Link></li>
//                                 <li><Link to="/Contact" className="text-white text-decoration-none">Contact</Link></li>
//                             </ul>
//                         </div>
//                     </div>

                
//                     <div className="col-md-4 col-sm-12">
//                         <div className="d-flex flex-column align-items-center align-items-md-start">
//                             <h5 className="mb-3 text-center text-md-start">Follow Us On Instagram</h5>
//                             <div className="row g-2">
//                                 <div className="col-6">
//                                     <img src={a} alt="Instagram post" className='img-fluid rounded w-100' />
//                                 </div>
//                                 <div className="col-6">
//                                     <img src={b} alt="Instagram post" className='img-fluid rounded w-100' />
//                                 </div>
//                                 <div className="col-6">
//                                     <img src={c} alt="Instagram post" className='img-fluid rounded w-100' />
//                                 </div>
//                                 <div className="col-6">
//                                     <img src={d} alt="Instagram post" className='img-fluid rounded w-100' />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer

import React from 'react';
import './Footer.css';
import logo from "../pics/logo.jpg";
import a from "../pics/a.png";
import b from "../pics/b.png";
import c from "../pics/c.png";
import d from "../pics/d.png";
import ic1 from "../pics/ic1.png";
import ic2 from "../pics/ic2.png";
import ic3 from "../pics/ic3.png";
import ic4 from "../pics/ic4.png";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-dark text-white pt-4 pb-2">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex flex-column h-100">
                            <div className="d-flex align-items-center mb-2">
                                <img 
                                    src={logo} 
                                    alt="Roasted Rice Logo" 
                                    className="img-fluid rounded-circle me-2" 
                                    style={{width: "40px", height: "40px"}}
                                />
                                <h5 className="mb-0 fs-6">roasted rice</h5>
                            </div>
                            <p className="text-muted small mb-3">
                                In the new era of technology we look a in the future with certainty and pride to for our company and.
                            </p>
                            <div className="mt-auto d-flex gap-2">
                                {[ic1, ic2, ic3, ic4].map((icon, index) => (
                                    <img 
                                        key={index}
                                        src={icon} 
                                        alt={`Social icon ${index + 1}`} 
                                        className="img-fluid" 
                                        style={{width: "20px", height: "20px"}} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <h5 className="fs-6 mb-2">Pages</h5>
                        <ul className="list-unstyled d-grid gap-1">
                            {[
                                { path: "/", label: "Home" },
                                { path: "/About", label: "About" },
                                { path: "/Pages", label: "Pages" },
                                { path: "/Blog", label: "Blog" },
                                { path: "/Book", label: "Book A Table" },
                                { path: "/Menu", label: "Menu" },
                                { path: "/Contact", label: "Contact" }
                            ].map((item, index) => (
                                <li key={index}>
                                    <Link 
                                        to={item.path} 
                                        className="text-white-50 text-decoration-none small"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <h5 className="fs-6 mb-2">Follow Us On Instagram</h5>
                        <div className="row g-2">
                            {[a, b, c, d].map((img, index) => (
                                <div key={index} className="col-6 col-md-3 col-lg-6">
                                    <img 
                                        src={img} 
                                        alt={`Instagram post ${index + 1}`} 
                                        className="img-fluid rounded w-100 h-100" 
                                        style={{minHeight: "70px", objectFit: "cover"}}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row mt-3 pt-2 border-top border-secondary">
                    <div className="col-12 text-center text-muted small">
                        <p className="mb-0">
                            &copy; {new Date().getFullYear()} Roasted Rice. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;