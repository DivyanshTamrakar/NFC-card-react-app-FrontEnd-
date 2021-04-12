import React,{useState,useEffect} from 'react';
import './MyAccount.css';
import Sidebar from '../components/Sidebar';
import {useHistory} from 'react-router-dom';
import DashNav from '../components/DashNav';
import {URL} from '../config/config';

export default function MyAccount() {
    const history = useHistory();
    const [saving,setSaving] = useState(false);
    const [savingPassword,setSavingPassword] = useState(false);
    // 
    const [email,setEmail]=useState("");
    const [username,setUsername]=useState("");
    // 
    const [message,setMessage]=useState("");
    const [passwordChange,setPasswordChange]=useState("");
    const [passwordChangeError,setPasswordChangeError]=useState("");
    // 
    const [cp,setCurrentPassword]=useState("");
    const [np,setNewPassword]=useState("");
    const [cfp,setConfirmPassword]=useState("");

    useEffect(() => {
        if(localStorage.getItem('app-access-token')===null){
            history.push("/signin");
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
            setEmail(data.data.email),
            setUsername(data.data.username)
            )
          )
    }, [])

    var submitForm = (event)=>{
        event.preventDefault();
        setSaving(true);
        fetch(`${URL}/users/account-update`,{
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("app-access-token")
            },
            body:JSON.stringify({
                email:email,
                username:username
            })
          })
          .then(response=>response.json())
          .then(data=>(           
            setSaving(false),
            setMessage(data.message)
            )
          )
    }
    var handleSubmit = (event)=>{
        event.preventDefault();
        setSavingPassword(true);
        fetch(`${URL}/users/account-password-reset`,{
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("app-access-token")
            },
            body:JSON.stringify({
                current_password:cp,
                new_password:np,
                confirm_password:cfp
            })
          })
          .then(response=>response.json())
          .then(data=>(           
            (data.status==="403")?(setPasswordChangeError(data.error),setSavingPassword(false)):(
                setPasswordChange(data.message),
                setSavingPassword(false)
            )
            )
          )
    }
 
    return (
        <>
            
            <Sidebar />
            <div style={{height:'110vh',overflowY:'scroll',border:'none'}}>
                
                 
               <DashNav />
                {/* My Account Section */}
                <div className="container p-3" >
                    <h3 className="text-center mt-4 text-heading">My Account</h3>

                   <div className="personal-information shadow">
                        <h5 className="sub-heading">Personal Information</h5>
                        <br/>
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
                        <form onSubmit={submitForm} >
                            
                           
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email"  className="form-control" id="email" onChange={(event)=>setEmail(event.target.value)} value={email} placeholder="knowcard@gmail.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text"  className="form-control"  onChange={(event)=>setUsername(event.target.value)}  id="username" value={username} placeholder="@knowcard" required />
                            </div>
                           
                            <button type="submit" className="btn btn-save mt-4 no-outline"> {(saving)?(<i className="fa fa-refresh fa-spin mr-3"></i>):("") }Save Details</button>
                            

                        </form>
                   </div>
                   <div className="account-action shadow">
                        <h5 className="sub-heading">Account Actions</h5>
                        <br/>
                            <button  data-toggle="modal" data-target="#passwordReset"  data-keyboard="false" data-backdrop="static" className="btn btn-reset no-outline">Reset Password</button>
                             {/*  Modal */}
                            <div className="modal fade p-0 m-0" id="passwordReset" tabIndex={-1} role="dialog" aria-labelledby="passwordResetLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg modal-open" style={{borderRadius:'none'}} role="document">
                                            <div className="modal-content " >
                                            <div className="modal-header">
                                                <h5 className="modal-title pl-2 " id="exampleModalLabel">Update Account Credentials</h5>
                                                <button type="button" className="close mr-1" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true"><i className="fa fa-times text-dark"></i></span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                               
                                                <div className="mt-3" style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                               
                                                    <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                                
                                                    <div className="container-fluid ">
                                                    {
                                                        (passwordChange !== "")?(
                                                            <div className=" alert alert-success alert-dismissible fade show container-fluid mb-3"  role="alert" style={{backgroundColor:"green",borderRadius:5}}>
                                                                <h6 className="text-center text-white mt-1" style={{fontSize:'1rem'}} >{passwordChange}</h6>
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
                                                        (passwordChangeError !== "")?(
                                                            <div className=" alert alert-danger alert-dismissible fade show container-fluid mb-3"  role="alert" style={{backgroundColor:"green",borderRadius:5}}>
                                                                <h6 className="text-center text-white mt-1" style={{fontSize:'1rem'}} >{passwordChangeError}</h6>
                                                                <button type="button" class="close text-white" data-dismiss="alert" aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                        ):
                                                        (
                                                            <div></div>
                                                        )
                                                    }
                                                        <form onSubmit={handleSubmit} >
                                                            {/* <h6 className="p-2 pb-3" style={{fontWeight:'600',fontSize:'1rem'}}></h6> */}
                                                            <div className="form-group">
                                                                <input type="text" name="link" id="link" required onChange={(event)=>setCurrentPassword(event.target.value)} className="form-control register-inputs"  placeholder={"Current Password"} />
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="password" name="card_info" id="card_info" required  onChange={(event)=>setNewPassword(event.target.value)} className="form-control register-inputs"  placeholder="New Password" />
                                                            </div>
                                                            <div className="form-group">
                                                                <input type="password" name="card_info" id="card_info" required  onChange={(event)=>setConfirmPassword(event.target.value)} className="form-control register-inputs"  placeholder="Confirm Password" />
                                                            </div>                                                        
                                                            <div className="form-group pt-3 text-center">
                                                                <button className="btn-register" type="submit" disabled={savingPassword}>
                                                                    {(savingPassword)?(<i className="fa fa-refresh fa-spin mr-3"></i>):("") }Update Password
                                                                </button>
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
                   </div>
                   <div className="account-action shadow">
                        <h5 className="sub-heading">Danger Zone</h5>
                        <br/>
                      
                        <button data-toggle="modal" data-target="#deleteAccount"  data-keyboard="false" data-backdrop="static" className="btn btn-delete no-outline">Delete Account</button>
                        {/*  Modal */}
                        <div className="modal fade p-0 m-0" id="deleteAccount" tabIndex={-1} role="dialog" aria-labelledby="passwordResetLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-lg modal-open" style={{borderRadius:'none'}} role="document">
                                            <div className="modal-content " style={{backgroundColor:"#F7E1E1"}} >
                                            <div className="modal-header" style={{backgroundColor:"#F7E1E1"}}>
                                                <h5 className="modal-title pl-2 text-dark " id="exampleModalLabel">Delete Account </h5>
                                                <button type="button" className="close mr-1" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true"><i className="fa fa-times text-dark"></i></span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                               
                                                <div className="mt-3" style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                               
                                                    <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                                                
                                                    <div className="container-fluid "style={{backgroundColor:"#F7E1E1"}}>
                                                   
                                                        <form onSubmit={handleSubmit} >
                                                            <h6 className=" pb-3 text-dark text-center" style={{fontWeight:'600',fontSize:'2rem'}}>
                                                                Are you sure, you want to delete account?
                                                            </h6>
                                                            
                                                                                                               
                                                            <div className="form-group pt-3 text-center">
                                                                <button className="btn btn-delete no-outline" type="submit" >
                                                                    Delete Account
                                                                </button>
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
                   </div>
                   <br/>
                </div>
            </div>  
        </>
    )
}
