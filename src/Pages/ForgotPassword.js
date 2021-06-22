import React,{useState,useEffect} from 'react';
import './Login.css';
import {Navbar} from 'react-bootstrap';
import Logo from '../assets/Logo.png';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {URL} from '../config/config';

export default function Login() {
    const [email,setEmail] = useState("");
    const [cp,setCurrentPassword] = useState("");
    const [np,setPassword] = useState("");
    const [error,setErrorMessage] = useState("");
    const [message,setMessage] = useState("");
    const [disabled,setDisabled] = useState(false);
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('app-access-token')!=null){
            history.push("/admin");
         }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var handleSubmit = (event)=>{
        event.preventDefault();
        setDisabled(true);
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                 email: email,
                 current_password:cp,
                 new_password:np
            })
        };
       
        fetch(`${URL}/users/forgot-password`, requestOptions)
        .then(response => response.json())
        .then(data => (
            (data.status==="200")?(
                setMessage(data.message),
                setDisabled(false)
            ):(
                setErrorMessage(data.message),
                setDisabled(false)
            )
            )
            )
      
       
    }
    return (
        <>
             <Navbar  expand="lg" className="navbar__height " style={{borderBottom:'none'}}>
                <Navbar.Brand  className="pl-lg-3">
                    <Link to="/">
                        <img src={Logo} alt="logo" className="navbar__logo"/>
                    </Link>
                </Navbar.Brand>

            </Navbar>

            <div className="login-form ">
            <div className="main-div ">
                <div className="panel">
                    <h2 className="text-center">Forgot Password ?</h2>
                   
                </div>
                {
                    (error !== "")?(
                        <div className=" alert alert-danger alert-dismissible fade show container mb-3"  role="alert" style={{backgroundColor:"red",borderRadius:5}}>
                            <h6 className="text-center text-white" style={{fontSize:'0.9rem'}} >{error}</h6>
                            <button type="button" class="close text-white" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    ):
                    (
                        <div></div>
                    )
                    
                }
                {
                    (message !== "")?(
                        <div className=" alert alert-success alert-dismissible fade show container mb-3"  role="alert" style={{backgroundColor:"green",borderRadius:5}}>
                            <h6 className="text-center text-white" style={{fontSize:'0.9rem'}} >{message}</h6>
                            <button type="button" class="close text-white" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    ):
                    (
                        <div></div>
                    )
                }
                <form id="Login" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="email" className="form-control" name="email" onChange={(event)=>setEmail(event.target.value)} id="inputEmail" placeholder="Email Address" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">Current Password</label>
                    <input type="password" className="form-control" name="cp" onChange={(event)=>setCurrentPassword(event.target.value)} id="inputEmail" placeholder="Current Password" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputEmail">New Password</label>
                    <input type="password" className="form-control" name="np" onChange={(event)=>setPassword(event.target.value)} id="inputEmail" placeholder="New Password" />
                </div>
                
                <button type="submit" className="btn btn-custom-login mt-3" disabled={disabled}>
                    {(disabled)?(<i className="fa fa-spin fa-refresh mr-2"></i>):("")}
                   Reset Password</button>
                </form>
                <div className="forgot">
                    <Link  to="/signin">Go back to Sign In</Link>
                </div>
            </div>
            </div>

        </>
    )
}
