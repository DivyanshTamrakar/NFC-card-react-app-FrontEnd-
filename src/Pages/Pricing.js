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
                        <div className="d-flex flex-row justify-content-between align-items-baseline mt-0"> <span className="font-weight-bold">Starter</span>
                            <div className="price d-flex flex-row align-items-center"> <span className="margins">$</span> <span className="amount">109</span> <span className="margins">/month</span> </div>
                        </div> <button className="btn btn-outline-primary btn-block outline-button">Get started</button>
                        </td>
                        <td>
                        <div className="d-flex flex-row justify-content-between align-items-baseline mt-0"> <span className="font-weight-bold">Advanced</span>
                            <div className="price d-flex flex-row align-items-center"> <span className="margins">$</span> <span className="amount">125</span> <span className="margins">/month</span> </div>
                        </div> <button className="btn btn-primary btn-block normal-button">Get started</button>
                        </td>
                        <td>
                        <div className="d-flex flex-row justify-content-between align-items-baseline mt-0"> <span className="font-weight-bold">Ultimate</span>
                            <div className="price d-flex flex-row align-items-center"> <span className="margins">$</span> <span className="amount">349</span> <span className="margins">/month</span> </div>
                        </div> <button className="btn btn-outline-primary btn-block outline-button">Get started</button>
                        </td>
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Retail Point of sale</span> <span className="font-weight-light">Streamline your everday</span> </th>
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
                        <th scope="row"> <span className="d-block">Payments</span> <span className="font-weight-light">Store on credit card rates</span> </th>
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
                        <th scope="row"> <span className="d-block">Accounting</span> <span className="font-weight-light">Connect to quickbook online</span> </th>
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
                        <th scope="row"> <span className="d-block">Analytics</span> <span className="font-weight-light">Get insight to grow your business</span> </th>
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
                        <th scope="row"> <span className="d-block">Ecommerce Website</span> <span className="font-weight-light">Create beautiful websites</span> </th>
                        <td> </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                       
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Loyalty</span> <span className="font-weight-light">Get your customers to come back</span> </th>
                        <td> </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        <td>
                        <div className="text-center check"> <i className="fa fa-check" /> </div>
                        </td>
                        
                        
                    </tr>
                    <tr>
                        <th scope="row"> <span className="d-block">Dedicated marketing manager</span> <span className="font-weight-light">Get help marketing your business</span> </th>
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
