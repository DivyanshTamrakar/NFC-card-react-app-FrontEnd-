import React from 'react';
import './Home.css';
import {Carousel } from 'react-bootstrap';
import Image1 from '../assets/1.png';
import Image2 from '../assets/2.png';
import Image3 from '../assets/3.png';
import Image4 from '../assets/4.png';
import Green from '../assets/green.png';
import Blue from '../assets/blue.png';
// Masthead
import Logo from '../assets/image-logo.png';
import MastHead from '../assets/motion.gif';
import NavbarTop from '../components/NavbarTop';
import Footer from '../components/Footer';


export default function Home() {
    
    

    return (
        <>
           <NavbarTop/>
            
            {/* Header */}
            <div  className=" jumbotron bg-image">
               <img src={MastHead} className="masthead-image" alt="Masthead" />
                <div className="container heading-content  mt-lg-0 text-center" >
                <h1 className="text-center font-monserrat pt-2"><img src={Logo} style={{width:'13rem',paddingBottom:'1rem'}} alt="Logo" /> better.</h1> 
                    <p className="font-p mt-3">The easiest and safest way to connect.</p>
                    <center><i className="fa fa-angle-down angle-icon"></i></center>
                </div>
               
            </div>
            {/* Finata Section */}
            <div className="finata pt-lg-3 padding-top-10">
                <h2 className="text-center font-monserrat-h2">Things you should know… </h2>
                <div className="row  m-0">
                    <div className="container-fluid" >
                        <div className="row "  >
                            <div className="col-lg-6 col-md-6 py-5 my-5 pl-lg-5 pr-lg-5 pt-0 text-center mb-4 mb-lg-0" >
                                <h2 className="heading__finiata pt-lg-5 mt-lg-5">Contactless, boundless possibilities.</h2>
                                <p className="paragraph__finiata pt-4">
                                We’re the nexus between you and the people; we act as a centralized hub to your online videos, articles, photos, stores, websites, social platforms, and many other details you like to share. Choose from various categories and add your content. Once ready, you can share your profile in your social bio, in video meetings, or as an email signature, etc.
                                </p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <img src={Image1} className="finata-img" alt="feature"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="container-fluid">
                        <div className="row" >
                            <div className="col-lg-6 col-md-6">
                                <img src={Image2} className="finata-img" alt="feature"/>
                            </div>
                            <div className="col-lg-6 col-md-6 py-5 my-5 pl-lg-5 pr-lg-5 pt-5  text-center mb-4 mb-lg-0">
                                <h2 className="heading__finiata pt-lg-5 mt-lg-5">Track your interactions</h2>
                                <p className="paragraph__finiata pt-4">Going digital comes with a suite of benefits once we rethink the way we connect with people. Access in-depth analytics of your visitor’s demographics every day in a simple to use dashboard. Also, with clicks, views, locations, referrers, devices insights, and much more data points to find out which link is performing best to support your goals. </p>
                            </div>
                           
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="row  m-0">
                    <div className="container-fluid">
                        <div className="row" >
                            <div className="col-lg-6 col-md-6 py-5 my-5 pl-lg-5 pr-lg-5 pt-0  text-center mb-4 mb-lg-0">
                                <h2 className="heading__finiata pt-lg-5 mt-lg-5">Your card in the physical world.</h2>
                                <p className="paragraph__finiata pt-4">We’re living in a mobile-first age where printing contact information on a piece of paper is counter-intuitive. Your Know profile doesn’t need to just live online, with our digital business card share your details with just a tap on any smartphone. So, more time nurturing connections and less time searching for paper cards at the bottom of your bag. No app needed!</p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <img src={Image3} className="finata-img" alt="feature"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="container-fluid">
                        <div className="row" >
                            <div className="col-lg-6 col-md-6">
                                <img src={Image4} className="finata-img" alt="feature"/>
                            </div>
                            <div className="col-lg-6 col-md-6  py-5 my-5 pl-lg-5 pr-lg-5 pt-4 text-center  mb-4 mb-lg-0">
                                <h2 className="heading__finiata pt-lg-5 mt-lg-5">Safe, trusted, private</h2>
                                <p className="paragraph__finiata pt-4">We are founded on the principle that you have a right to privacy — you should get to decide where, how, and with whom your information is shared. That’s why Know is built with control, security, and transparency in mind. Also, we don’t track any personal data on your visitors and follow GDPR guidelines.
</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            {/* How finiata works */}
            <div className="finata pt-5 mt-5">
            <img src={Blue} className="confettie-blue" alt="Confettie" />
            <img src={Green} className="confettie-green" alt="Confettie" />
            <h3 className="text-center font-monserrat-h3 pt-2"> How <img src={Logo} style={{width:'10rem',paddingBottom:'1rem'}} alt="Logo" /> works?</h3> 
                <h3 className="mx-auto text-center font-monserrat-h3-how pt-2">Let's get you started in three simple steps for the future of connecting.</h3>
                <div className="container-fluid">
                    <div className="row pt-5">
                        <div className="col-lg-4 col-md-4">
                           <div className="container column-container">
                           <div className="red-box">
                                 <span>1</span>
                             </div>
                             <h4 className="font-weight-bold mb-4 mt-4">Sign up</h4>
                             <p className="text-center paragraph__finiata ">Create an account for connecting people to your entire online world and other details you like to share.</p>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                           <div className="container column-container">
                           <div className="orange-box">
                                 <span>2</span>
                             </div>
                             <h4 className="font-weight-bold mb-4 mt-4">Add content</h4>
                             <p className="text-center paragraph__finiata ">Import your links and details by selecting from various categories - videos, articles, stores, social platforms.</p>
                           </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                           <div className="container column-container">
                             <div className="yellow-box">
                                 <span>3</span>
                             </div>
                             
                             <h4 className="font-weight-bold mb-4 mt-4">Share</h4>
                             <p className="text-center paragraph__finiata ">Once your profile is ready, share your link or QR code with your audience digitally or get your Know business card to connect more efficiently.</p>
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
                   
                    <h3 className="text-center font-monserrat-h3 pt-2"> <img src={Logo} style={{width:'10rem'}} alt="Logo" /> the pricing</h3> 
                        <center><p style={{fontSize:'1.2rem'}}>Pick your plan, you can always change later.</p></center>   
                    
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
                        <h3 className="text-center font-monserrat-h3 pt-2"> <img src={Logo} style={{width:'10rem'}} alt="Logo" /> the community</h3> 
                        <center><p style={{fontSize:'1.2rem'}}>The world's biggest content creators, influencers and brands are benefitting from Know, high time you should try it too. </p></center>                 
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
