import React from 'react'
import '../About.css'
import e from "./New folder/e.png"
import e1 from "./New folder/e1.png"
import e2 from "./New folder/e2.png"

function Customer() {
    const style = { width: "40px" }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Best Restaurant</div>
                                <div className="card-text">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</div>
                                <div className="card-footer d-flex">
                                    <img src={e} alt="" className='img-fluid' style={style} />
                                    <div className="writes container">
                                        <p>Donblinks</p>
                                        <p>Australia</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Best Restaurant</div>
                                <div className="card-text">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</div>
                                <div className="card-footer d-flex">
                                    <img src={e1} alt="" className='img-fluid' style={style} />
                                    <div className="writes container">
                                        <p>Donblinks</p>
                                        <p>Australia</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Best Restaurant</div>
                                <div className="card-text">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</div>
                                <div className="card-footer d-flex">
                                    <img src={e2} alt="" className='img-fluid' style={style} />
                                    <div className="writes container">
                                        <p>Donblinks</p>
                                        <p>Australia</p>
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

export default Customer
