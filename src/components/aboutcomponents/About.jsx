import React from 'react'
import "./About.css"
import Wwe from '../Homecomponents/weprovidecomponent/Wwe'
import bg from "../pics/bg.png"
import i from "../pics/i.png"
import i2 from "../pics/i2.png"
import i3 from "../pics/i3.png"
import side from "../pics/side.png"
import Customer from './aboutcomponent/Customer'




function About() {
    const style = { width: "50px", height: "50px" }
    const sideStyle= {height: "85%", borderRadius: "10%"}
    return (
        <div>
            <Wwe />
            <div className="backgroungcontainer py-2 container">
                <img src={bg} alt="" className='img-fluid' data-aos="fade-down"/>
                <div className="row py-3 mx-1">
                    {/* <div className="container"> */}
                    <div className="col-md-4 d-flex cll" data-aos="fade-up">
                        <img src={i3} alt="" className='img-fluid' style={style} />
                        <div className="cl">
                            <h6>multi cuisine</h6>
                            <p>In the new era of technology we look in the future with certainty life.</p>
                        </div>
                    </div>

                    <div className="col-md-4 d-flex cll" data-aos="fade-up">
                        <img src={i2} alt="" className='img-fluid' style={style} />
                        <div className="cl" >
                            <h6>multi cuisine</h6>
                            <p>In the new era of technology we look in the future with certainty life.</p>
                        </div>
                    </div>

                    <div className="col-md-4 d-flex cll" data-aos="fade-up">
                        <img src={i} alt="" className='img-fluid' style={style} />
                        <div className="cl" >
                            <h6>multi cuisine</h6>
                            <p>In the new era of technology we look in the future with certainty life.</p>
                        </div>
                    </div>
                </div>
            </div>
            <section className="info container" >
                <div className="row mb-4">
                    <div className="col-md-6" >
                        <h1>A little information for our valuable guest</h1>
                        <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                        <div className="row ">
                            <div className="col-sm-6 py-3" data-aos="flip-left">
                                <div className="card mb-2">
                                    <div className="card-body">
                                        <div className="card-title"><h1>3+</h1></div>
                                        <div className="card-text"><p>Locations</p></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 py-3" data-aos="flip-left">
                                <div className="card mb-2">
                                    <div className="card-body">
                                        <div className="card-title"><h1>1995</h1></div>
                                        <div className="card-text"><p>Founded</p></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 mb-2 py-3" data-aos="flip-left">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title"><h1>100+ </h1></div>
                                        <div className="card-text"><p>Staff member</p></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 mb-2 py-3" data-aos="flip-left" >
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title"><h1>80%</h1></div>
                                        <div className="card-text"><p>Satisfied customers</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={side} alt="" className='img-fluid ' style={sideStyle} data-aos="flip-right"/>
                    </div>
                </div>
            </section>
            <Customer />
        </div>
        // </div>
    )
}

export default About
