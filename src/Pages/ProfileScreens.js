import React,{useState,useEffect} from 'react';
import './ProfileScreens.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Card from '../components/Card';
import Logo from '../assets/Logo.png';

// Icons
import Phone from '../assets/profile-icon/phone.png';
import Email from '../assets/profile-icon/email.png';
import Facebook from '../assets/profile-icon/facebook.png';
import Twitter from '../assets/profile-icon/twitter.png';
import Website from '../assets/profile-icon/website.png';
import MapMarker from '../assets/profile-icon/mapmarker.png';
import Linkedin from '../assets/profile-icon/linkedin.png';
import Swipe from '../assets/profile-icon/swipeicon.png';
import {useHistory} from 'react-router-dom';
import {URL} from '../config/config';
const vCardsJS = require('vcards-js');

export default function ProfileScreens(props) {
    
    const { match: { params } } = props;
    const history = useHistory();
    const [loading,setLoading]=useState(true);
    const [profile,setProfile]=useState([]);
    const [cardData,setCardData] = useState([]);

  
    useEffect(() => {
        fetch(`${URL}/users/profile-screens/${params.slug}`,{
            method: 'GET',
            headers: { 
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(response => (
            (response.redirected)?("redirect"):(response.json())
        ))
        .then(json => (
           (json === "redirect")?(history.push('/signup')):(
            // console.log(json),
            setProfile(json),
            // Getting Card Data
            fetch(`${URL}/cards/all/${params.slug}`, {
                method: 'GET',
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type':'application/json',
                    'Authorization':localStorage.getItem("app-access-token")
                }
            })
            .then(response => response.json())
            .then(data => (
                setCardData(data.data),
                // console.log(data),
                setLoading(false)
                )
            )
            .catch(err=>console.log(err))
            )
           )
           
         )
        .catch(err=>console.log(err))

        // console.log("Profile Without Data "+profile)
        // console.log("Cards Without Data "+cardData)
        // console.log("Route Params "+params.slug)
        
    
    }, [])
    
   
    function RenderScreens({renderCards,profile,saveInfo}){
        return (
        <div style={{padding: 0,margin:0}}>
        <AwesomeSlider className="slider" >
            <div className="profile__container p-0 m-0">
                {
                    (profile.data.profile_type==="image")?<img src={profile.data.profile}  className="img-fluid profile__image" alt="ProfileImage"/>:<video playsInline controls={true} className="img-fluid profile__image" autoPlay loop > <source src={profile.data.profile} type="video/mp4"   /></video>
                }
                
                <div className="info-nav">
                    <h2>{profile.data.fname+" "+profile.data.lname}</h2>
                    <span className="sub-heading">{profile.data.position}</span>
                    <p className="about">{profile.data.bio}</p>
                </div>
                <div className="middle-nav ">
                    <div className="row m-0 p-0">
                        <div className="p-2 pt-2" style={{display: 'flex',flexDirection:'row',justifyContent:'space-between',flex: 1, marginLeft:8}}>
                            <div className="" style={{display: 'flex', flexDirection:'row',flex: 1}}>
                                <a href={"tel:"+profile.data.contact} target="_blank" rel="noopener noreferrer">
                                    <img src={Phone} className="mr-3 mt-1" alt="Phone" style={{width:'1.2rem',height:'1.0rem'}} />
                                </a>
                                <a href={"mailto:"+profile.data.email} target="_blank" rel="noopener noreferrer">
                                    <img src={Email} className="mr-3 mt-1" alt="Phone" style={{width:'1.3rem',height:'1.0rem'}} />
                                </a>
                                <a href={profile.data.website} target="_blank" rel="noopener noreferrer">
                                    <img src={Website} className="mr-3 mt-1" alt="Phone" style={{width:'1.2rem',height:'1.2rem'}} />
                                </a>
                                <a href={profile.data.facebook} target="_blank" rel="noopener noreferrer">
                                    <img src={Facebook} className="mr-3 mt-1" alt="Phone" style={{width:'0.8rem',height:'1.2rem'}} />
                                </a>
                                <a href={profile.data.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img src={Linkedin} className="mr-3 mt-1" alt="Phone" style={{width:'1.2rem',height:'1.1rem'}} />
                                </a>
                                <a href={profile.data.twitter} target="_blank" rel="noopener noreferrer">
                                    <img src={Twitter} className="mr-3 mt-2" alt="Phone" style={{width:'1.4rem',height:'1.1rem'}} />
                                </a>
                                <a href={"https://www.google.com/maps/@"+profile.data.location.coordinates[0]+","+profile.data.location.coordinates[1]} target="_blank" rel="noopener noreferrer">
                                    <img src={MapMarker} className="mr-3 mt-1" alt="Phone" style={{width:'1.0rem',height:'1.4rem'}} />
                                </a>
                            </div>
                            <img src={Swipe} alt="Phone" className="mr-2 mt-2" style={{width:'2.0rem',height:'1.2rem'}} />        
                        </div>
                    </div>
                </div>
                <div className="bottom-nav ">
                    <div className="row m-0 p-0 ">
                        <div className="p-2 " style={{display:'flex',width:'100%',flexDirection:'row',justifyContent: 'space-between'}}>
                            <img src={Logo} className="img-fluid img-logo ml-2 mt-auto mb-auto" alt="Logo"/>
                            <button onClick={saveInfo} className="btn btn-black">SAVE CONTACT</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page 2 */}
            <section className="p-0 m-0 profile__container "  >
                <div className="card-container" style={{background: `linear-gradient(to bottom, #fff, #E7E2DA)`}}>
                    <div className="row " style={{background: `linear-gradient(to bottom, #fff, ##E7E2DA)`}}>
                    <div className="col-lg-6 col-md-6-col-sm-12 text-center ">
                    {
                    (profile.data.profile_type==="image")?<img src={profile.data.profile}  className="img-fluid card-image shadow" alt="ProfileImage"/>:<video playsInline controls={true} className="img-fluid card-image shadow" autoPlay loop > <source src={profile.data.profile} type="video/mp4"   /></video>
                    }
                    <h4 className="text-dark mt-3"><strong>@{profile.data.username}</strong></h4>
                    </div>
                    <div className="col-lg-6 col-md-6-col-sm-12 mt-lg-4 mt-3">
                        <div  style={{display:'flex',flexDirection:'column',overflowY: 'scroll',overflowX:'hidden',width:'100%',justifyContent:'center',alignItems:'center'}}>
                        <div className="custom-width row"  style={{justifyContent:'center',alignItems:'center'}}>
                            {renderCards}
                        </div>
                        <br /><br /><br/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="bottom-nav ">
                    <div className="row m-0 p-0 ">
                    <div className="p-2 " style={{display: 'flex',width:'100%',flexDirection:'row', justifyContent: 'space-between'}}>
                        <img src={Logo} className="img-fluid img-logo ml-2 mt-auto mb-auto" alt="Logo"/>
                        <button onClick={saveInfo} className="btn btn-black ">SAVE CONTACT</button>
                    </div>
                    </div>
                </div>
            </section>
        
            
        </AwesomeSlider>
        </div>
        )
    }

   if(loading){
       return (
           <>
            <div className="loader">
               <div>
               <img src={Logo} className="img-fluid" alt="Logo"/>
                <h5 className="p-3">Loading....</h5>
               </div>
            </div>
           </>
       )
   }else{
    const saveContact=()=>{
        //create a new vCard
        var vCard = vCardsJS();
        vCard.firstName = profile.data.fname;
        vCard.lastName = profile.data.lname;
        vCard.title = profile.data.position;
        if(profile.data.profile_type==="image"){
            vCard.photo.attachFromUrl(profile.data.profile, 'JPEG');
        }
        vCard.workPhone = profile.data.contact;
        vCard.url = profile.data.website;
        vCard.email = profile.data.email;
        vCard.socialUrls['facebook'] = profile.data.facebook;
        vCard.socialUrls['linkedin'] = profile.data.linkedin;
        vCard.socialUrls['twitter'] = profile.data.twitter;
        const url = window.URL.createObjectURL(new Blob([ vCard.getFormattedString() ], {type: "text/vcard;charset=utf-8"}));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${profile.data.fname+" "+profile.data.lname}.vcf`);
        document.body.appendChild(link);
        link.click();
        history.push(`/contact/${profile.data.username}`);
    }

    const renderCard = 
        cardData.map((data,i)=>(
            <div key ={i}  className="col-md-4-custom-profile p-1">          
                <Card color={data.color} url={data.url} Icon={data.image} description={data.description} />
            </div>
            
        ))
    return (
       (profile)?(
            <RenderScreens renderCards={renderCard} profile={profile} saveInfo={saveContact} />
       ):(
        ""
       )
    )
   }
}
