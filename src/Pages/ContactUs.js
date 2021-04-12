import React from 'react';
import './ContactUs.css';
import NavbarTop from '../components/NavbarTop';
import Footer from '../components/Footer';

export default function ContactUs() {
    return (
        <>
            <NavbarTop/>
            {/* Contact */}
            <div className="contact">
            <div className="container mt-5">
                <h2 className="mb-2 contact__heading">Contact</h2>
                <p className='contact__para'>Got a question? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.</p>
                <form  method="get" className="mt-5">
                   <div className="row">
                       <div className="col-md-6">
                            <div className="form-group">
                                <label>Name *</label>
                                <input type="text" name="name" id="name" className="form-control"/>
                                <small>First Name</small>
                            </div>
                       </div>
                       <div className="col-md-6">
                            <div className="form-group">
                                <label className="text-white">Name *</label>
                                <input type="text" name="name" id="name" className="form-control"/>
                                <small>Last Name</small>
                            </div>
                       </div>
                   </div>
                   <div className="form-group mt-3">
                        <label>Email *</label>
                        <input type="email" name="name" id="name" className="form-control"/>
                   </div>
                   <div className="form-group mt-4">
                        <label>What is your enquiry about?*</label>
                        <select name="inquiry" id="inquiry" className="form-control">
                            <option  > Help / Support Question</option>
                            <option  > Investment Related</option>
                            <option  > Agency / Enterprise Bussiness Sale</option>
                            <option  > Press / Media</option>
                            <option  > Careers</option>
                        </select>
                   </div>
                   <div className="form-group mt-4">
                        <label>Message *</label>
                       <textarea name="message" id="message" className="form-control-area" rows="10"></textarea>
                   </div>
                   <div className="form-group mt-5 pb-5 mb-5 text-center">
                       <button className="btn-submitForm">SUBMIT FORM</button>
                   </div>
                </form>
            </div>
            
            </div>
            {/* Footer */}
            <Footer/>
        </>
    )
}
