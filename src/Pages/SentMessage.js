import React from 'react';
import './SentMessage.css';
import BackgroundImage from '../assets/background.png';
import Logo from '../assets/Logo.png';
import {useHistory} from 'react-router-dom';

export default function SentMessage(props) {
    const { match: { params } } = props;
    const history = useHistory();
    const goHome =()=>{
        history.push('/')
    }
    return (
        <>
     <div className="contact-container">
        <div className="card-container p-0 m-0">
            <img src={BackgroundImage} className=" background-img" alt="background" />
            <h2 className="center-text">We have sent your details to {params.slug}.Have a great day.</h2>
        </div>
        <div className="bottom-nav ">
            <div className="row m-0 p-0 ">
            <div className="p-2 " style={{display: 'flex',width:'100%',flexDirection:'row', justifyContent: 'space-between'}}>
                <img src={Logo} onClick={goHome} className="img-fluid img-logo ml-2 mt-auto mb-auto" alt="Logo"/>
                <button className="btn btn-black ">GET YOUR CARD</button>
            </div>
            </div>
        </div>
        </div>

  
        </>
    )
}
