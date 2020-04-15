import React from 'react'
// Image imports
import beer from '../images/beer.png'
import abita from '../images/abita-brown.png'
import jailhouse from '../images/jailhouse-brown.png'
import wildleap from '../images/wildleap-brown.png'

import '../styles/brews.css'

export default function brews() {
    return (
        <div className="brews-background">
            <div className="brews-body">
                <div className="brews-header">
                    <img src={beer} className="beer" />
                    <h1 className="brews-title">Brews</h1>
                </div>
                <h3 className="brews-subtitle">
                a selection of the breweries <br></br>
                that will be serving up their <br></br>
                amazing concoctions
                </h3>
                <div className="logo-container">
                    <img src={abita} />
                    <img src={wildleap} />
                    <img src={jailhouse} />
                </div>
            </div>
            
        </div>
    )
}
