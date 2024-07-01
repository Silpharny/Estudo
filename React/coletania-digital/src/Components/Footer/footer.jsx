import React from "react";
import Logo from '../Logo/logo'

import './footer.css'

export const Footer = () => {
    return(
        <div className="footer">
            <div className="logoClass">
                <Logo />
            </div>
            <div className="info">
                <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
                <p>Call us now toll free: (800)2345-6789</p>
                <p>Customer support: support@demolink.org</p>
                <p>Skype: sample-username</p>
            </div>
        </div>
    )
}

export default Footer