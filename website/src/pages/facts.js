import React from 'react'
import bottles from '../images/bottles.png'

import contact from '../images/contact.png'
import faq from '../images/faq.png'
import hosts from '../images/hosts.png'
import links from '../images/links.png'
import map from '../images/map.png'
import sponsors from '../images/sponsors.png'
import '../styles/home.css'

export default function facts() {
    return (
        <div className="background">
            <div className="body">
                <div className="facts-header">
                    <img src={bottles} className="beer" />
                    <h1 className="facts-title">FACTS</h1>
                </div>
                <div className="caps-container">
                    <img src={contact} className="bottle-cap cap1" />
                    <img src={faq} className="bottle-cap cap2" />
                    <img src={hosts} className="bottle-cap cap3" />
                    <img src={links} className="bottle-cap cap4" />
                    <img src={map} className="bottle-cap cap5" />
                    <img src={sponsors} className="bottle-cap cap6" />
                </div>
            </div>
        </div>
    )
}
