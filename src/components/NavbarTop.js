import React,{useEffect,useState} from 'react';
import './Navbar.css';
import {Navbar,Nav } from 'react-bootstrap';
import Logo from '../assets/Logo.png';
import LogoHover from '../assets/Logo-name.png';
import {  Link,useHistory } from 'react-router-dom';

export default function NavbarTop() {
    const [logo,setLogo]=useState(Logo);
    const [loggedin,setLoggedIn]=useState(false);
    const [username,setUsername] = useState("My Account");
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('app-access-token')===null){
            setLoggedIn(false);
            setUsername(localStorage.getItem("username"));
        }
        else{
            setLoggedIn(true);
        }
    }, [])
    return (
        <Navbar  expand="lg" className="navbar__height shadow-sm">
        <Navbar.Brand  className="pl-lg-3">
           <Link to="/">
                <img src={logo} onMouseOver={()=>setLogo(LogoHover)} onMouseOut={()=>setLogo(Logo)} className="navbar__logo" alt="Logo"/>
           </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav bg-white">
            <Nav className="ml-auto pr-lg-3 pt-3 pt-lg-0 pb-lg-0 pb-3  p-4 bg-white " >
                <Nav.Link  className="mr-lg-5 pl-2 nav-text">
                    <Link to="/how-it-works" className="nav-text" style={{textDecoration:'none'}} >
                        How It Works
                    </Link>
                </Nav.Link>
                <Nav.Link  className="mr-lg-5 pl-2 pl-lg-0 mb-2 mb-lg-0 nav-text" >
                    <Link to="/pricing" className="nav-text" style={{textDecoration:'none'}} >
                        Pricing
                    </Link>
                </Nav.Link>
                {
                    (loggedin)?(
                        <>
                            <Nav.Link  className="mr-lg-5 pl-2 pl-lg-0 mb-2 mb-lg-0 nav-text" >
                                <Link to="/admin" className="nav-text" style={{textDecoration:'none'}} >
                                    {username}
                                </Link>
                            </Nav.Link>
                          
                        </>
                       
                    ):(
                        <> 
                            <Nav.Link  className="mr-lg-4 pl-2 pl-lg-0 mb-2 mb-lg-0 nav-text" >
                            <Link to="/signin" className="nav-text" style={{textDecoration:'none'}} >
                                Login
                            </Link>
                            </Nav.Link>
                            <Nav.Link  >
                                <Link to="/signup" className="btn-signupforfree" style={{textDecoration:'none'}} >
                                Sign Up For Free
                                </Link>
                            </Nav.Link>   
                        </>
                    )
                }
            </Nav>
           
        </Navbar.Collapse>
        </Navbar>
    )
}
