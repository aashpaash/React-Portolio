import React from 'react';
import github from '../assets/icons/github-logo.png';
import linkedin from '../assets/icons/linkedin.png';
function Footer() {
    return (
        <div className="mt -auto" style= {{position: "fixed", bottom: "0", width: "100%"}}>
            <div> <p>&copy; 2023 AP</p> </div>
           <div onClick={event => window.open('https://github.com/aashpaash')}><img src={github} alt="github"></img></div>
           <div onClick={event => window.open('https://www.linkedin.com/feed/')}><img src={linkedin} alt="linkedin"></img></div>
        </div>
       
    

    )
}

export default Footer;