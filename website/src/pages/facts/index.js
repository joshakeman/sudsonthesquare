import React from 'react'
import bottles from '../../images/bottles-brad.png'

import contact from '../../images/bottle-caps/contact.png'
import faq from '../../images/bottle-caps/FAQ.png'
import events from '../../images/bottle-caps/events-cap.png'
import hosts from '../../images/bottle-caps/HOSTS.png'
import links from '../../images/bottle-caps/Links.png'
import map from '../../images/bottle-caps/map.png'
import sponsors from '../../images/bottle-caps/SponsorS.png'

import StationaryFlightMenu from '../../components/stationaryFlightMenu'
import '../../styles/home.css'
import { Link } from "gatsby"

export default function facts() {

    const openMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }

    return (
        <div className="facts-background" id="cement-bg">
            <StationaryFlightMenu />
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
                    <Link to="/facts/sponsors">
                        <img src={sponsors} id="sponsors-cap" />
                    </Link>
                    <Link to="/facts/faq">
                        <img src={faq} id="faq-cap" />
                    </Link>
                    <Link to="/facts/events">
                        <img src={events} id="events-cap" />
                    </Link>
                </div>
                <div className="caps-bottom-row">
                    <a href="mailto:kiwanisfayco@gmail.com">
                        <img src={contact} id="contact-cap" />
                    </a>
                    <Link to="/facts/hosts">
                        <img src={hosts} id="hosts-cap" />
                    </Link>
                    <Link to="/facts/links">
                        <img src={links} id="links-cap" />
                    </Link>
                    <img src={map} id="map-cap" />
                </div>
            </div>
        </div>
    )
}
