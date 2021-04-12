import React from "react";
import "./Sidebar.css";
import Logo from "../assets/Logo.png";
import {NavLink, useHistory} from 'react-router-dom';

export default function Sidebar() {
  const history = useHistory();
  const signout=()=>{
    localStorage.clear();
    history.push("/");
  }
  
  return (
    <>
    <div className="sidebar">
        <div className="column-flex">       
              <div className="footer-sidebar">
                  <div className="logo">
                      <NavLink to="/admin" exact activeClassName="link-active" className=" p-c-3 pt-1 pb-2"  >
                      <i className="bi bi-person text-dark fa-2x"></i>
                      </NavLink>
                      <NavLink to="/admin/contact-card" exact activeClassName="link-active" className=" mt-1 p-c-3 pt-1 pb-1"  >
                       <i className="bi bi-link-45deg text-dark fa-2x"></i>
                      </NavLink>
                      <NavLink to="/admin/analytics" exact activeClassName="link-active" className="mt-2 p-c-3 pt-1 pb-1"  >
                      <i className="bi bi-graph-up text-dark fa-2x" style={{fontSize:'1.85rem'}} ></i>
                      </NavLink>
                      <NavLink to="/admin/account" exact activeClassName="link-active" className="mt-2  p-c-3 pt-1 pb-1"    >
                      <i className="bi bi-gear-wide-connected text-dark fa-2x"></i>
                      </NavLink>
                    
                      <NavLink to="/contact-us" exact activeClassName="link-active" className="mt-2 p-c-3 pt-1 pb-1"  >
                      <i className="bi bi-question text-dark fa-2x"></i>
                      </NavLink>     
                      <i className="bi bi-box-arrow-right text-dark fa-2x p-c-3 pt-1 pb-1" style={{cursor:'pointer'}} onClick={signout}></i>
                  </div>   
                  <div>
                    <NavLink to="/" exact activeClassName="link-active" >
                      <img src={Logo} className="sidebar__logo" alt=""/>
                    </NavLink>
                  </div>
              </div>
        </div>
    </div>
    </>
  );
}
