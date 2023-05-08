import React from 'react';
import headshoot from '../assets/headshots/gshoot.jpg';

function Header(props) {
    const changePage = (page) => {
        props.changePage(page);
    };

    return (
        <nav className="header">
            <div className="containerMain headerflex">
                <div className="logo" onClick={() => changePage('about')}>
                    <img src={headshoot}  width="100%" alt="AP Headshoot"></img>
                </div>
            </div>
        </nav>
    );
}


export default Header;
