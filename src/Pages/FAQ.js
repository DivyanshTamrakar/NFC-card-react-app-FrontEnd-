import React from 'react';
import './FAQ.css';
import {Accordion,Card } from 'react-bootstrap';
import NavbarTop from '../components/NavbarTop';
import Footer from '../components/Footer';

export default function FAQ() {
    return (
        <>
           <NavbarTop/>
            {/* FAQ */}
                <div className="faq">
                    <div className="container pt-5">
                        <h5 className="text-center mb-3">F.A.Q</h5>
                        <h2 className="text-center">Frequently Asked Questions</h2>
                        <hr className="w-25" style={{backgroundColor:"#FF6400",height:'0.2rem'}} />
                        <br/>
                        <p className="p-3">
                            Below, we answer some the most frequently asked Questions on our platform
                        </p>
                        <div className="row pb-5">
                        
                        <ul style={{listStyle:'none'}} id="accordion" className="col-sm-6 col-md-12">
                        <Accordion defaultActiveKey="0" >
                            <li>
                                <Accordion.Toggle as={Card.Header} eventKey="0" >
                                    <strong>Can I change my username?</strong>
                                    <span className="fa fa-chevron-down fa-1x text-info pull-right" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0" className="bg-white">
                                    <div className="card-body">
                                        <ul>
                                            <li>One can make a choice of their own customer username on the initial sign up page when registering for their Know account</li>
                                            <li>Unfortunately, once you have signed up to an account you are unable to customize your username or URL beyond this.</li>
                                            <p className="mt-3">Please note: If you would like to use a new username you will need to create a new Know. You can use the same email as long as the username is different.</p>
                                        </ul>
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <strong>I am not receiving Know related emails </strong>
                                    <span className="fa fa-chevron-down fa-1x text-info pull-right" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1" className="bg-white">
                                    <div className="card-body">
                                    In the event one is not getting Know emails they can sort the issue by:
                                    <ol className="mt-3">
                                        <li>Ensuring you have not received the email in your Junk, Spam, Social, Promotional, or in your email's spam or Promotions (for Gmail) folders.  If you found the email in these folders, mark them as "not spam" to make sure you receive future emails in your inbox.</li>
                                        <li>There can be delays in receiving emails hence refresh your email inbox. </li>
                                        <li>Ensuring they update their contact details by checking on the spelling of their email or considering the use of another email address. </li>
                                        <li>Confirming with your I.T or email provider whether emails are blocked since reception of your emails outside your organization might not be allowed.</li>
                                        <li>The verification email sent is active for 72hours. In the event of expiry click the 'Resend Verification Link' button and a fresh link will be sent to you.</li>
                                        <li>Contacting Know Support by clicking on 'Submit a ticket'</li>
                                    </ol>
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                               <strong>
                               	I can't access the email associated with my Know account 
                               </strong>
                                <span className="fa fa-chevron-down fa-1x text-info pull-right" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2" className="bg-white">
                                    <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                <strong>
                                How can I file a complaint?
                                </strong>
                                <span className="fa fa-chevron-down fa-1x text-info pull-right" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3" className="bg-white">
                                    <div className="card-body">
                                    Steps one can follow when having trouble accessing the email associated with your existing Know account:
                                    <ol className="mt-3">
                                        <li>Contact Know Support directly when there is need to recover your Know account. Submit a ticket via the Know Support Page by selecting "Submit a ticket".</li>
                                        <li>Include your Know URL, username, any existing and previous email addresses</li>
                                    </ol>
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                <strong>
                                Can I have multiple Know using the same email address?
                                </strong>
                                <span className="fa fa-chevron-down fa-1x text-info pull-right" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4" className="bg-white">
                                    <div className="card-body">
                                    One cannot have multiple Know while making use of the same email address. 
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                <strong>
                                Why aren't my links showing up?
                                </strong>
                                <span className="fa fa-chevron-down fa-1x text-info pull-right" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5" className="bg-white">
                                    <div className="card-body">
                                    There are a number of reasons that result to ones’ links not working and one needs to identify the problem first. Your links may fail to work because of a number of reasons hence need to identify the problem first. 
                                    <ul className="mt-3">
                                        <li>A grey toggle, instead of green, next to your link indicates some information is missing hence need to fix it so that the link can get active and appear on your Know.</li>
                                        <li>Each new link must have information in the ‘Title’ field and a working URL.</li>
                                        <li>Check your spelling to make sure that the link URL is working.</li>
                                        <li>A link that is marked as ' Unsafe URL' indicates a problem with your URL.</li>
                                        <li>One needs to ensure they have entered a valid URL by checking on the spelling and ensuring the link is working. </li>
                                        <li>The URL must not have any special characters or space before, within, or after the URL</li>
                                        <li>Certain links are not supported by Know for security measures. Get in touch with our team if you think this is case.</li>
                                        <li>Getting a security error from Google when one clicks one of the links indicates that one added an 'S' to the HTTP at the start of their link.</li>
                                    </ul>
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li>
                                <Accordion.Toggle as={Card.Header} eventKey="6">
                                <strong>
                               	How do I delete my Know account?
                                </strong>
                                <span className="fa fa-chevron-down fa-1x text-info pull-right" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="6" className="bg-white">
                                    <div className="card-body">
                                    Tip: One having a PRO subscription should cancel their subscription first prior to deleting their account. 
                                    <p className="mt-3">How to delete your Know account</p>
                                    <ol className="mt-2">
                                        <li>Logging in to your Know account.</li>
                                        <li>Clicking on your profile pic in the bottom left of the screen.</li>
                                        <li>Clicking on 'My Account'.</li>
                                        <li>Scrolling down to the bottom of the page and click the 'Delete Account' button</li>
                                       
                                    </ol>
                                    <p className="mt-2">
                                    Please note: <br/>
                                        <strong>Deleting your account is irreversible.</strong><br/>
                                        Your Know URL gets deactivated. There is no means of recovering your Know data or reactivating your account hence when need arises to use Know after deleting they must sign up again.

                                    </p>
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li>
                                <Accordion.Toggle as={Card.Header} eventKey="7">
                                <strong>
                                What happens if I change my Instagram handle?
                                </strong>
                                <span className="fa fa-chevron-down fa-1x text-info pull-right" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="7" className="bg-white">
                                    <div className="card-body">
                                    Changing ones Instagram handle doesn't curb one from accessing their existing Know account. However, there is need to create a new Know account since your Know bio link will not update to your new Instagram handle. 
                                    <br/>
                                    <br/>
                                    Signing up to a new Know when having a PRO subscription requires you to cancel your current PRO subscription and deactivate your Know account before you change.
                                    <br/>
                                    <br/>
                                    Deleting your Know altogether can be done by:
                                    <ol className="mt-3">
                                        <li>Logging in to Know with your previous Instagram account.</li>
                                        <li>Clicking on your profile pic in the admin section of your older account.</li>
                                        <li>Clicking on 'My Account'.</li>
                                        <li>Scrolling down and clicking ‘Delete Account'.</li>
                                       
                                    </ol>
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li>
                                <Accordion.Toggle as={Card.Header} eventKey="8">
                                <strong>
                                What is Know?
                                </strong>
                                <span className="fa fa-chevron-down fa-1x text-info pull-right" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="8" className="bg-white">
                                    <div className="card-body">
                                    <ul className="mt-3 mb-3">
                                        <li>Know keeps the very important links that one would like to share with their audience.</li>
                                        <li>One can use Know on social platforms like Instagram, TikTok, Twitch, Facebook, YouTube, Twitter or LinkedIn, or you can use it to aid discovery of your work, brand or business. </li>
                                        <li>After setting up your Know and including all your links one copies the unique URL and paste it one the social media platforms you want.</li>
                                       
                                    </ul>
                                    <h5>Free or Pro?</h5>
                                    <ul className="mt-3 mb-3">
                                        <li>Know has two tiers - a free version and a paid monthly subscription. The free version includes features like basic theme customization of your profile, and link click statistics (so you can view how many people have clicked your links). </li>
                                        <li>Know PRO is $6USD a month and allows one to have many more features, like fully-customizable backgrounds, button colors and styles, social icons and access to features like Leap Links.  </li>
                                        
                                    </ul>
                                    <h5>Views and clicks chart</h5>
                                    <ul className="mt-3 mb-3">
                                        <li>The chart present at the top of the Links tab in your Know admin indicates the lifetime views one has in their Know. One who’s a PRO user, can also get to know their lifetime clicks along with unique views, views and clicks per day. </li>
                                        
                                    </ul>
                                    <h5>What are 'Views' and 'Clicks'?</h5>
                                    <ul className="mt-3 mb-3">
                                        <li>Total Views - The number of times your Know is viewed and URL is clicked.</li>
                                        <li>Unique Views - Indicates the number of different times your Know URL has been clicked.</li>
                                        <li>Total Clicks - A click comes by when a visitor clicks on one of your links. This chart shows the total amount of clicks across all of your links.</li>
                                        <li>Unique Clicks - Indicates the number of individual visitors who have clicked on one or more of your Know links. </li>
                                        
                                    </ul>
                                    <h5>What is 'CTR'?</h5>
                                    <ul className="mt-3 mb-3">
                                        <li>CTR serves as the abbreviation of Click Through Rate. </li>
                                        <li>This measures the performance of your links by showing one the percentage of views that come about in a clicked link.</li>
                                        <li>If your CTR is 52%, then 52% of your views resulted in a click of one of your links.</li>
                                        <li>CTR is obtained by dividing the number of clicks by how many views your profile has received. </li>
                                        
                                    </ul>
                                    <h5>CTR on the Clicks and Views Chart</h5>
                                    <ul className="mt-3">
                                        <li>The CTR at the top of the chart, is ones lifetime average CTR.</li>
                                        <li>It shows your total lifetime clicks divided by your total lifetime views.</li>
                                        <li>The blue line on the chart, represents your daily CTR. That is your total clicks for that day divided by the total views for that day. This is a great way to measure the performance of your links on a daily basis. </li>
                                        
                                    </ul>
                                    </div>
                                </Accordion.Collapse>
                            </li>
                      
                        </Accordion>
                          
                        </ul>
                        </div>

                    </div>
                </div>
            {/* Footer */}
            <Footer />
        </>
    )
}
