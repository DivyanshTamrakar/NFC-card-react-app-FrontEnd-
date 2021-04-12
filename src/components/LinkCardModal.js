import React,{useState} from 'react';
import './LinkCardModal.css';
import {URL} from '../config/config';

export default function LinkCardModal({Image,name,color,bgImage}) {
    const [saving,setSaving] = useState(false);
    const [link,setLink] = useState("");
    const [description,setDescription] = useState("");
    const [message,setMessage] = useState("");

    var handleSubmit = (event)=>{
        event.preventDefault();
        setSaving(true);
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem("app-access-token")
            },
            body: JSON.stringify({
                 name: name,
                 color:color,
                 description:description,
                 url:link,
                 image:bgImage
            })
        };
        fetch(`${URL}/cards/add-card`, requestOptions)
        .then(response => (response.status === 401)?(response.statusText):( response.json()))
        .then(data => (setMessage(data.message),setSaving(false)))
    }
    return (
        <>
            <button className="col-sm-2  btn card-box shadow" data-toggle="modal" data-target={"#"+name}  data-keyboard="false" data-backdrop="static">
                            
                    <img src={Image} style={{width:'3.2rem',marginTop:'0.8rem',opacity:'0.8'}} alt={name}/>
                    <p className="text-center pt-1 pb-0 mb-1">{name}</p>
                                        
            </button>
            {/*  Modal */}
            <div className="modal fade p-0 m-0" id={name} tabIndex={-1} role="dialog" aria-labelledby={name+"Label"} aria-hidden="true">
                        <div className="modal-dialog modal-lg modal-open" style={{borderRadius:'none'}} role="document">
                            <div className="modal-content " >
                            <div className="modal-header">
                                <img src={Image} style={{width:'1.8rem',marginLeft:5,paddingBottom:5}} alt={name}/>
                                <h5 className="modal-title pl-2 " id="exampleModalLabel">Add {name} Link</h5>
                                <button type="button" className="close mr-1" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times text-dark"></i></span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="mt-3" style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                    <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                    {
                                        (message !== "")?(
                                            <div className=" alert alert-success alert-dismissible fade show container mb-3"  role="alert" style={{backgroundColor:"green",borderRadius:5}}>
                                                <h6 className="text-center text-white mt-1" style={{fontSize:'0.9rem'}} >{message}</h6>
                                                <button type="button" className="close text-white" data-dismiss="alert" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                        ):
                                        (
                                            <div></div>
                                        )
                                    }
                                    <div className="container-fluid ">
                                        <form onSubmit={handleSubmit} >
                                            <h6 className="p-2 pb-3" style={{fontWeight:'600',fontSize:'1rem'}}>Insert your {name} link or embedded code </h6>
                                            <div className="form-group">
                                                <input type="text" name="link" id="link" required onChange={(event)=>setLink(`${event.target.value}`)} className="form-control register-inputs"  placeholder={"Enter url or embedded code"} />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="card_info" id="card_info" required  onChange={(event)=>setDescription(event.target.value)} className="form-control register-inputs"  placeholder="Enter Description" />
                                            </div>
                                            <input type="hidden" name="color" id="color" value={color} />

                                           
                                            <div className="form-group pt-3 text-center">
                                                <button className="btn-register" type="submit" disabled={saving}>
                                                    {(saving)?(<i className="fa fa-refresh fa-spin mr-3"></i>):("") }Add New Link
                                                </button>
                                            </div>
                                            <div className="form-group pt-2 text-center">
                                                <p style={{color:'red',fontWeight:'500'}}>The links you will add here will be displayed on your <strong>Links Card</strong>.</p>
                                            </div>
                                        </form>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div>

            {/*  Modal */}   
        </>
    )
}
