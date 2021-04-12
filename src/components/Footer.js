import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="bottom-footer">
                <div className="container">
                    <h1 className="text-center text-white count-text">Join over <span style={{color:'#00D8FF'}}>23,000</span> users</h1>
                    <h4 className="text-center pt-3 text-free">Ready to get started? - It's free!</h4>
                    <div className="pt-5" style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'center',alignItems:'center'}}>
                        <form method="get">
                            <div className="form-group">
                                <div  style={{display:'flex',flexDirection:'row',width:'98%',justifyContent:'center',alignItems:'center',padding:'0.5rem',}}>
                                    <input type="email" name="email" className="email_txt_field" id="email" placeholder="Email" />
                                    <button className="btn-finiata-start"><Link to="/" className="btn-finiata-start" style={{textDecoration:'none'}}>GET STARTED</Link></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <hr className="bg-grey w-75 mt-5 mb-0" />
                <footer className="footer pb-5">                    
                    <div className="container ">
                       <div className="row ">
                       <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 text-white">About</h6>
                            <ul className="list-unstyled mb-0">
                            <li className="mb-2"><Link to="/contact-us" style={{textDecoration:'none'}} className="text-white">Contact Us</Link></li>
                            <li className="mb-2"><Link to="/about" style={{textDecoration:'none'}} className="text-white">About Us</Link></li>
                            <li className="mb-2"><Link to="/pricing" style={{textDecoration:'none'}} className="text-white">Pricing</Link></li>
                            </ul>
                             </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4  text-white">Help</h6>
                            <ul className="list-unstyled mb-0">
                            <li className="mb-2"><Link to="/report-violation" style={{textDecoration:'none'}} className="text-white">Report Violation</Link></li>
                            <li className="mb-2"><Link to="/faq" style={{textDecoration:'none'}} className="text-white">FAQ's</Link></li>
                            </ul>
                        </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 text-white">Policy</h6>
                            <ul className="list-unstyled mb-0">
                            <li className="mb-2"><Link to="/terms-conditions" style={{textDecoration:'none'}} className="text-white">Terms Of Use</Link></li>
                            <li className="mb-2"><Link to="/privacy-policy" style={{textDecoration:'none'}} className="text-white">Privacy</Link></li>
                            </ul>
                        </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 className="text-uppercase font-weight-bold mb-4 text-white">Know Card</h6>
                            <ul className="list-unstyled mb-0">
                            <li className="mb-2"><Link to="/signin" style={{textDecoration:'none'}} className="text-white">Login</Link></li>
                            <li className="mb-2"><Link to="/signup" style={{textDecoration:'none'}} className="text-white">Register</Link></li>
                            </ul>
                        </div>
                            <div className="col-lg-4 col-md-6 mb-lg-0">
                            <h6 className="footer-logo mb-4 text-white">The Know Card</h6>
                            <p className="text-white mb-4">All Rights Reserved 2021.</p>
                            <hr className="bg-grey w-75" style={{marginLeft:0}} />
                            <ul className="list-inline mt-4">
                            <li className="list-inline-item mr-5"><a href="#facebook" target="_blank" title="facebook"><i className="fa fa-2x fa-facebook-f" /></a></li>
                            <li className="list-inline-item mr-5"><a href="#twitter" target="_blank" title="twitter"><i className="fa fa-2x fa-twitter" /></a></li>
                            <li className="list-inline-item mr-5"><a href="#linkedin" target="_blank" title="linkedin"><i className="fa fa-2x fa-linkedin" /></a></li>
                            </ul>
                        </div>
                      
                       </div>
                    </div>
                  

                </footer>
            </div>
    )
}
