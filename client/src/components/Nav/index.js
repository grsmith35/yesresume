import React, { useState } from 'react';
import image from '../../assets/images/yes-oval-white.png';
import auth from '../../utils/auth';

export default function Nav() {

    const handleLogout = (event) => {
        event.preventDefault();
        auth.logout();
    }

//     return(
//         <div className="px-1 py-2 bg-dark text-white headerborder">
//             <div className="container">
//                 <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start row">
//                     <a href="/Home" className="mr-1 col-md-2 align-self-start">
//                         <img src={image} alt="YES Logo" />
//                     </a>
//                     <h1 className="d-flex align-items-center my-2 my-lg-0 text-white col-md-4 align-self-center">Resume Builder</h1>
//                 </div>
//                 {auth.loggedIn() && (<div className='d-flex flex-wrap align-items-end row'>
//                     <button className='btn btn-secondary align-self-end col-md-1' onClick={handleLogout}>Log Out</button>
//                 </div>)}
//             </div>
//         </div>
//     )
// }
    return (
        <div className="px-1 py-2 bg-dark text-white headerborder">
            <div className="container">
                <div className="row">
                    <a href="/Home" className="mr-1 col-md-2">
                        <img src={image} alt="YES Logo" />
                    </a>
                    <h1 className="d-flex align-items-center my-2 my-lg-0 text-white col-md-7 align-self-center">Resume Builder</h1>
                
                    {auth.loggedIn() && (<div className='col-md-2'>
                        <button className='btn btn-secondary' onClick={handleLogout}>Log Out</button>
                    </div>)}
                </div>
            </div>
        </div>
    )
}