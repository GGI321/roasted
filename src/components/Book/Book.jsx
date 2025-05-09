

import React from 'react';
import './Book.css';
import ConComp from '../contactsComponent/ConComp';
function Book() {
    return (
        <div className="container bg p-4 ">
            <h1 className="text-center">BOOK A TABLE</h1>
            <p className="text-center">
                We consider all the drivers of change gives you the components you need to change to create a truly happens.
            </p>

            {/* Form Section */}
            <div className="row justify-content-center ">
                <div className="col-md-6">
                    <ConComp/>
                </div>
            </div>

            {/* Map Section */}
            <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                    <div className="ratio ratio-16x9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.058937743304!2d7.049247074061779!3d6.255966293732554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104382582a3266f5%3A0x98597c3bb7938e50!2sUrum-Mgbakwu%20Rd%2C%20Anambra!5e0!3m2!1sen!2sng!4v1742043576745!5m2!1sen!2sng"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Book;