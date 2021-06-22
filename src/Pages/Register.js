import React,{useState,useEffect} from 'react';
import './Register.css';
import Logo from '../assets/Logo.png';
import LogoHover from '../assets/Logo-name.png';
import {Modal} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import validator from 'validator';
import NavbarTop from '../components/NavbarTop';
// Masthead
import FB  from '../assets/masthead/facebook.png';
import IG  from '../assets/masthead/instagram.png';
import LD  from '../assets/masthead/linkedin.png';
import SP  from '../assets/masthead/shopify.png';
import SN  from '../assets/masthead/snapchat.png';
import ST  from '../assets/masthead/spotify.png';
import TT  from '../assets/masthead/tik-tok.png';
import TI  from  '../assets/masthead/tune-in.png';
import TW  from  '../assets/masthead/twitch.png';
import YT  from  '../assets/masthead/youtube.png';
import {URL} from '../config/config';

export default function Register() {
    const [logo,setLogo]=useState(Logo);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const history = useHistory();
    // 
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [confrim,setConfrim] = useState("");
    const [category,setCategory] = useState("");
    const [disabled,setDisabled] = useState(false);
    const [error,setError] = useState("");

    const [errorMessage, setErrorMessage] = useState('');
    const [cPassworErrorMessage, setPasswordErrorMessage] = useState('');
  
    const validate = (value) => {
    
        if (validator.isStrongPassword(value, {
        minLength: 8
        })) {
        setErrorMessage('Your password is strong');
        } else {
        setErrorMessage('Your password is not strong and minimum 8 characters required');
        }
    }
    const passwordValidate = (value) => {
    
        if(password !== value){
            setPasswordErrorMessage('Confirm password does not match !');
        }
        else{
            setPasswordErrorMessage('');
        }
    }

    useEffect(() => {
        if(localStorage.getItem('app-access-token')!=null){
            history.push("/admin");
         }
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
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
                     username:username,
                     email: email,
                     password:password,
                     category:category,
                     cpassword:confrim
                })
            };
           
            fetch(`${URL}/users/signup`, requestOptions)
            .then(response =>  response.json())
            .then(data => (        
                (data.status==="403")?(setError(data.error),setDisabled(false)):(
                    localStorage.setItem("app-access-token",data.token),
                    setDisabled(false),
                    history.push('/admin')           
                )
                )
            )
       
      
       
    }
    return (
       <div className="contact-container">
           <NavbarTop />
            <div  className="img-fluid background-img-full" >
                <div className="bg-image-register">
                    <div className="set">
                    <div><img src={FB} style={{width:180,height:180}} alt="1"/></div>
                    <div><img src={IG} style={{width:180,height:180}} alt="2"/></div>
                    <div><img src={SP} style={{width:180,height:180,transform:' skewY(10deg)'}} alt="4"/></div>    
                    <div><img src={ST} style={{width:180,height:180}} alt="6"/></div>   
                    <div><img src={SN} style={{width:180,height:180,transform:' skewX(20deg)'}} alt="5"/></div>   
                    <div><img src={TI} style={{width:180,height:180,transform:' skewY(20deg)'}} alt="8"/></div>   
                    <div><img src={LD} style={{width:180,height:180,transform:' skewY(20deg)'}} alt="3"/></div>
                    <div><img src={YT} style={{width:180,height:180,transform:' skewX(12deg)'}} alt="10"/></div>   
                    <div><img src={TW} style={{width:180,height:180}} alt="9"/></div>   
                </div>
                    <div className="set set2 desktop-show">
                    <div><img src={LD} style={{width:180,height:180}} alt="3"/></div>
                    <div><img src={FB} style={{width:180,height:180,transform:' skewY(8deg)'}} alt="1"/></div>
                    <div><img src={YT} style={{width:180,height:180}} alt="10"/></div>  
                    <div><img src={SP} style={{width:180,height:180,transform:' skewX(12deg)'}} alt="4"/></div>    
                    <div><img src={SN} style={{width:180,height:180}} alt="5"/></div>    
                </div>
                    <div className="set set3 desktop-show">
                    <div><img src={ST} style={{width:180,height:180,transform:' skewY(14deg)'}} alt="6"/></div>  
                    <div><img src={TI} style={{width:180,height:180}} alt="8"/></div>   
                    <div><img src={TW} style={{width:180,height:180,transform:' skewX(10deg)'}} alt="9"/></div>   
                    <div><img src={IG} style={{width:180,height:180}} alt="2"/></div> 
                    <div><img src={TT} style={{width:180,height:180,transform:' skewY(24deg)'}} alt="7"/></div>     
                </div>
            
                </div>
            </div>
            <div className="text-center"style={{zIndex:1}}>
                <img src={logo} onMouseOver={()=>setLogo(LogoHover)} onMouseOut={()=>setLogo(Logo)} className="img-fluid logo-image mb-4 ml-auto mr-auto" alt="Logo" />
                <h1 className="center-text  ml-auto mr-auto">One card to rule them all.</h1>
                {/*  */}
                <button className="btn btn-custom ml-auto mr-auto" onClick={handleShow}>SIGNUP</button>
                {/*  */}
                <Modal size="lg" show={show} onHide={handleClose} className="p-0 m-0 modal-open " >
                    
                    <Modal.Body>
                            <div className="mt-3" style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                <img src={logo} onMouseOver={()=>setLogo(LogoHover)} onMouseOut={()=>setLogo(Logo)} className="img-fluid " style={{width:120}} alt="Logo" />
                                <div className="container pt-4">
                                    {
                                        (error !== "")?(
                                            <div className=" alert alert-danger alert-dismissible fade show container mb-3"  role="alert" style={{backgroundColor:"#FF4F4F",borderRadius:5}} >
                                                <h6 className="text-center text-white" style={{fontSize:'0.9rem',fontWeight:'400'}} >{error}</h6>
                                                <button type="button" className="close text-white" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        ):
                                        (
                                            <div></div>
                                        )
                                    }
                                    <form  onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" className="form-control register-inputs" required={true} onChange={(event)=>setEmail(event.target.value)} placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="username" id="username" className="form-control register-inputs"  required={true}  onChange={(event)=>setUsername(event.target.value)} placeholder="Username" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="password" id="password" minlength="8" className="form-control register-inputs"  required={true}  onChange={(event)=>{setPassword(event.target.value);validate(event.target.value);}} placeholder="Password" />
                                            {(errorMessage !== '')?( (errorMessage === 'Your password is strong')?( <small className="text-success ml-2">{errorMessage}</small>):( <small className="text-danger ml-2">{errorMessage}</small>)):('')}
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="cpassword" id="cpassword" className="form-control register-inputs"  required={true}  onChange={(event)=>{setConfrim(event.target.value);passwordValidate(event.target.value)}} placeholder="Confirm Password" />
                                            {(cPassworErrorMessage !== '')?( <small className="text-danger ml-2">{cPassworErrorMessage}</small>):('')}
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="category" id="category" className="form-control register-inputs"  required={true} onChange={(event)=>setCategory(event.target.value)}  placeholder="Category" />
                                        </div>
                                        <div className="form-group pt-1 text-center">
                                            <button className="btn-register" type="submit" disabled={disabled}>
                                                {(disabled)?(<i className="fa fa-refresh fa-spin mr-2"></i>):("")}Register</button>
                                        </div>
                                        <p className="text-center pt-1 text-muted">By using this service you are agreeing to the terms of service and privacy policy</p>
                                        <div className="text-center pt-2 ">
                                            <Link to="/signin" className="already-have-link" >Already have an account?</Link>
                                        </div>
                                        
                                    </form>
                                </div>
                                </div>
                            </div>
                    </Modal.Body>
                    
                </Modal>
            </div>
        </div>


    )
}
