import React, { useState } from 'react'
import { Link } from "gatsby"
// Image imports
import beer from '../images/beer.png'
import abitaBrown from '../images/abita-brown.png'
import abitaColor from '../images/abita-color.png'
import jailhouseBrown from '../images/jailhouse-brown.png'
import jailhouseColor from '../images/jailhouse-color.png'
import wildleapBrown from '../images/wildleap-brown.png'
import wildleapColor from '../images/wildleap-color.png'

import menuButton from '../images/menu-button.png'
import '../styles/home.css'

import abide from '../images/brew-logos/abide.png'
import yeungling from '../images/brew-logos/1200px-Yuengling_logo.svg.png'
import beacon from '../images/brew-logos/beacon.jpg'
import cochran from '../images/brew-logos/cochranmillbrewingcompany.png'
import deschutes from '../images/brew-logos/DeschutesBreweryLogoRed.png'
import drycounty from '../images/brew-logos/drycounty.png'
import firemaker from '../images/brew-logos/firemaker.png'
import jekyll from '../images/brew-logos/jekyll.png'
import linecreek from '../images/brew-logos/line_creek_logo_512x512.png'
import mckenzie from '../images/brew-logos/mckenzie.png'
import mondaynight from '../images/brew-logos/mondaynight.jpg'
import newbelgium from '../images/brew-logos/nb-logo-best.png'
import redhare from '../images/brew-logos/red\ hare.png'
import stbc from '../images/brew-logos/stbc_crest-logo.png'
import wildLeap from '../images/brew-logos/wild_leap.png'

class Brews extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            abita: abitaBrown,
            jailhouse: jailhouseBrown,
            wildleap: wildleapBrown,
            open: false
        }
    }

    changeImage = (img) => {
        if (img === 'abita') {
            this.setState({
                abita: abitaColor
            })
        }
    }

    openMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }
   

    render() {
        const { abita, wildleap, jailhouse } = this.state
        return (
            <div className="brews-background">
                {/* <div className="mobile-menu-button-wrapper">
                    <img className="mobile-menu-button" src={menuButton} onClick={this.openMenu} />
                </div> */}
                <div className="brews-header">
                    <img src={beer} className="beer" />
                    <h1 className="brews-title">BREWS</h1>
                </div>
                <h3 className="brews-subtitle">
                a selection of the breweries <br></br>
                that will be serving up their <br></br>
                amazing concoctions
                </h3>
                <div className="brew-logo-container">
                    <div className="brew-logo" id="abide-logo">
                        
                    </div>
                    <div className="brew-logo" id="yeungling-logo">
                        
                    </div>
                    <div className="brew-logo" id="beacon-logo">
                        
                    </div>
                    <div className="brew-logo" id="cochran-logo">
                        
                    </div>
                    <div className="brew-logo" id="deschutes-logo">
                        
                    </div>
                    <div className="brew-logo" id="drycounty-logo">
                        
                    </div>
                    <div className="brew-logo" id="firemaker-logo">
                        
                    </div>
                    <div className="brew-logo" id="jekyll-logo">
                        
                    </div>
                    <div className="brew-logo" id="linecreek-logo">
                        
                    </div>
                    <div className="brew-logo" id="mckenzie-logo">
                        
                    </div>
                    <div className="brew-logo" id="mondaynight-logo">
                        
                    </div>
                    <div className="brew-logo" id="newbelgium-logo">
                        
                    </div>
                    <div className="brew-logo" id="redhare-logo">
                        
                    </div>
                    <div className="brew-logo" id="stbc-logo">
                        
                    </div>
                    <div className="brew-logo" id="wildleap-logo">
                        
                    </div>
                </div>

                <div className={"menu-paper " + (this.state.open ? "menu-paper-open" : "")}>
                    {/* <div className="mobile-menu-text">
                        <Link to="/brews">BREWS</Link>
                        <Link>TUNES</Link>
                        <Link>PIX</Link>
                        <Link>SWAG</Link>
                        <Link to="/facts">FACTS</Link>
                        <Link>TIX</Link>
                    </div> */}
                </div>

                <img className="invisible-images" src={abide} />
                <img className="invisible-images" src={yeungling} />
                <img className="invisible-images" src={beacon} />
                <img className="invisible-images" src={cochran} />
                <img className="invisible-images" src={deschutes} />
                <img className="invisible-images" src={drycounty} />
                <img className="invisible-images" src={firemaker} />
                <img className="invisible-images" src={jekyll} />
                <img className="invisible-images" src={linecreek} />
                <img className="invisible-images" src={mckenzie} />
                <img className="invisible-images" src={mondaynight} />
                <img className="invisible-images" src={newbelgium} />
                <img className="invisible-images" src={redhare} />
                <img className="invisible-images" src={stbc} />
                <img className="invisible-images" src={wildLeap} />
            </div>
        )
    }
}

export default Brews
