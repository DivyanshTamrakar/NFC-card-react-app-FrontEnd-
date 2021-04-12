import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink,useHistory} from 'react-router-dom';

export default function DashNav() {
    const history = useHistory();
    const signout=()=>{
        localStorage.clear();
        history.push("/");
    }
    return (
        <Navbar expand="lg" className="w-100 nav-height " style={{zIndex:100}}>
            <Navbar.Brand href="#greetings"><span style={{fontWeight:'600',fontSize:'1.18rem'}}>The Know Card</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="no-outline" />
            <Navbar.Collapse id="basic-navbar-nav desktop-hide" style={{zIndex:1}} className="bg-white">
            <Nav className="mr-auto desktop-hide p-3">
            <NavLink to="/admin" exact activeClassName="active" className="text-decoration-none pt-2 pb-2" ><i className="bi bi-person text-dark mr-2" style={{fontSize:'1.8rem'}}></i> <strong  style={{fontSize:'1.2rem',color:'#000',fontWeight:'500'}}>Contact Card</strong></NavLink>
            <NavLink to="/admin/contact-card" exact activeClassName="active" className="text-decoration-none  pt-2 pb-2" ><i className="bi bi-link-45deg text-dark mr-3" style={{fontSize:'1.8rem'}}></i><strong style={{fontSize:'1.2rem',color:'#000',fontWeight:'500'}}>Links Card</strong></NavLink>
            <NavLink to="/admin/analytics" exact activeClassName="active" className="text-decoration-none  pt-2 pb-2" ><i className="bi bi-graph-up text-dark mr-3" style={{fontSize:'1.8rem'}} ></i><strong style={{fontSize:'1.2rem',color:'#000',fontWeight:'500'}}>Analytics</strong></NavLink>                  
            <NavLink to="/admin/account" exact activeClassName="active" className="text-decoration-none mt-1 pt-2 pb-2" ><i className="bi bi-gear-wide-connected text-dark mr-3" style={{fontSize:'1.8rem',verticalAlign:'-.120em'}}></i><strong style={{fontSize:'1.2rem',color:'#000',fontWeight:'500'}}>My Account</strong></NavLink>
            <NavLink to="/contact-us" exact activeClassName="active" className="text-decoration-none mt-1 pt-2 pb-2" ><i className="bi bi-question text-dark mr-3" style={{fontSize:'1.8rem',verticalAlign:'-.120em'}}></i><strong style={{fontSize:'1.2rem',color:'#000',fontWeight:'500'}}>Support</strong></NavLink>
            <div className="pt-2 pb-2" onClick={signout}>
                <i className="bi bi-box-arrow-right text-dark ml-1 mr-3 " style={{fontSize:'1.8rem',verticalAlign:'-.120em',cursor:'pointer'}} ></i><strong style={{fontSize:'1.2rem',color:'#000',fontWeight:'500'}}>Logout</strong>
            </div> 
            </Nav>        
            </Navbar.Collapse>
        </Navbar>  
    )
}
