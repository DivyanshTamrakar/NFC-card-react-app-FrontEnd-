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
                                    <strong>How often do you upgrade the system ?</strong>
                                    <span className="fa fa-chevron-down fa-1x text-info pull-right" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0" className="bg-white">
                                    <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <strong>Where do I go incase I have a complaint?</strong>
                                    <span className="fa fa-chevron-down fa-1x text-info pull-right" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1" className="bg-white">
                                    <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                               <strong>
                               Do you have any outlets in the country ?
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
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li>
                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                <strong>
                                How can I join the team?
                                </strong>
                                <span className="fa fa-chevron-down fa-1x text-info pull-right" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="4" className="bg-white">
                                    <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                    </div>
                                </Accordion.Collapse>
                            </li>
                            <li>
                                <Accordion.Toggle as={Card.Header} eventKey="5">
                                <strong>
                                In case I forgot my password, what do I do?
                                </strong>
                                <span className="fa fa-chevron-down fa-1x text-info pull-right" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="5" className="bg-white">
                                    <div className="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
