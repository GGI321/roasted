import React from 'react'
import './Home.css'
import hero from "../pics/hero.png"
import card1 from "../pics/card1.png"
import card2 from "../pics/card2.png"
import card3 from "../pics/card3.png"
import card4 from "../pics/card4.png"
import wcard1 from "../pics/wcard1.png"
import wcard2 from "../pics/wcard2.png"
import wcard3 from "../pics/wcard3.png"
import wcard4 from "../pics/wcard4.png"
import Wwe from './weprovidecomponent/Wwe'
import chef from "../pics/chef.png"
import food1 from "../pics/food1.png"
import food2 from "../pics/food2.png"
import { Link } from 'react-router-dom'

function Home() {
    const herostyle = { filter: "brightness(0.6)" }
    return (


        <div>

            <div className="heropage container">
                <section className="hero container">
                    <div className="container myhero">
                        <img src={hero} alt="Hero image" className='img-fluid heroimage' style={herostyle} />
                        <div className="container ">
                            <div className="container myherowriteup">
                                <h1>BEST FOOD FOR <br /> YOUR TASTE</h1>
                                <p>Discover delectable cuisine and unforgettable moments <br /> in our welcoming, culinary haven.</p>
                                <div className="container d-flex gap-3">
                                    <button type="button" class="btn btn-outline-warning btn-sm"> <Link
                                        to="/Book"
                                        className="btn btn-warning px-4 py-2 fw-bold btn-sm"
                                    >
                                        Book A Table
                                    </Link></button>
                                    <button type="button" class="btn btn-outline-warning btn-sm">    <Link 
                                                      to="/Menu" 
                                                      className="nav-link px-3 py-2 rounded" 
                                                      activeClassName="active"
                                                    >
                                                      Menu
                                                    </Link></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <div className="browse container py-5">
                    <h1 className='text-center'>BROWSE OUR MENU</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-4 col-lg-3 my-2 mb-2 " data-aos='fade-up'>
                                <div className="card ">
                                    <div className="card-body d-flex justify-content-center align-items-center"><img src={card1} alt="" className='img-fluid' /></div>
                                    <div className="card-title text-center"><h4>Desserts</h4></div>
                                    <div className="card-text text-center"><p>In the new era of technology we look in the future with certainty and pride for our life.</p></div>
                                    <div className="container d-flex justify-content-center align-items-center"> <button type="button" class="btn btn-outline-warning my-2 text-center">Desserts</button></div>

                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3  mb-2" data-aos='fade-up'>
                                <div className="card">
                                    <div className="card-body d-flex justify-content-center align-items-center"><img src={card2} alt="" className='img-fluid' /></div>
                                    <div className="card-title text-center"><h4>Dishes</h4></div>
                                    <div className="card-text text-center"><p>In the new era of technology we look in the future with certainty and pride for our life.</p></div>
                                    <div className="container d-flex justify-content-center align-items-center"> <button type="button" class="btn btn-outline-warning my-2">Dishes</button></div>

                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3  mb-2" data-aos='fade-up'>
                                <div className="card">
                                    <div className="card-body d-flex justify-content-center align-items-center"><img src={card3} alt="" className='img-fluid' /></div>
                                    <div className="card-title text-center"><h4>Coffee</h4></div>
                                    <div className="card-text text-center"><p>In the new era of technology we look in the future with certainty and pride for our life.</p></div>
                                    <div className="container d-flex justify-content-center align-items-center"> <button type="button" class="btn btn-outline-warning my-2">Coffee</button></div>

                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4 col-lg-3  mb-2" data-aos='fade-up'>
                                <div className="card">
                                    <div className="card-body d-flex justify-content-center align-items-center"><img src={card4} alt="" className='img-fluid' /></div>
                                    <div className="card-title text-center"><h4>Drinks</h4></div>
                                    <div className="card-text text-center"><p>In the new era of technology we look in the future with certainty and pride for our life.</p></div>
                                    <div className="container d-flex justify-content-center align-items-center"> <button type="button" class="btn btn-outline-warning my-2">Drinks</button></div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <Wwe />
                <sectiom className="weAlsoOffer container ">
                    <h1>WE ALSO  OFFER UNIQUE SERVICES FOR YOUR EVENTS</h1>
                    <div className="row ">
                        <div className="col-sm-6 col-md-4 col-lg-3" data-aos='fade-down'>
                            <div className="card">
                                <div className="card-body"><img src={wcard1} alt="" className=' card-img' />
                                    <div className="card-title">Birthdays</div>
                                    <div className="card-text">In the new era of technology we look in the future with certainty for life.</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3" data-aos='fade-down'>
                            <div className="card">
                                <div className="card-body"><img src={wcard2} alt="" className='card-img' />
                                    <div className="card-title">Events</div>
                                    <div className="card-text">
                                        In the new era of technology we look in the future with certainty for life.</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3" data-aos='fade-down'>
                            <div className="card">
                                <div className="card-body"><img src={wcard3} alt="" className='card-img' />
                                    <div className="card-title">Weddings</div>
                                    <div className="card-text">In the new era of technology we look in the future with certainty for life.</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3" data-aos='fade-down'>
                            <div className="card">
                                <div className="card-body"><img src={wcard4} alt="" className='card-img' />
                                    <div className="card-title">caterings</div>
                                    <div className="card-text">In the new era of technology we look in the future with certainty for life.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </sectiom>
                <section className="fastest container">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-6 " >
                                <div className=" fast ">
                                    <img src={chef} alt="" className='img-fluid' data-aos="fade-right" />
                                    <div className="fast2 py-2">
                                        <img src={food1} alt="" className='img-fluid fstImg1 mb-2' data-aos="fade-right" />
                                        <img src={food2} alt="" className='img-fluid fstImg2' data-aos="fade-right" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" data-aos="fade-up-right">
                                <h1>fastest Delivery In City</h1>
                                <p>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
                                <h5>best delivery in 30mins</h5>
                                <h5>best offer availlable</h5>
                                <h5>online services availlable</h5>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="container whatOurCustomersay ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#474747" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,112C384,149,480,203,576,197.3C672,192,768,128,864,101.3C960,75,1056,85,1152,101.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    <h2>WHAT OUR CUSTOMERS SAY</h2>
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-lg-3" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title blockquote"><h5>The best restaurant</h5></div>
                                    <div className="card-text"><p>Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p></div>
                                    <div className="card-footer">
                                        <img src="" alt="" />
                                        <div className="roww">
                                            <img src={chef} alt="" className='img-fluid ' />
                                            <div className="container">
                                                <div className="card-title ">Donblinks</div>
                                                <div className="card-text">A very Nice place to be</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3" data-aos="fade-up">
                            <div className="card" >
                                <div className="card-body">
                                    <div className="card-title blockquote"><h5>simply the best</h5></div>
                                    <div className="card-text"><p>Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p></div>
                                    <div className="card-footer">
                                        <img src="" alt="" />
                                        <div className="roww">
                                            <img src={chef} alt="" className='img-fluid ' />
                                            <div className="container">
                                                <div className="card-title ">Donblinks</div>
                                                <div className="card-text">A very Nice place to be</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title blockquote"><h5>One Of A Kind Restaurant</h5></div>
                                    <div className="card-text"><p>The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary.</p></div>
                                    <div className="card-footer">
                                        <img src="" alt="" />
                                        <div className="roww">
                                            <img src={chef} alt="" className='img-fluid ' />
                                            <div className="container">
                                                <div className="card-title ">Donblinks</div>
                                                <div className="card-text">A very Nice place to be</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4 col-lg-3" data-aos="fade-up">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title blockquote"><h5>The best restaurant</h5></div>
                                    <div className="card-text"><p>Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p></div>
                                    <div className="card-footer">
                                        <img src="" alt="" />
                                        <div className="roww">
                                            <img src={chef} alt="" className='img-fluid ' />
                                            <div className="container">
                                                <div className="card-title ">Donblinks</div>
                                                <div className="card-text">A very Nice place to be</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="ourblogs">
                        <div className="container-fluid myblog">


                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Home
