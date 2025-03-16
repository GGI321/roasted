import React from 'react'
import "./We.css"
import weImage from "../weprovidecomponent/weImage.png"

function Wwe() {
    const style = {width: "80%", borderRadius: "10%"}
  return (
    <div>
      <div className="container ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#474747" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,106.7C384,139,480,181,576,186.7C672,192,768,160,864,149.3C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div className="we-container bg-light">
            <div className="row">
                <div className="col-sm-6 we-container-ex">
                    <img src={weImage} alt=""  className='img-fluid ' style={style}/>
                    <div className="container we-absolute">
                        <h4>come and visit us</h4>
                        <p>+234 8070 4025 09</p>
                        <p>donblinks245@gmail.com</p>
                        <p>n0. 27 oshundeyi mafoluku</p>
                        <p></p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <h1>WE PROVIDE HEALTHY FOOD <br /> FOR YOUR FAMILY</h1>
                    <p>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
                    <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#474747" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,106.7C384,139,480,181,576,186.7C672,192,768,160,864,149.3C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </div>
    </div>
  )
}

export default Wwe
