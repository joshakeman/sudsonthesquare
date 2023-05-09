import React, { useState } from 'react'
import { Link } from "gatsby"
// Image imports
import beer from '../images/beer.png'

import StationaryFlightMenu from '../components/stationaryFlightMenu'
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

    render() {
        return (
            <div className="brews-background">
                <StationaryFlightMenu />
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
                <h3 className="brews-subtitle">Anderby</h3>
                <h3 className="brews-subtitle">Anheuser-Busch</h3>
                <h3 className="brews-subtitle">Beacon Brewery Co</h3>
                <h3 className="brews-subtitle">Bell's Brewery</h3>
                <h3 className="brews-subtitle">Bold Rock Hard Cider</h3>
                <h3 className="brews-subtitle">Burnt Hickory Brewing</h3>
                <h3 className="brews-subtitle">Camp Brewing</h3>
                <h3 className="brews-subtitle">Cigar City Brewing</h3>
                <h3 className="brews-subtitle">Coastal Empire</h3>
                <h3 className="brews-subtitle">Cochran Mills</h3>
                <h3 className="brews-subtitle">Contrast Artisan Ales</h3>
                <h3 className="brews-subtitle">Dry County Brewing Co</h3>
                <h3 className="brews-subtitle">Fall Line Brewing</h3>
                <h3 className="brews-subtitle">Favorita Beer</h3>
                <h3 className="brews-subtitle">Fire Maker Brewing Co</h3>
                <h3 className="brews-subtitle">Halfway Crooks</h3>
                <h3 className="brews-subtitle">Jekyll Brewing</h3>
                <h3 className="brews-subtitle">Line Creek Brewing Co</h3>
                <h3 className="brews-subtitle">McKenzies's</h3>
                <h3 className="brews-subtitle">Mercier Orchards</h3>
                <h3 className="brews-subtitle">Monday Night Brewing</h3>
                <h3 className="brews-subtitle">Oskar Blues Brewery</h3>
                <h3 className="brews-subtitle">Reformation Brewery</h3>
                <h3 className="brews-subtitle">Round Trip Brewing Co</h3>
                <h3 className="brews-subtitle">Senoia Beer</h3>
                <h3 className="brews-subtitle">Service Brewing Co</h3>
                <h3 className="brews-subtitle">Six Bridges Brewing Co</h3>
                <h3 className="brews-subtitle">Southern Tier Brewing Co</h3>
                <h3 className="brews-subtitle">Steady Hand Beer Co</h3>
                <h3 className="brews-subtitle">Three Taverns Craft Brewery</h3>
                <h3 className="brews-subtitle">Variant Brewing Co</h3>
                <h3 className="brews-subtitle">Wild Leap Brew Co</h3>
                    {/* <a href="https://linecreekbrewing.com/" target="_blank">
                        <div className="brew-logo" id="linecreek-logo" />
                    </a>
                    <a href="https://www.facebook.com/AbideBrewing/" target="_blank">
                        <div className="brew-logo" id="abide-logo"/>
                    </a>
                    <a href="https://www.yuengling.com/" target="_blank">
                        <div className="brew-logo" id="yeungling-logo"/>
                    </a>
                    <a href="https://www.beacon.beer/" target="_blank">
                        <div className="brew-logo" id="beacon-logo"/>
                    </a>
                    <a href="https://www.cochranmillbrewing.com/" target="_blank">
                        <div className="brew-logo" id="cochran-logo"/>
                    </a>
                    <a href="https://www.deschutesbrewery.com/" target="_blank">
                        <div className="brew-logo" id="deschutes-logo"/>
                    </a>
                    <a href="https://drycountybrewco.com/" target="_blank">
                        <div className="brew-logo" id="drycounty-logo"/>
                    </a>
                    <a href="https://www.firemakerbeer.com/" target="_blank">
                        <div className="brew-logo" id="firemaker-logo"/>
                    </a>
                    <a href="https://www.jekyllbrewing.com/" target="_blank">
                        <div className="brew-logo" id="jekyll-logo"/>
                    </a>
                    <a href="https://mckenziebrewing.com/" target="_blank">
                        <div className="brew-logo" id="mckenzie-logo"/>
                    </a>
                    <a href="https://mondaynightbrewing.com/" target="_blank">
                        <div className="brew-logo" id="mondaynight-logo"/>
                    </a>
                    <a href="https://www.newbelgium.com/" target="_blank">
                        <div className="brew-logo" id="newbelgium-logo"/>
                    </a>
                    <a href="https://www.redharebrewing.com/" target="_blank">
                        <div className="brew-logo" id="redhare-logo"/>
                    </a>
                    <a href="https://stbcbeer.com/" target="_blank">
                        <div className="brew-logo" id="stbc-logo"/>
                    </a>
                    <a href="https://www.wildleap.com/" target="_blank">
                        <div className="brew-logo" id="wildleap-logo"/>
                    </a> */}
                </div>

                {/* <img className="invisible-images" src={abide} />
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
                <img className="invisible-images" src={wildLeap} /> */}
            </div>
        )
    }
}

export default Brews
