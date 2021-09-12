import React from 'react'
import bottles from '../../images/bottles-brad.png'

import contact from '../../images/bottle-caps/contact.png'
import faq from '../../images/bottle-caps/FAQ.png'
import events from '../../images/bottle-caps/events-cap.png'
import hosts from '../../images/bottle-caps/HOSTS.png'
import links from '../../images/bottle-caps/Links.png'
import map from '../../images/bottle-caps/map.png'
import sponsors from '../../images/bottle-caps/SponsorS.png'

import menuButton from '../../images/menu-button.png'
import '../../styles/home.css'

export default function facts() {

    const openMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }

    return (
        <div className="facts-background" id="cement-bg">
            {/* <div className="mobile-menu-button-wrapper">
                <img className="mobile-menu-button" src={menuButton} onClick={openMenu} />
            </div> */}
            <div className="facts-header">
                <div className="logo-wrapper">
                    <img src={bottles} className="bottles" />
                    <h1 className="facts-title">FACTS</h1>
                </div>
                <h3 className="facts-subtitle">
                    Other Stuff You Might Want to Know
                </h3>
            </div>
            <div className="caps-container">
                <div className="caps-top-row">
                    <img src={sponsors} id="sponsors-cap" />
                    <img src={faq} id="faq-cap" />
                    <img src={events} id="events-cap" />
                </div>
                <div className="caps-bottom-row">
                    <img src={contact} id="contact-cap" />
                    <img src={hosts} id="hosts-cap" />
                    <img src={links} id="links-cap" />
                    <img src={map} id="map-cap" />
                </div>
            </div>
        </div>
    )
}
