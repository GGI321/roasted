// import React from 'react'
// import './C.css'

// function ConComp() {
//     return (
//         <div>
//             <div className="container ALL">
//                 <form action="" className='container text-center'>
//                     <div className="container MC">
//                         <div className="container DT">
//                            <div className="row-col-12">
//                            <input type="date" />
//                            <input type="time" placeholder='time' />
//                            </div>

//                         </div>
//                         <div className="container NP">
//                            <div className="row-col-12">
//                            <input type="text" placeholder='Name' />
//                            <input type="text" placeholder='Phone Number' />
//                            </div>
//                         </div>
//                     </div>
//                     <div className="container NG">
//                         <input type="Number" placeholder='No. of guest' />
//                     </div>
//                     <button className='btn btn-danger btn-block BB container'>Book now</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default ConComp
import React from 'react';
import './C.css';

function ConComp() {
    return (
        <div className="container ALL">
            <form action="" className="text-center">
                <div className="row">
                    {/* Date and Time Input */}
                    <div className="col-12 col-md-6 mb-3">
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <input type="time" className="form-control" placeholder="Time" />
                    </div>
                </div>

                <div className="row">
                    {/* Name and Phone Number Input */}
                    <div className="col-12 col-md-6 mb-3">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <input type="text" className="form-control" placeholder="Phone Number" />
                    </div>
                </div>

                <div className="row">
                    {/* Number of Guests Input */}
                    <div className="col-12 mb-3">
                        <input type="number" className="form-control" placeholder="No. of Guests" />
                    </div>
                </div>

                <div className="row">
                    {/* Book Now Button */}
                    <div className="col-12">
                        <button className="btn btn-danger btn-block">Book now</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ConComp;
