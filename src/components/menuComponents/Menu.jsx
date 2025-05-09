import React from 'react'
import "./Menu.css"
import { Link } from 'react-router-dom'
import m1 from "../pics/m1.png"
import m2 from "../pics/m2.png"
import m3 from "../pics/m3.png"
import m4 from "../pics/m4.png"
import m5 from "../pics/m5.png"
import m6 from "../pics/m6.png"
import m7 from "../pics/m7.png"
import m8 from "../pics/m8.png"
import c1 from "../pics/c1.png"
import c2 from "../pics/c2.png"
import c3 from "../pics/c3.png"
import c4 from "../pics/c4.png"
import c5 from "../pics/c5.png"
import c6 from "../pics/c6.png"
import c7 from "../pics/c7.png"
import c8 from "../pics/c8.png"
import c9 from "../pics/c9.png"

function Menu() {
    const st = { width: "clamp(100px, 13vw, 15rem)" }
    return (
        <div className=''>
            <div className="container mmm">
                <h1 className='text-center'>OUR MENU</h1>
                <p className='text-center'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                <div className="container text-center p-2">
                    <button type="button" className="btn btn-outline-danger btn-sm btn-outlined m-2 btn-rounded"><Link to="/All" className="nav-link active" aria-current="page">All</Link ></button>
                    <button type="button" className="btn btn-outline-danger btn-sm btn-outlined m-2 btn-rounded"><Link to="/Breakfast" className="nav-link active" aria-current="page">Breakfast</Link ></button>
                    <button type="button" className="btn btn-outline-danger btn-sm btn-outlined m-2 btn-rounded"><Link to="/Main dishes" className="nav-link active" aria-current="page">Main Dishes</Link ></button>
                    <button type="button" className="btn btn-outline-danger btn-sm btn-outlined m-2 btn-rounded"><Link to="/Drinks" className="nav-link active" aria-current="page">Drinks</Link ></button>
                    <button type="button" className="btn btn-outline-danger btn-sm btn-outlined m-2 btn-rounded"><Link to="/Desserts" className="nav-link active" aria-current="page">Desserts</Link ></button>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3" data-aos="fade-left">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <img src={m1} alt="" className='card-img ' data-aos="fade-right"/>
                                    <div className="card-title text-danger text-center"><b>$9.99</b></div>
                                    <div className="card-title text-center text-dark"><b>Fried eggs</b></div>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3" data-aos="fade-left">
                            <div className="card  mb-3">
                                <div className="card-body">
                                    <img src={m2} alt="" className='card-img ' data-aos="fade-right"/>
                                    <div className="card-title text-danger text-center"><b>$9.99</b></div>
                                    <div className="card-title text-center text-dark"><b>Fried eggs</b></div>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3" data-aos="fade-left">
                            <div className="card  mb-3">
                                <div className="card-body">
                                    <img src={m3} alt="" className='card-img ' data-aos="fade-right" />
                                    <div className="card-title text-danger text-center"><b>$9.99</b></div>
                                    <div className="card-title text-center text-dark"><b>Fried eggs</b></div>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3" data-aos="fade-left">
                            <div className="card  mb-3">
                                <div className="card-body">
                                    <img src={m4} alt="" className='card-img ' data-aos="fade-right"/>
                                    <div className="card-title text-danger text-center"><b>$9.99</b></div>
                                    <div className="card-title text-center text-dark"><b>Fried eggs</b></div>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3" data-aos="fade-left">
                            <div className="card  mb-3">
                                <div className="card-body">
                                    <img src={m5} alt="" className='card-img ' data-aos="fade-right"/>
                                    <div className="card-title text-danger text-center"><b>$9.99</b></div>
                                    <div className="card-title text-center text-dark"><b>Fried eggs</b></div>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3" data-aos="fade-left">
                            <div className="card  mb-3">
                                <div className="card-body">
                                    <img src={m6} alt="" className='card-img ' data-aos="fade-right"/>
                                    <div className="card-title text-danger text-center"><b>$9.99</b></div>
                                    <div className="card-title text-center text-dark"><b>Fried eggs</b></div>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3" data-aos="fade-left">
                            <div className="card  mb-3">
                                <div className="card-body">
                                    <img src={m7} alt="" className='card-img ' data-aos="fade-right"/>
                                    <div className="card-title text-danger text-center"><b>$9.99</b></div>
                                    <div className="card-title text-center text-dark"><b>Fried eggs</b></div>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-3" data-aos="fade-left">
                            <div className="card  mb-3">
                                <div className="card-body">
                                    <img src={m8} alt="" className='card-img ' data-aos="fade-right"/>
                                    <div className="card-title text-danger text-center"><b>$9.99</b></div>
                                    <div className="card-title text-center text-dark"><b>Fried eggs</b></div>
                                    <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row col-12 col-sm-6 main" data-aos="zoom-in-down">
                        <div className="col-6  wr">
                            <h1>You can order through apps</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
                        </div>
                        <div className="col-12  col-sm-6 container">
                            <div className="row row-cols-3 mdc">
                                <div className="">
                                    <img src={c1} alt="" className=' logos ' style={st} />
                                </div>

                                <div className="">
                                    <img src={c2} alt="" className=' logos ' style={st} />
                                </div>

                                <div className="">
                                    <img src={c3} alt="" className=' logos ' style={st} />
                                </div>

                                <div className="">
                                    <img src={c4} alt="" className=' logos ' style={st} />
                                </div>

                                <div className="">
                                    <img src={c5} alt="" className=' logos ' style={st} />
                                </div>

                                <div className="">
                                    <img src={c6} alt="" className=' logos ' style={st} />
                                </div>

                                <div className="">
                                    <img src={c7} alt="" className=' logos ' style={st} />
                                </div>

                                <div className="">
                                    <img src={c8} alt="" className=' logos ' style={st} />
                                </div>

                                <div className="">
                                    <img src={c9} alt="" className=' logos ' style={st} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Menu
