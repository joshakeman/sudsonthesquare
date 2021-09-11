import React, { useState } from 'react'
import mustache from '../images/mustache.png'

import contact from '../images/contact.png'
import faq from '../images/faq.png'
import hosts from '../images/hosts.png'
import links from '../images/links.png'
import map from '../images/map.png'
import sponsors from '../images/sponsors.png'

import Gallery from '../components/gallery'

import menuButton from '../images/menu-buton.png'
import '../styles/home.css'

export default function Pix() {

    const [showMenu, toggleMenu] = useState(false);
    const [showMobileMenu, toggleMobileMenu] = useState(false);

    return (
        <div className="facts-background">
            {/* <div className="mobile-menu-button-wrapper">
                <img className="mobile-menu-button" src={menuButton} onClick={openMenu} />
            </div> */}
                <div className="facts-header">
                    <img className="mobile-menu-button-other" src={menuButton} onClick={() => toggleMenu(!showMenu)} />

                    <div className="logo-wrapper">
                        <h1 className="facts-title">PIX</h1>
                        <img src={mustache} className="mustache" />
                    </div>
                    <h3 className="pix-subtitle">
                        With Trilith studios just down the road, <br></br>
                        it's not impossible a fimiliar face <br></br>
                        might just show up unannounced
                    </h3>
                </div>
            <Gallery />
        </div>
    )
}
