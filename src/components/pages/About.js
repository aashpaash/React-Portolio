import React from 'react';
import Me from '../../assets/headshots/AFShoot.jpeg';

function About() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>I'm AP It's nice to meet you👋🏾. I am a full stack developer student.</h1>
                </div>
            </div>
            <div className="col">
                <img src={Me} alt="AP" width="100%"></img>
            </div>
        </div>
    )
}

export default About;