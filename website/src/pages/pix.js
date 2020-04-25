import React from 'react'
import bottles from '../images/bottles.png'

import contact from '../images/contact.png'
import faq from '../images/faq.png'
import hosts from '../images/hosts.png'
import links from '../images/links.png'
import map from '../images/map.png'
import sponsors from '../images/sponsors.png'

import Slider from '../components/Slider'

import menuButton from '../images/menu-button.png'
import '../styles/home.css'

export default function pix() {

    const openMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }

    return (
        <div className="facts-background">
            <div className="mobile-menu-button-wrapper">
                <img className="mobile-menu-button" src={menuButton} onClick={openMenu} />
            </div>
            <div className="body">
                <div className="facts-header">
                    <div className="logo-wrapper">
                        <h1 className="facts-title">PIX</h1>
                        <img src={bottles} className="beer" />
                    </div>
                    <h3 className="pix-subtitle">
                        With pinewood studios just down the road, <br></br>
                        it's not impossible a fimiliar face <br></br>
                        might just show up unannounced
                    </h3>
                </div>
            </div>
            <Slider />
        </div>
    )
}
