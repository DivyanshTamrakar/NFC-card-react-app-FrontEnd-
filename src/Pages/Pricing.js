import React from 'react';
import './Pricing.css';
import NavbarTop from '../components/NavbarTop';
import Footer from '../components/Footer';

export default function Pricing() {
    return (
        <>
            <NavbarTop/>
            {/* Pricing Start */}
                <h1 className="text-center display-4 mt-4 p-2">One link with a whole lot of power</h1>
                <h5 className="text-center mt-1 p-2">Pick your plan, you can always change later.</h5>
                <div className="container-fluid p-5 pt-0 mt-4" >
                    <table className="table bg-white table-bordered">
                    <tbody>
                    <tr>
                        <th scope="column"><span className="font-weight-bold">Pick a Plan</span></th>
                        <td>
                        <div className="d-flex flex-row justify-content-between align-items-baseline mt-0"> <span className="font-weight-bold">Lite</span>
                            <div className="price d-flex flex-row align-items-center"> <span className="margins">$</span> <span className="amount">109</span> <span className="margins">/month</span> </div>
                        </div> <button className="btn btn-outline-primary btn-block outline-button">Get started</button>
                        </td>
                        <td>
                        <div className="d-flex flex-row justify-content-between align-items-baseline mt-0"> <span className="font-weight-bold">Plus</span>
                            <div className="price d-flex flex-row align-items-center"> <span className="margins">$</span> <span className="amount">125</span> <span className="margins">/month</span> </div>
                        </div> <button className="btn btn-primary btn-block normal-button">Get started</button>
                        </td>
                        <td>
                        <div className="d-flex flex-row justify-content-between align-items-baseline mt-0"> <span className="font-weight-bold">Pro</span>
                            <div className="price d-flex flex-row align-items-center"> <span className="margins">$</span> <span className="amount">349</span> <span className="margins">/month</span> </div>
                        </div> <button className="btn btn-outline-primary btn-block outline-button">Get started</button>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <h3 className="d-block">Links & Buttons</h3> <span className="font-weight-light"></span> </th>
                       
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Phone number </span> <span className="font-weight-light">Know allows you to add your phone number </span> </th>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Location</span> <span className="font-weight-light">Know allows you to know the location of your subscribers.</span> </th>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                       
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Unlimited Links</span> <span className="font-weight-light">Know allows one to add unlimited links</span> </th>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Social Icons</span> <span className="font-weight-light">Know allows one to have access to different social media icons like twitter and Facebook</span> </th>
                        <td> </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                       
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">QR Code</span> <span className="font-weight-light">Sharing can be done offline with QR codes</span> </th>
                        <td> </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Send a message</span> <span className="font-weight-light">Know allows one to send direct texts.</span> </th>
                        <td> </td>
                        <td> </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <h3 className="d-block">Analytics</h3> <span className="font-weight-light"></span> </th>
                       
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Views</span> <span className="font-weight-light">Get informed how much traffic your Know gets Daily, weekly + totals</span> </th>
                        <td> </td>
                        <td> </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Link Clicks</span> <span className="font-weight-light">View the links that are clicked and when Daily, Weekly + totals</span> </th>
                        <td> </td>
                        <td> </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Click Through Rate</span> <span className="font-weight-light">Comprehend the performance of links</span> </th>
                        <td> </td>
                        <td> </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Unique Clicks & Views</span> <span className="font-weight-light">Know the number of visitors that have clicked or viewed your profile </span> </th>
                        <td> </td>
                        <td> </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Location & Referrer</span> <span className="font-weight-light">Enables discovery of countries, cities and websites resulting to the most traffic in your Know </span> </th>
                        <td> </td>
                        <td> 
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Devices</span> <span className="font-weight-light">Enables discovery of devices that result to the most traffic in your Know Social Icons</span> </th>
                        <td> </td>
                        <td> 
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Subscribers details and CSV list</span> <span className="font-weight-light">Know allows one get the details of those who subscribe</span> </th>
                        <td> </td>
                        <td> 
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block"> Direct messages</span> <span className="font-weight-light">Get SMS subscribers directly from your Know and market to them through text</span> </th>
                        <td> </td>
                        <td> 
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Social Icon Analytics </span> <span className="font-weight-light">Increase ease in discovery of your social platforms </span> </th>
                        <td> </td>
                        <td> 
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Download Your Data</span> <span className="font-weight-light">Download your data to CSV file to allow maximum analysis SMS Link</span> </th>
                        <td> </td>
                        <td> 
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <h3 className="d-block">Customization</h3> <span className="font-weight-light"></span> </th>
                      
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Intro photo/video</span> <span className="font-weight-light">Allows one to put a photo or video</span> </th>
                        <td> </td>
                        <td> </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Profile photo</span> <span className="font-weight-light">Allows one to introduce a photo</span> </th>
                        <td> </td>
                        <td> </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Bio Description</span> <span className="font-weight-light">A short bio description that aids your visitors get better and more understanding of you</span> </th>
                        <td> </td>
                        <td> </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Occupation </span> <span className="font-weight-light">Know allows one to identify the job done by another</span> </th>
                        <td> </td>
                        <td> </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>

                    <tr>
                        <th scope="row"> <span className="d-block">Custom link card & icons </span> <span className="font-weight-light">Know allows one to identify the job done by another</span> </th>
                        <td> </td>
                        <td> 
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                         
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Free replacement card </span> <span className="font-weight-light">Know allows one to identify the job done by another</span> </th>
                        <td> </td>
                        <td> </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                    </tr>
                    </tbody>
                </table>
                </div>
               
                <h5 className="text-center p-2">Are you a business or agency with many social handles? Talk to us about our enterprise plans.</h5>
                <div className="p-4" style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'center'}}>
                    <button className="btn-finiata">Know Card for Enterprise</button>
                </div>

            {/* Pricing End */}
            {/* Footer */}
            <Footer/>
        </>
    )
}
