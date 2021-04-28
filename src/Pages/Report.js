import React from 'react';
import './Report.css';
import NavbarTop from '../components/NavbarTop';
import Footer from '../components/Footer';

export default function Report() {
    return (
        <>
            <NavbarTop/>
            {/* Contact */}
            <div className="contact">
            <div className="container mt-4 mt-lg-5">
                <h2 className="mb-2 contact__heading">Report a violation</h2>
                <p className='contact__para pt-2'><strong>Know takes account violations very seriously. </strong></p>
                <p className='contact__para'><strong>Please use the form below to report a violation or an account you think we should review.</strong> 
                <br/>
                 In the event of any violation one can report that by filling in a form provided in the platform which also provides for the terms and services of the platform
                <br/>
                <br/>
                <strong>Please note this form is not for general support requests.</strong> If you need help with your own <strong>The Know Card</strong> account, please contact support on <a href="mailto:support@theknowcard">support@theknowcard</a> or visit our support portal.
                </p>
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
                        <input type="email" name="email" id="email" className="form-control"/>
                   </div>
                   <div className="form-group mt-4">
                        <label>URL of knowcard you are reporting *</label>
                        <input type="url" name="url" id="url" className="form-control"/>
                   </div>
                  
                   <div className="form-group mt-4">
                        <label>What is the reason for reporting this profile?*</label>
                       <textarea name="message" id="message" className="form-control-area" rows="10"></textarea>
                   </div>
                   <div className="form-group mt-5 pb-5 mb-5 text-center">
                       <button className="btn-submitForm">SUBMIT FORM</button>
                   </div>
                </form>
            </div>
            
            </div>
            {/* Footer */}
            <Footer />
        </>
    )
}
