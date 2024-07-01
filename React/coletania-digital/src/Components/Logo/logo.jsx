import React from 'react'
import './logo.css'

import LogoIcon from '../../Assets/logoIcon.png'

export const Logo = () => {
    return(
        <div className="logo">
            <img src={LogoIcon} alt="logo" />
            <div className="textLogo">
                <p>Filmes</p>
                <p>Colections</p>
            </div>
        </div>
    )
}

export default Logo