import React,{useEffect,useState} from 'react';
import './Contact.css';
import Logo from '../assets/Logo.png';
import {useHistory} from 'react-router-dom';
import {URL} from '../config/config';

export default function Contact(props) {
    const { match: { params } } = props;
    const history = useHistory();
    const [profile,setProfile] = useState("");
    const [profileType,setProfileType] = useState("");
    const [username,setUsername] = useState("");
    const [fname,setFname] = useState("");

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
            setProfile(json.data.profile),
            setProfileType(json.data.profile_type),
            setUsername(json.data.username),
            setFname(json.data.fname)
            
           )
            )
         )
        .catch(err=>console.log(err))

    }, [])

    const onSend=()=>{
        history.push(`/message-sent/${fname}`);
    }

    return (
        <>
        <div className="contact-container" >
            <div className="card-container p-0 m-0" style={{background: `linear-gradient(to bottom, #fff,#f2efea )`}}>
                <div className="row p-0 m-0 ">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center ">
                    {
                        (profileType==="image")?<img src={profile}  className="img-fluid card-image shadow" alt="ProfileImage"/>:<video playsInline controls={true} className="img-fluid card-image shadow" autoPlay loop > <source src={profile} type="video/mp4"   /></video>
                    }
                        <h4 className="text-dark mt-3"><strong>@{username}</strong></h4>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-lg-4 ">
                        <h5 className="text-center mt-3" style={{color: 'rgb(255, 123, 0)'}}>Send your contact information to <strong>Niki</strong></h5>
                        <form  className="p-3" onSubmit={onSend}>
                        <h6 className="mb-3 text-muted"><strong>Hi Niki, my name is...</strong></h6>
                        <div className="mb-3">
                            <input type="email" className="form-control form-custom-control" id="exampleFormControlInput1" placeholder="Name" />
                        </div>
                        <h6 className="mb-3 text-muted"><strong>You can reach me at ...</strong></h6>
                        <div className="mb-3">
                            <input type="email" className="form-control form-custom-control" id="exampleFormControlInput1" placeholder="Email" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control form-custom-control" id="exampleFormControlInput1" placeholder="Phone Number" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control form-custom-control" id="exampleFormControlInput1" placeholder="Title" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control form-custom-control" id="exampleFormControlInput1" placeholder="Company" />
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-control form-custom-control" id="exampleFormControlInput1" placeholder="Message" />
                        </div>
                        <div className="mb-5 text-center">
                            <button type="submit" className="btn btn-send">SEND</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bottom-nav ">
                <div className="row m-0 p-0 ">
                    <div className="p-2 " style={{display:'flex',width:'100%',flexDirection:'row',justifyContent: 'space-between'}}>
                        <img src={Logo} className="img-fluid img-logo ml-2 mt-auto mb-auto" alt="Logo"/>
                        <button className="btn btn-black">GET YOUR CARD</button>

                    </div>
                </div>
            </div>
        </div>

        </>
    )
}
