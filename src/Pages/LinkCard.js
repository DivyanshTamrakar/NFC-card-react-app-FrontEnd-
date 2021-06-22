import React, { useState,useEffect } from "react";
import Sidebar from "../components/Sidebar";
import './LinkCard.css';
import {
    Navbar,
    Nav,
    DropdownButton,
    Dropdown
  } from "react-bootstrap";
import "html5-device-mockups/dist/device-mockups.min.css";
import Background from '../assets/bg-gradient.png';
import Card from "../components/Card";
import {Link,useHistory} from 'react-router-dom';
import Youtube from '../assets/social-media-icons/youtube.png';
import Instagram from '../assets/social-media-icons/instagram.png';
import Snapchat from '../assets/social-media-icons/snapchat.png';
import TwitterIcon from '../assets/social-media-icons/twitter.png';
import Spotify from '../assets/social-media-icons/spotify.png';
import LinkedInIcon from '../assets/social-media-icons/linkedin.png';
import Medium from '../assets/social-media-icons/medium.png';
import Reddit from '../assets/social-media-icons/reddit.png';
import BackIcon from '../assets/social-media-icons/arrow.png';
import DashNav from "../components/DashNav";
import {URL} from '../config/config';

export default function LinkCard() {
    const [cardData,setCardData] = useState([]);
    const [profile,setProfile]=useState();
    const [profileType,setProfileType]=useState("");
    const [username,setUsername]=useState("");
    const history = useHistory();
    useEffect(() => {
        if(localStorage.getItem('app-access-token')===null){
            history.push("/signin");
         }
         const requestOptions = {
          method: 'GET',
          headers: { 
              'Accept': 'application/json',
              'Authorization':localStorage.getItem("app-access-token")
          }
      };
      fetch(`${URL}/cards/all`, requestOptions)
      .then(response => (response.status === 401)?(response.statusText):( response.json()))
      .then(data => (setCardData(data.data)));

      fetch(`${URL}/users/profile`,{
        method: 'GET',
        headers: { 
            'Accept': 'application/json',
            'Authorization': localStorage.getItem("app-access-token")
        }
      })
      .then(response=>response.json())
      .then(data=>((
        setProfileType(data.data.profile_type),
        setProfile(data.data.profile),
        setUsername(data.data.username)
      )));
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const removeCards = (id) => {
        const requestOptionsDelete = {
          method: 'POST',
          headers: { 
              'Accept': 'application/json',
              'Authorization':localStorage.getItem("app-access-token")
          }
        };
        fetch(`${URL}/cards/${id}`, requestOptionsDelete)
        .then(response => (response.status === 401)?(response.statusText):( response.json()))
        .then(data => 
        setCardData(
          cardData.filter(function(cardData){
            return cardData._id !== id
          })
        )
        );
       
    }
    const renderCards = 
      cardData.map((data,i)=>(
        <div key ={i}  className="col-md-4-custom p-1">
          <button className="btn" onClick={()=>removeCards(data._id)} style={{position:'absolute',top:'5%',right:'5%',outline:'none',boxShadow:'none'}}><i className="fa fa-trash  text-white"></i></button>
          <Card color={data.color} url={data.url} Icon={data.image} description={data.description} />
        </div>
        
    ))
    
    return (
        <>
            <Sidebar />
      {/* <Header /> */}
      <div className="p-2 p-lg-0"  style={{height:'100%'}}>
        <div className="row"  style={{height:'100%'}}>
          <div className="col-lg-7 col-sm-12 p-0 m-0">
             
                <DashNav />
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
            {/* Profile Update */}
             <div className="link-container container-fluid ">
              <div className="row mt-2 p-2">                
                <div className="col-md-12 p-1 order-md-1">
                  <div className="profile-container ml-auto mr-auto " >
                  {
                      (profileType==="image")?<img src={profile}  className="profile-image img-fluid img-thumbnail shadow" alt="ProfileImage"/>:<video playsInline controls={true} className="profile-image img-fluid img-thumbnail shadow" autoPlay loop > <source src={profile} type="video/mp4"   /></video>
                    }
                    
                    <h4 className=" p-3 text-center" style={{fontWeight:'600'}}>@{username}</h4>
                  </div>
                  <hr className=" mt-5" />
                    {/* Link Add Division Start */}
                   <div className=" links ml-auto mr-auto p-3 ">
                        <Link to="/admin/link-card" className="btn btn-block btn-gradient  p-2 no-outline"  >
                        <i className="fa fa-plus mr-1"></i>{" "}
                        <strong>Add New Link</strong>
                        </Link>
                    
                        <br />
                        {/* List Item */}
                        <div  style={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'center',alignItems:'center'}}>
                          
                        
                       <div className="row custom-width" style={{justifyContent:'center',alignItems:'center'}}>
                         {renderCards}
                       </div>
                       
                         
                        </div>
                        {/* List Item Ends*/}
                        
                    </div>
                    {/* Link Add Division Ends */}
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
                  <div className="content " style={{overflowY:'scroll'}}>
                            <img src={Background} className="full-screen-image" alt="background" />

                            <div className="second-profile">
                            {
                              (profileType==="image")?<img src={profile}  className="second-profile-image shadow" alt="ProfileImage"/>:<video playsInline controls={true} className="second-profile-image shadow" autoPlay loop > <source src={profile} type="video/mp4"   /></video>
                            }
                              
                                <h6 className=" mt-3 text-center" style={{fontWeight:'600'}}>@nikinick930</h6>
                            </div>
                            <div className="card-content-container ">
                              <div className="row-container" style={{display:'flex',flexDirection:'row',width:'90%',justifyContent:'space-between',alignItems:'center',marginTop:35}} >
                                    
                                    <div className="col-lg-4 col-md-4 m-1  minicard " style={{backgroundColor:'#fe0000'}}>
                                      <img src={Youtube} className="img-fluid mini-icon" alt="icon"/>
                                        <p className="text-white" style={{fontSize:8,paddingTop:10}}>Checkout my latest video </p>
                                        <img src={BackIcon} className="img-fluid back-icon-mini ml-auto" alt="icon"/>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-1  minicard " style={{backgroundColor:'#ff0868'}}>
                                      <img src={Instagram} className="img-fluid mini-icon" alt="icon"/>
                                        <p className="text-white" style={{fontSize:8,paddingTop:10}}>Had a best vaccation over! </p>
                                        <img src={BackIcon} className="img-fluid back-icon-mini ml-auto" alt="icon"/>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-1  minicard " style={{backgroundColor:'#2b5295'}}>
                                      <i className="fa fa-facebook text-white" style={{marginTop:'0.9rem'}}></i>
                                       <p className="text-white" style={{fontSize:8,paddingTop:10}}>Donate to black fund equality</p>
                                        <img src={BackIcon} className="img-fluid back-icon-mini ml-auto" alt="icon"/>
                                    </div>
                                   
                              </div>
                              <div className="row-container" style={{display:'flex',flexDirection:'row',width:'90%',justifyContent:'space-between',alignItems:'center'}} >
                                    
                                    <div className="col-lg-4 col-md-4 m-1  minicard " style={{backgroundColor:'#FFB600'}}>
                                      <img src={Snapchat} className="img-fluid mini-icon" alt="icon"/>
                                      <p className="text-white" style={{fontSize:8,paddingTop:10}}>Checkout my snaps</p>
                                        <img src={BackIcon} className="img-fluid back-icon-mini ml-auto" alt="icon"/>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-1  minicard " style={{backgroundColor:'#13b5fe'}}>
                                      <img src={TwitterIcon} className="img-fluid mini-icon" alt="icon"/>
                                      <p className="text-white" style={{fontSize:8,paddingTop:10}}>Had a best vaccation over!</p>
                                        <img src={BackIcon} className="img-fluid back-icon-mini ml-auto" alt="icon"/>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-1  minicard " style={{backgroundColor:'#1ed760'}}>
                                      <img src={Spotify} className="img-fluid mini-icon" alt="icon"/>
                                      <p className="text-white" style={{fontSize:8,paddingTop:10}}>Listen to my techno playlist on spotify</p>
                                        <img src={BackIcon} className="img-fluid back-icon-mini ml-auto" alt="icon"/>
                                    </div>
                                   
                              </div>
                              <div className="row-container" style={{display:'flex',flexDirection:'row',width:'90%',justifyContent:'space-between',alignItems:'center'}} >
                                    
                                    <div className="col-lg-4 col-md-4 m-1  minicard " style={{backgroundColor:'#0077b9'}}>
                                      <img src={LinkedInIcon} className="img-fluid mini-icon" alt="icon"/>
                                      <p className="text-white" style={{fontSize:8,paddingTop:10}}>Read my article on market shift </p>
                                        <img src={BackIcon} className="img-fluid back-icon-mini ml-auto" alt="icon"/>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-1  minicard " style={{backgroundColor:'#00911c'}}>
                                      <img src={Medium} className="img-fluid mini-icon" alt="icon"/>
                                      <p className="text-white" style={{fontSize:8,paddingTop:10}}>Read my post on data privacy </p>
                                        <img src={BackIcon} className="img-fluid back-icon-mini ml-auto" alt="icon"/>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-1  minicard " style={{backgroundColor:'#ff4500'}}>
                                      <img src={Reddit} className="img-fluid mini-icon" alt="icon"/>
                                      <p className="text-white" style={{fontSize:8,paddingTop:10}}>My Reddit post on crypto</p>
                                        <img src={BackIcon} className="img-fluid back-icon-mini ml-auto" alt="icon"/>
                                    </div>
                                   
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
    )
}
