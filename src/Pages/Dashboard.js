import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";
import {
  Navbar,
  Nav,
  DropdownButton,
  Dropdown,
  Button
} from "react-bootstrap";
import "html5-device-mockups/dist/device-mockups.min.css";
import UserPlaceholder from '../assets/default-profile_1.png';
import Facebook from '../assets/icons/facebook.png';
import Phone from '../assets/icons/phone.png';
import Mail from '../assets/icons/email.png';
import Website from '../assets/icons/website.png';
import LinkedIn from '../assets/icons/linkedin.png';
import Twitter from '../assets/icons/twitter.png';
import Marker from '../assets/icons/mapmarker.png';
import {NavLink, useHistory} from 'react-router-dom';
import {URL} from '../config/config';

export default function Dashboard() {
  const [loading,setLoading] = useState(false);
  const [countries,setCountries] = useState([]);
  const [latitude,setLatitude] = useState("");
  const [longitude,setLongitude] = useState("");
  const [profile,setProfile]=useState(UserPlaceholder);//
  const [profileTemp,setProfileTemp]=useState(UserPlaceholder);//
  const [profileType,setProfileType]=useState("image");
  const [fname,setFname] = useState("");
  const [lname,setLname] = useState("");
  const [username,setUsername] = useState("");
  const [position,setPosition] = useState("");
  const [bio,setBio] = useState("");
  const [email,setEmail] = useState("");
  const [contact,setContact] = useState("");
  const [country,setCountry] = useState("");
  const [zip,setZip] = useState("");
  const [facebook,setFacebook] = useState("");
  const [website,setWebsite] = useState("");
  const [twitter,setTwitter] = useState("");
  const [linkedin,setLinkedin] = useState("");
  const [greetings, setGreetings]=useState("");
  const [greetFname,setGreetFname]=useState("");
  const history = useHistory();

  useEffect(() => {
        if(localStorage.getItem('app-access-token')===null ){
           history.push("/signin");
        }
        if(localStorage.getItem('fname')){
          setGreetFname(localStorage.getItem('fname'));
        }
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);

            });
        } else {
          console.log("Not Available");
        }
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(json => setCountries(json))

        var date = new Date();
        var hrs = date.getHours();
        if (hrs<12) {
          setGreetings("Good Morning");
        } 
        else if(hrs >= 12 && hrs <= 17) {
          setGreetings("Good Afternoon");
        }
        else if(hrs >= 17 && hrs <= 24) {
          setGreetings("Good Evening");
        }
        
        fetch(`${URL}/users/profile`,{
          method: 'GET',
          headers: { 
              'Accept': 'application/json',
              'Authorization': localStorage.getItem("app-access-token")
          }
        })
        .then(response=>response.json())
        .then(data=>(
          setFname(data.data.fname),
          setLname(data.data.lname),
          setPosition(data.data.position),
          setBio(data.data.bio),
          setContact(data.data.contact),
          setEmail(data.data.email),
          setCountry(data.data.country),
          setZip(data.data.zipcode),
          setProfileType(data.data.profile_type),
          // setProfile(data.data.profile),
          setProfileTemp(data.data.profile),
          setLatitude(data.data.location.coordinates[0]),
          setLongitude(data.data.location.coordinates[1]),
          setWebsite(data.data.website),
          setFacebook(data.data.facebook),
          setLinkedin(data.data.linkedin),
          setTwitter(data.data.twitter),
          setUsername(data.data.username),
          setGreetFname(data.data.fname),
          localStorage.setItem("username",(data.data.fname+" "+data.data.lname))
        ))

    }, [])
  const countryOption = countries.map((country,i)=>
      <option value={country.name} key={i}>{country.name}</option>
  );
  var handleSubmit = (event)=>{
    event.preventDefault();
    setLoading(true);
    var formdata = new FormData();
    formdata.append("first_name",fname);
    formdata.append("last_name",lname);
    formdata.append("contact",contact);
    formdata.append("position",position);
    formdata.append("bio",bio);
    formdata.append("profile_type",profileType);
    formdata.append("country",country);
    formdata.append("zipcode",zip);
    formdata.append("website",website);
    formdata.append("facebook",facebook);
    formdata.append("linkedin",linkedin);
    formdata.append("twitter",twitter);
    formdata.append("profile",profile);
    formdata.append("email",email);
    const requestOptionsPost = {
      method: 'POST',
      headers: { 
          'Authorization': localStorage.getItem("app-access-token")
      },
      body:formdata
  };
    fetch(`${URL}/users/profile-update`,requestOptionsPost)
    .then(response => response.json())
    .then(data => 
      fetch(`${URL}/users/profile`,{
          method: 'GET',
          headers: { 
              'Accept': 'application/json',
              'Authorization': localStorage.getItem("app-access-token")
          }
        })
        .then(response=>response.json())
        .then(data=>(
          setFname(data.data.fname),
          setLname(data.data.lname),
          setPosition(data.data.position),
          setBio(data.data.bio),
          setContact(data.data.contact),
          setEmail(data.data.email),
          setCountry(data.data.country),
          setZip(data.data.zipcode),
          setProfileType(data.data.profile_type),
          setProfileTemp(data.data.profile),
          setLatitude(data.data.location.coordinates[0]),
          setLongitude(data.data.location.coordinates[1]),
          setWebsite(data.data.website),
          setFacebook(data.data.facebook),
          setLinkedin(data.data.linkedin),
          setTwitter(data.data.twitter),
          setUsername(data.data.username),
          setGreetFname(data.data.fname),
          localStorage.setItem("username",(data.data.fname+" "+data.data.lname)),
          setLoading(false)

        ))
    )

  }
  const signout=()=>{
      localStorage.clear();
      history.push("/");
  }
  return (
    <>
      <Sidebar />
      {/* <Header /> */}
      <div className="p-2 p-lg-0 " style={{height:'100%'}}>
        <div className="row " style={{height:'100%'}} >
          <div className="col-lg-7 col-sm-12 p-0 m-0 " >
            <Navbar expand="lg" className="w-100 nav-height " style={{zIndex:2}}>
                <Navbar.Brand href="#greetings"><span style={{fontWeight:'500',fontSize:'1.18rem'}}>{greetings}, {greetFname} </span></Navbar.Brand>
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
            <div className="analytics">
              <div className="justify-content-between" style={{fontSize:14}}>
                <span>
                  <strong className="mr-lg-4 ml-lg-2">Lifetime Analytics:</strong>{" "}
                  <span className="mr-lg-4">
                    <strong style={{fontWeight:'600'}}> <i className="fa fa-circle text-orange fa-0-5x mr-1"></i>  Views:</strong> 0
                  </span>
                  <strong style={{fontWeight:'600'}}> <i className="fa fa-circle text-green fa-0-5x mr-1"></i> Clicks:</strong> 0
                </span>
              </div>
            </div>
            <Navbar expand="lg" className="w-100 nav-height desktop-hide border-bottom">
              <Nav className="link-url">
                <div className="p-1" style={{display:'flex',flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center'}} >
                <span className="pl-0 ml-0" >
                  <a
                    href={"/profile/"+username}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{fontSize:13}}
                  >
                    <strong className="text-dark"></strong>{" "}
                    {"http://theknowcard.com/profile/"+username}
                  </a>
                </span>
                <Button
                  variant="primary"
                
                >
                Share
                </Button>
                </div>
              </Nav>
            </Navbar>
            {/* Profile Update */}
            <div className="links-container p-3" >
              <div className="row mt-2 p-2">                
                <div className="col-md-12 order-md-1">
                <div className="profile-container ml-auto mr-auto " >
                    {
                      (profileType==="image")?<img src={profileTemp} className="profile-image img-fluid img-thumbnail shadow" alt="ProfileImage"/>:<video playsInline controls={true} className="profile-image-video img-thumbnail img-fluid  shadow"   autoPlay loop > <source src={profileTemp} type="video/mp4"   /></video>
                    }
                   
                    <label className="btn btn-upload-image"><input type="file" id="files" hidden onChange={
                      (event)=>{
                        setProfile(event.target.files[0]);
                        setProfileTemp(URL.createObjectURL(event.target.files[0]));
                        var str = event.target.files[0].type;
                        var trimmedString = str.substring(0, 5);
                        setProfileType(trimmedString);
                      }

                      } /><i className="fa fa-plus text-white mt-3"></i></label>
                    <h4 className=" p-3 text-center" style={{fontWeight:'600'}}>@{username}</h4>
                  </div>
                  <hr className="mb-4 mt-5" />
                  <form onSubmit={handleSubmit} encType="multipart/form-data" >
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control no-outline" id="firstName" name="firstName" placeholder="John" value={fname} onChange={(event)=>setFname(event.target.value)}    required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control no-outline" id="lastName" name="lastName" placeholder="Doe" value={lname} onChange={(event)=>setLname(event.target.value)}    required />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="salutation">Job Postiton/Salutation</label>
                      <div className="input-group">
                       
                        <input type="text" className="form-control no-outline" id="salutation" name="salutation" placeholder="Job Postiton/Salutation" value={position} onChange={(event)=>setPosition(event.target.value)} required />
                        
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="salutation">Bio</label>
                      <div className="input-group">
                       
                       <textarea name="bio" id="bio"  rows="5" maxLength={115} placeholder="Hello,I am John Doe I am a Senior Consultant at THEKNOWCARD" value={bio} required onChange={(event)=>setBio(event.target.value)} className="form-control-area no-outline"></textarea>
                        
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="contact">Contact</label>
                          <input type="contact" className="form-control no-outline" name="contact"  placeholder="+91 8456325468" value={contact} onChange={(event)=>setContact(event.target.value)} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="email">Email</label>
                          <input type="email" className="form-control no-outline" name="email"  placeholder="john@example.com" value={email} onChange={(event)=>setEmail(event.target.value)} />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="country">Country</label>
                        <select className="custom-select d-block w-100 form-control" id="country" name="country" value={country} required onChange={(event)=>setCountry(event.target.value)}>
                          <option value>Choose...</option>
                          {countryOption}
                        </select>
                      </div>
                      
                      <div className="col-md-6 mb-3">
                        <label htmlFor="zip">Zip Code</label>
                        <input type="text" className="form-control no-outline" name="zip" placeholder="650326" value={zip} required onChange={(event)=>setZip(event.target.value)} />
                      </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="mb-3">
                      <label htmlFor="website"><i className="fa fa-globe mr-1 text-dark"></i> Website</label>
                      <input type="text" className="form-control no-outline" name="website" placeholder="www.theknowcard.com" value={website} required onChange={(event)=>setWebsite(event.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="facebook"><i className="fa fa-facebook mr-2  text-dark"></i> Facebook <span className="text-muted">(Optional)</span></label>
                      <input type="text" className="form-control no-outline" name="facebook" placeholder="www.facebook.com/JohnDoe" value={facebook} onChange={(event)=>setFacebook(event.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="linkedin"><i className="fa fa-linkedin mr-2 text-dark"></i> LinkedIn <span className="text-muted">(Optional)</span></label>
                      <input type="text" className="form-control no-outline" name="linkedin" placeholder="www.linkedin/johndoe" value={linkedin} onChange={(event)=>setLinkedin(event.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="twitter"> <i className="fa fa-twitter mr-2 text-dark"></i> Twitter <span className="text-muted">(Optional)</span></label>
                      <input type="text" className="form-control no-outline" name="twitter" placeholder="www.twitter.com/johndoe" value={twitter} onChange={(event)=>setTwitter(event.target.value)} />
                    </div>
                    <hr className="mb-4 mt-4" />
                    <button type="submit" className="btn btn-block btn-gradient p-2 no-outline" disabled={loading} >
                      {(!loading)?(<i className="fa fa-floppy-o mr-1"></i>):(<i className="fa fa-refresh fa-spin mr-1"></i>) }
                      {" "}
                      <span style={{fontWeight:'600'}}>Save Profile</span>
                    </button>
                  </form>
                  {/* <div style={{marginBottom:'1000px'}}></div> */}
                </div>
              </div>
            </div>
            {/* Profile Update */}
          </div>
          <div className="col-lg-5 col-sm-12 p-0 m-0 mobile-mockup desktop-show">
            <Navbar expand="lg" className="w-100 nav-height border-bottom">
              <Nav className="link-url">
                <span>
                  <a
                    href={"/profile/"+username}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{fontSize:14}}
                  >
                    <strong className="text-dark">My Know Card :</strong>{" "}
                    {"http://theknowcard.com/profile/"+username}
                  </a>
                </span>
                <DropdownButton
                  id="dropdown-basic-button"
                  variant="outline-info"
                  menuAlign="right"
                  title="Share"
                >
                  <Dropdown.Item href="#/action-1" style={{fontSize:14,fontWeight:'500'}}>
                    Copy my KnowCard URL
                  </Dropdown.Item>
                  <div className="divider"></div>
                  <Dropdown.Item href="#/action-2"  style={{fontSize:14,fontWeight:'500'}}>
                    Download my KnowCard QR Code
                  </Dropdown.Item>
                </DropdownButton>
              </Nav>
            </Navbar>
            <div className="container iphone-mockup"> 
           <div className="device-wrapper">
                    <main>
            <div className="iphonex">
              <div className="front">
                <div className="screen">
                  <div className="screen__view">
                  <div className="h-100">
                  <div className="content" style={{overflowY:"hidden"}}>
                    {
                      (profileType==="image")?<img src={profileTemp}  className="full-screen-image" alt="ProfileImage"/>:<video playsInline controls={true} className="full-screen-image" autoPlay loop > <source src={profileTemp} type="video/mp4"   /></video>
                    }
                    {/* <img
                      src={profile}
                      className="full-screen-image"
                      alt="profile"
                    /> */}
                    <div className="profile-info ">
                      <h2 className="profile-info-name mb-1">
                        {fname}{" "}{lname}
                      </h2>
                      <span className=" profile-info-salutation">
                        {position}
                      </span>
                      <p className="profile-info-description w-100">
                       {bio}
                      </p>
                    </div>
                    <div className="profile-footer">
                      <div className="p-2 ml-auto mr-auto">
                        <a href="tel:+918962551464">
                        <img src={Phone} style={{width:18,height:14}} className=" mr-3" alt="Phone"/>
                        </a>
                        <a href="mailto:tx2terminator@gmail.com">
                          <img src={Mail} style={{width:18,height:12}}  className=" mr-3" alt="Mail"/>
                        </a>
                        <a href="http://niteshvishwakarma.cyou">
                         <img src={Website} style={{width:16,height:16}}  className=" mr-3" alt="Website"/>
                        </a>
                        <a href="#fb">
                          <img src={Facebook} style={{width:10,height:16}}  className=" mr-3" alt="Facebook"/>
                        </a>
                        <a href="#ld">
                          <img src={LinkedIn} style={{width:16,height:16}}  className=" mr-3" alt="LinkedIn"/>
                        </a>
                        <a href="#tw">
                          <img src={Twitter} style={{width:20,height:16}}  className=" mr-3" alt="Twitter"/>
                        </a>
                        <a href={"https://www.google.com/maps/@"+latitude+","+longitude}>
                          <img src={Marker} style={{width:12,height:16}}   alt="Marker"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                  </div>
                  <div className="screen__front">
                    <div className="screen__front-speaker" />
                    <div className="screen__front-camera" />
                  </div>
                </div>
                <div className="front__line" />
                <div className="front__line front__line-second" />
              </div>
              <div className="phoneButtons phoneButtons-right" />
              <div className="phoneButtons phoneButtons-left" />
              <div className="phoneButtons phoneButtons-left2" />
              <div className="phoneButtons phoneButtons-left3" />
              <div className="back" />
            </div>
            
          </main>

          
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
