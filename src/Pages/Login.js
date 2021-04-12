import React,{useState,useEffect} from 'react';
import './Login.css';
import {Navbar} from 'react-bootstrap';
import Logo from '../assets/Logo.png';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {URL} from '../config/config';

export default function Login() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const [error,setErrorMessage] = useState("");
    const [disabled,setDisabled] = useState(false);
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('app-access-token')!=null){
            history.push("/admin");
         }
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
                 password:password
            })
        };
       
        fetch(`${URL}/users/signin`, requestOptions)
        .then(response => (response.status === 401)?(response.statusText):( response.json()))
        .then(data => (data === "Unauthorized")?(setErrorMessage("Invalid email id or password!"),setDisabled(false)):(
            setErrorMessage(""),
            localStorage.setItem("app-access-token",data.token),
            history.push('/admin')           
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
                    <h2 className="text-center">Sign in to your KnowCard account</h2>
                   
                </div>
                {
                    (error !== "")?(
                        <div className="container mb-3" style={{backgroundColor:"#FF4F4F",borderRadius:5}}>
                            <h6 className="text-center p-3 text-white" style={{fontSize:'0.9rem'}} >{error}!</h6>
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
                     <label htmlFor="inputPassword">Password</label>
                    <input type="password" className="form-control" name="password"  onChange={(event)=>setPassword(event.target.value)} id="inputPassword" placeholder="Password" />
                </div>
                
                <button type="submit" className="btn btn-custom-login" disabled={disabled}>Login</button>
                </form>
                <div className="forgot">
                    <Link exact to="/forgot-password" style={{textDecoration:'none'}} >Forgot password?</Link>
                </div>
            </div>
            </div>

        </>
    )
}
