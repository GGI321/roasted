import React from 'react'
import './Footer.css'
import logo from "../pics/logo.jpg"
import a from "../pics/a.png"
import b from "../pics/b.png"
import c from "../pics/c.png"
import d from "../pics/d.png"
import ic1 from "../pics/ic1.png"
import ic2 from "../pics/ic2.png"
import ic3 from "../pics/ic3.png"
import ic4 from "../pics/ic4.png"
import { Link } from 'react-router-dom'

function Footer() {
    const styleF = { width: "60px", borderRadius: "50%" }
    return (
        <div className='container'>
            <div className='container justify-content-center align-items-center py-2 footer text-white'>

                <div className="container ">
                     <div className="container">
                        
                    <div className="row">
                    {/* <div className="container logo"> */}
                        <div className="col-sm-6 col-md-3 ">
                            <div className="imgcon ">
                                <img src={logo} alt="" className='img-fluid' style={styleF} />
                                <h5>roasted rice</h5>
                            </div>
                            <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                            <div className="icons row-col-3 mx-1">
                                <img src={ic1} alt="icon images" className='img-fluid' />
                                <img src={ic2} alt="icon images" className='img-fluid' />
                                <img src={ic3} alt="icon images" className='img-fluid' />
                                <img src={ic4} alt="icon images" className='img-fluid' />
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <div className='list'>
                                <h5 className='text-center'>Pages</h5>
                                <ul className='myUl'>
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link >
                                <Link to="/About" className="nav-link active" aria-current="page">About</Link >
                                <Link to="/Pages" className="nav-link active" aria-current="page">Pages</Link >
                                <Link to="/Blog" className="nav-link active" aria-current="page">Blog</Link >
                                <Link to="/Book" className="nav-link active" aria-current="page">Book A Table</Link >
                                <Link to="/Menu" className="nav-link active" aria-current="page">Menu</Link >
                                <Link to="/Contact" className="nav-link active" aria-current="page">Contact</Link >
                                    
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <div className='utility'>
                                <h5 className='text-center'>Utility Pages</h5>
                                <ul>
                                    <li>Style Guide</li>
                                    <li>Start Here</li>
                                    <li>Password Protected</li>
                                    <li>404 Not Found</li>
                                    <li>Password Protected</li>
                                    <li>Licences</li>
                                    <li>Change log</li>
                                    <li>View more</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3">
                            <div className='utility'>
                                <h5>Follow Us On Instagram</h5>
                                <div className="container utImg ">
                                    <img src={a} alt="" className='rounded img-fluid'/>
                                    <img src={b} alt="" className='rounded img-fluid'/>
                                    <img src={c} alt="" className='rounded img-fluid'/>
                                    <img src={d} alt="" className='rounded img-fluid'/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                     </div>
                  

                </div>
            </div>
         </div>
    )
}

export default Footer
