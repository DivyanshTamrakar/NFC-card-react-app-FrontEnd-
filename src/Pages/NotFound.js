import React from 'react';
import './NotFound.css';
import NavbarTop from '../components/NavbarTop';
import Footer from '../components/Footer';
import {useHistory} from 'react-router-dom';

export default function NotFound() {
    const history = useHistory();
    const goBack=()=>{
        history.push('/');
    }
    return (
        <>
           <NavbarTop />
            <div className="container-fluid text-center">
            <div className="error-card px-5 py-5">
                <h1 className="not-found">404</h1>
                <h3>Oops, Page you are looking for is not found</h3>
                <div className="text-center mt-4 mb-5"> <button className="btn btn-success send px-3" onClick={goBack} ><i className="fa fa-long-arrow-left mr-1" /> Back to home page</button> </div>
            </div>
            </div>
           <Footer/>  
        </>
    )
}
