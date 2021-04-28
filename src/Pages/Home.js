import React from 'react';
import './Home.css';
import {Carousel } from 'react-bootstrap';
import Image1 from '../assets/1.png';
import Image2 from '../assets/2.png';
import Image3 from '../assets/3.png';
import Image4 from '../assets/4.png';
import Onboarding from '../assets/onboarding.png';
import RequestOffer from '../assets/requestOffer.png';
import CashFlow from '../assets/cashFlow.png';
// Masthead
import FB  from '../assets/masthead/facebook.png';
import IG  from '../assets/masthead/instagram.png';
import LD  from '../assets/masthead/linkedin.png';
import SP  from '../assets/masthead/shopify.png';
import SN  from '../assets/masthead/snapchat.png';
import ST  from '../assets/masthead/spotify.png';
import TT  from '../assets/masthead/tik-tok.png';
import TI  from  '../assets/masthead/tune-in.png';
import TW  from  '../assets/masthead/twitch.png';
import YT  from  '../assets/masthead/youtube.png';
import NavbarTop from '../components/NavbarTop';
import Footer from '../components/Footer';

export default function Home() {
    
    

    return (
        <>
           <NavbarTop/>
            
            {/* Header */}
            <div  className=" jumbotron bg-image">
                <div className="set">
                    <div><img src={FB} style={{width:200,height:200,transform:' skewY(-20deg)'}} alt="1"/></div>
                    <div><img src={IG} style={{width:280,height:280,transform:' skewY(18deg)'}} alt="2"/></div>
                    <div><img src={SP} style={{width:180,height:180,transform:' skewY(-10deg)'}} alt="4"/></div>    
                    <div><img src={ST} style={{width:200,height:200,transform:' skewY(35deg)'}} alt="6"/></div>   
                    <div><img src={SN} style={{width:225,height:225,transform:' skewX(20deg)'}} alt="5"/></div>   
                    <div><img src={TI} style={{width:200,height:200,transform:' skewY(-20deg)'}} alt="8"/></div>   
                    <div><img src={LD} style={{width:250,height:250,transform:' skewY(20deg)'}} alt="3"/></div>
                    <div><img src={YT} style={{width:250,height:250,transform:' skewX(12deg)'}} alt="10"/></div>   
                    <div><img src={TW} style={{width:200,height:200,transform:' skewX(30deg)'}} alt="9"/></div>   
                </div>
                {/* <div className="set set2 desktop-show">
                    <div><img src={LD} style={{width:180,height:180}} alt="3"/></div>
                    <div><img src={FB} style={{width:180,height:180,transform:' skewY(8deg)'}} alt="1"/></div>
                    <div><img src={YT} style={{width:180,height:180}} alt="10"/></div>  
                    <div><img src={SP} style={{width:180,height:180,transform:' skewX(12deg)'}} alt="4"/></div>    
                    <div><img src={SN} style={{width:180,height:180}} alt="5"/></div>    
                </div>
                <div className="set set3 desktop-show">
                    <div><img src={ST} style={{width:180,height:180,transform:' skewY(14deg)'}} alt="6"/></div>  
                    <div><img src={TI} style={{width:180,height:180}} alt="8"/></div>   
                    <div><img src={TW} style={{width:180,height:180,transform:' skewX(10deg)'}} alt="9"/></div>   
                    <div><img src={IG} style={{width:180,height:180}} alt="2"/></div> 
                    <div><img src={TT} style={{width:180,height:180,transform:' skewY(24deg)'}} alt="7"/></div>     
                </div> */}
                <div className="container py-5  mt-lg-0 text-center" >
                    <h1 className="display-4 font-monserrat" >THE ONLY CARD YOU NEED TO KNOW</h1>
                    <p className="font-p mt-3">The easiest and best way to introduce yourself.</p>
                </div>
               
            </div>
            {/* Finata Section */}
            <div className="finata pt-3">
                <h3 className="text-center font-monserrat-h3">Things you should know… </h3>
                <div className="row  m-0">
                    <div className="container" >
                        <div className="row p-3 m-3"  >
                            <div className="col-lg-6 col-md-6  pt-0 text-center mb-4 mb-lg-0" >
                                <h2 className="heading__finiata">Contactless, boundless possibilities.</h2>
                                <p className="paragraph__finiata pt-4">Create, share and cross promote your links. Choose from loads of different card types - music, videos, social media, online stores and many more.</p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <img src={Image1} className="img-fluid" alt="feature"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="container">
                        <div className="row p-3 pt-0 mt-0 m-3" >
                            <div className="col-lg-6 col-md-6">
                                <img src={Image2} className="img-fluid" alt="feature"/>
                            </div>
                            <div className="col-lg-6 col-md-6  pt-5  text-center mb-4 mb-lg-0">
                                <h2 className="heading__finiata ">Track your interactions</h2>
                                <p className="paragraph__finiata pt-4">Analyse in-depth analytics of visitor demographics on every of your link and find out how its working for you. <br/> You can do that by getting paid today instead of waiting for your customers</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="row  m-0">
                    <div className="container">
                        <div className="row p-3 pt-0 mt-0 m-3" >
                            <div className="col-lg-6 col-md-6  pt-0  text-center mb-4 mb-lg-0">
                                <h2 className="heading__finiata">Your card in the physical world.</h2>
                                <p className="paragraph__finiata pt-4">Your Know profile doesn’t need to just live online. Stand out from the crowd with our digital business cards. Going digital means, you can track your card, share it in seconds and leave a lasting impression on the people you meet. </p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <img src={Image3} className="img-fluid" alt="feature"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="container">
                        <div className="row p-3 pt-0 mt-0 m-3" >
                            <div className="col-lg-6 col-md-6">
                                <img src={Image4} className="img-fluid" alt="feature"/>
                            </div>
                            <div className="col-lg-6 col-md-6 pt-3 text-center  mb-4 mb-lg-0">
                                <h2 className="heading__finiata">Safe, trusted, private</h2>
                                <p className="paragraph__finiata pt-4">Privacy is always non-negotiable for us. We don’t track any personal data on your visitors, and data security is uppermost for us.</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            {/* How finiata works */}
            <div className="finata pt-5 mt-5">
                <h3 className="text-center text-muted">How Know works</h3>
                <h3 className="mx-auto text-center font-monserrat-h3-how pt-2">We make it easy for your audience to find your other social profiles, ecommerce stores, or content you want to share, from your favourite platforms and present it on one page. </h3>
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-lg-4 col-md-4">
                           <div className="container column-container">
                             <img src={Onboarding} className="img-fluid" style={{width:120}} alt="onboarding"/>
                             <span className="span-text"><strong style={{color:'blue'}}>1</strong></span>
                             <h4 className="font-weight-bold mb-4">Sign up</h4>
                             <p className="text-center paragraph__finiata ">Create an account for connecting your audience to your entire online world and other information. </p>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                           <div className="container column-container">
                             <img src={RequestOffer} className="img-fluid" style={{width:120}} alt="onboarding"/>
                             <span className="span-text"><strong style={{color:'blue'}}>2</strong></span>
                             <h4 className="font-weight-bold mb-4">Add content</h4>
                             <p className="text-center paragraph__finiata ">Select your link cards from loads of different options and then import your content. </p>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                           <div className="container column-container">
                             <img src={CashFlow} className="img-fluid" style={{width:120}} alt="onboarding"/>
                             <span className="span-text"><strong style={{color:'blue'}}>3</strong></span>
                             <h4 className="font-weight-bold mb-4">Share</h4>
                             <p className="text-center paragraph__finiata ">Share your link or QR code with your audience or get your Know business card to maximize the effectiveness. </p>
                           </div>
                        </div>
                    </div>
                    <div className="mt-5 " style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'center'}}>
                        <button className="btn-finiata-1">GET STARTED NOW</button>
                    </div>
                </div>
            </div>
            {/* Pricing */}
            <div className="pricing">
                <div className="container pricing-container">
                    <h5 className="text-center text-white">Pricing</h5>
                    <h3 className="text-center font-monserrat-h3 pt-2">Get paid today</h3>
                  
                        <div className="row mt-5 pt-2">
                            {/* Free Tier */}
                            <div className="col-lg-4 mb-lg-0 mb-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                                <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>Single User</li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>5GB Storage</li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>Unlimited Public Projects</li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>Community Access</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times" /></span>Unlimited Private Projects</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times" /></span>Dedicated Phone Support</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times" /></span>Free Subdomain</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times" /></span>Monthly Status Reports</li>
                                </ul>
                                <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
                                </div>
                            </div>
                            </div>
                            {/* Plus Tier */}
                            <div className="col-lg-4 mb-lg-0 mb-4">
                            <div className="card mb-5 mb-lg-0">
                                <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                                <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fa fa-check" /></span><strong>5 Users</strong></li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>50GB Storage</li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>Unlimited Public Projects</li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>Community Access</li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>Unlimited Private Projects</li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>Dedicated Phone Support</li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>Free Subdomain</li>
                                    <li className="text-muted"><span className="fa-li"><i className="fa fa-times" /></span>Monthly Status Reports</li>
                                </ul>
                                <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
                                </div>
                            </div>
                            </div>
                            {/* Pro Tier */}
                            <div className="col-lg-4 mb-lg-0 mb-4">
                            <div className="card">
                                <div className="card-body">
                                <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                                <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                                <hr />
                                <ul className="fa-ul">
                                    <li><span className="fa-li"><i className="fa fa-check" /></span><strong>Unlimited Users</strong></li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>150GB Storage</li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>Unlimited Public Projects</li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>Community Access</li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>Unlimited Private Projects</li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>Dedicated Phone Support</li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span><strong>Unlimited</strong> Free Subdomains</li>
                                    <li><span className="fa-li"><i className="fa fa-check" /></span>Monthly Status Reports</li>
                                </ul>
                                <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
                                </div>
                            </div>
                            </div>
                        </div>
                   

                </div>
                
            </div>
            {/* Customer Review */}
            <div className="customer__review">
                    <div className="container customer__review__container">
                        <h3 className="text-center font-monserrat-h3 pt-2">Customer review</h3>                  
                    </div>
                    <div className="container-fluid pb-5 ">
                    <Carousel >
                        <Carousel.Item>
                        <div className="ml-1 " style={{display:'flex',flexDirection:'row',width:'100%'}}>
                            <div className="col p-0 m-0 mr-lg-0 mr-1 ">
                                <div className="review__contianer shadow ">
                                    <div className="row p-4 ml-1" >
                                            <i className="fa fa-quote-left text-primary"></i>
                                            <span className="customer__name">Peter Morgan</span>
                                        <p className="customer__reviews align-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, culpa? Dicta illum eius perferendis placeat odit!</p>
                                        <div style={{width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                            <span style={{fontSize:'0.9rem',fontWeight:'600'}}>Trustpilot</span>
                                            <span style={{fontSize:'0.9rem',fontWeight:'500'}}>Review <strong style={{color:'purple'}}>5/5</strong></span>
                                        </div>
                                    </div>
                                    
                                </div>  
                            </div>
                            <div className="col p-0 m-0 mr-lg-0 mr-1 ">
                                <div className="review__contianer shadow ">
                                    <div className="row p-4 ml-1" >
                                            <i className="fa fa-quote-left text-primary"></i>
                                            <span className="customer__name">Peter Morgan</span>
                                        <p className="customer__reviews align-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, culpa? Dicta illum eius perferendis placeat odit!</p>
                                        <div style={{width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                            <span style={{fontSize:'0.9rem',fontWeight:'600'}}>Trustpilot</span>
                                            <span style={{fontSize:'0.9rem',fontWeight:'500'}}>Review <strong style={{color:'purple'}}>5/5</strong></span>
                                        </div>
                                    </div>
                                    
                                </div>  
                            </div>
                            <div className="col p-0 m-0 mr-lg-0 mr-1 ">
                                <div className="review__contianer shadow ">
                                    <div className="row p-4 ml-1" >
                                            <i className="fa fa-quote-left text-primary"></i>
                                            <span className="customer__name">Peter Morgan</span>
                                        <p className="customer__reviews align-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, culpa? Dicta illum eius perferendis placeat odit!</p>
                                        <div style={{width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                            <span style={{fontSize:'0.9rem',fontWeight:'600'}}>Trustpilot</span>
                                            <span style={{fontSize:'0.9rem',fontWeight:'500'}}>Review <strong style={{color:'purple'}}>5/5</strong></span>
                                        </div>
                                    </div>
                                    
                                </div>  
                            </div>
                            <div className="col p-0 m-0 mr-lg-0 mr-1 ">
                                <div className="review__contianer shadow ">
                                    <div className="row p-4 ml-1" >
                                            <i className="fa fa-quote-left text-primary"></i>
                                            <span className="customer__name">Peter Morgan</span>
                                        <p className="customer__reviews align-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, culpa? Dicta illum eius perferendis placeat odit!</p>
                                        <div style={{width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                            <span style={{fontSize:'0.9rem',fontWeight:'600'}}>Trustpilot</span>
                                            <span style={{fontSize:'0.9rem',fontWeight:'500'}}>Review <strong style={{color:'purple'}}>5/5</strong></span>
                                        </div>
                                    </div>
                                    
                                </div>  
                            </div>
                            
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="ml-1" style={{display:'flex',flexDirection:'row',width:'100%'}}>
                        <div className="col p-0 m-0 mr-lg-0 mr-1 ">
                                <div className="review__contianer shadow ">
                                    <div className="row p-4 ml-1" >
                                            <i className="fa fa-quote-left text-primary"></i>
                                            <span className="customer__name">Peter Morgan</span>
                                        <p className="customer__reviews align-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, culpa? Dicta illum eius perferendis placeat odit!</p>
                                        <div style={{width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                            <span style={{fontSize:'0.9rem',fontWeight:'600'}}>Trustpilot</span>
                                            <span style={{fontSize:'0.9rem',fontWeight:'500'}}>Review <strong style={{color:'purple'}}>5/5</strong></span>
                                        </div>
                                    </div>
                                    
                                </div>  
                            </div>
                            <div className="col p-0 m-0 mr-lg-0 mr-1 ">
                                <div className="review__contianer shadow ">
                                    <div className="row p-4 ml-1" >
                                            <i className="fa fa-quote-left text-primary"></i>
                                            <span className="customer__name">Peter Morgan</span>
                                        <p className="customer__reviews align-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, culpa? Dicta illum eius perferendis placeat odit!</p>
                                        <div style={{width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                            <span style={{fontSize:'0.9rem',fontWeight:'600'}}>Trustpilot</span>
                                            <span style={{fontSize:'0.9rem',fontWeight:'500'}}>Review <strong style={{color:'purple'}}>5/5</strong></span>
                                        </div>
                                    </div>
                                    
                                </div>  
                            </div>
                            <div className="col p-0 m-0 mr-lg-0 mr-1 ">
                                <div className="review__contianer shadow ">
                                    <div className="row p-4 ml-1" >
                                            <i className="fa fa-quote-left text-primary"></i>
                                            <span className="customer__name">Peter Morgan</span>
                                        <p className="customer__reviews align-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, culpa? Dicta illum eius perferendis placeat odit!</p>
                                        <div style={{width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                            <span style={{fontSize:'0.9rem',fontWeight:'600'}}>Trustpilot</span>
                                            <span style={{fontSize:'0.9rem',fontWeight:'500'}}>Review <strong style={{color:'purple'}}>5/5</strong></span>
                                        </div>
                                    </div>
                                    
                                </div>  
                            </div>
                            <div className="col p-0 m-0 mr-lg-0 mr-1 ">
                                <div className="review__contianer shadow ">
                                    <div className="row p-4 ml-1" >
                                            <i className="fa fa-quote-left text-primary"></i>
                                            <span className="customer__name">Peter Morgan</span>
                                        <p className="customer__reviews align-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, culpa? Dicta illum eius perferendis placeat odit!</p>
                                        <div style={{width:'80%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                            <span style={{fontSize:'0.9rem',fontWeight:'600'}}>Trustpilot</span>
                                            <span style={{fontSize:'0.9rem',fontWeight:'500'}}>Review <strong style={{color:'purple'}}>5/5</strong></span>
                                        </div>
                                    </div>
                                    
                                </div>  
                            </div>

                            
                        </div>
                        </Carousel.Item>
                    
                    </Carousel>
                    </div>
            </div>
            {/* Footer */}
            <Footer />
        </>
    )
}
