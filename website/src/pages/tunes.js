import React, { useState } from 'react'
import guitar from '../images/guitar.png'
import singer from '../images/Goodfellas.jpg'
import MustacheMenu from '../components/mustacheMenu'
import StationaryFlightMenu from '../components/stationaryFlightMenu'

import menuButton from '../images/menu-button.png'
import '../styles/home.css'

export default function Tunes() {
    const [isOpen, setOpen] = useState(false)

    let toggleMenu = () => {
        console.log("toggling menu")
        setOpen(!isOpen)
    }

    return (
        <>
        <div className="facts-background">
            <StationaryFlightMenu/>            
            <div className="facts-header" id="tunes-header">
                <div className="logo-wrapper">
                    <h1 className="tunes-title">TUNES</h1>
                    <img src={guitar} id="guitar" />
                </div>
                <h2 className="tunes-subtitle">
                    Live Music on <br></br>
                    the Old Courthouse Square
                </h2>
            </div>
            <div className="tunes-content">
                <div className="singer-photo">
                    <img src={singer} />
                </div>
                <div className="description-sheet">
                    <h4 className="tunes-description-title">
                        Goodfellas
                    </h4>
                    <p className="tunes-description">
The Goodfellas members are Wallace Reed and Walter Hornsby. They have been performing together or over 10 years. Walter has performed with or recorded with these great artists:
·         John Mayer

·         Jeff Cook (Alabama Guitarist)

·         Bertie Higgins (Key Largo)

·         Billy Jo Royal (Down in the Boondocks)

·         Joe South

·         and Wallace’s son, Clay Cook with the Zack Brown Band
<br></br>

Walter Hornsby has performed with:

·         Chuck Berry

·         Charlie Daniels Band

·         Rufus Band

·         Chank La Kahn

·         Wet Willie

·         Allman Brothers

·         and Lou Reed
<br></br>
The Goodfellas play a wide assortment of great music: Motown, Classic Rock, Van Morrison, Eric Clapton and many more.
<br></br><br></br>
<h4>Bourbon Tumbleweed</h4>

Welcome to the wild world of bourbon Tumbleweed. This band is a rock rhythm and blues Collective made up of veteran Musicians from the Atlanta music scene!
Make sure to bring your dancing shoes and hoist your beers , these guys will keep you moving and grooving all night long!!!!

This is a great party band that you don’t want to miss!!!                    
                    </p>
                </div>
            </div>

            <div className="tunes-mobile-content">
                <div className="mobile-paper-wrapper-other">
                    {/* <StationaryFlightMenu/> */}
                    <div className="tunes-mobile-header">
                        <div className="logo-wrapper">
                            <h1 className="tunes-title">TUNES</h1>
                            <img src={guitar} id="guitar" />
                        </div>
                        <h2 className="tunes-subtitle">
                            Live Music on <br></br>
                            the Old Courthouse Square
                        </h2>
                    </div>
                    <div className="tunes-content-mobile">
                        <div className="singer-photo">
                            <img src={singer} />
                        </div>
                        <div>
                            <p className="tunes-description">
                            <h4 className="tunes-description-title">
                        Goodfellas
                    </h4>
The Goodfellas members are Wallace Reed and Walter Hornsby. They have been performing together or over 10 years. Walter has performed with or recorded with these great artists:
·         John Mayer

·         Jeff Cook (Alabama Guitarist)

·         Bertie Higgins (Key Largo)

·         Billy Jo Royal (Down in the Boondocks)

·         Joe South

·         and Wallace’s son, Clay Cook with the Zack Brown Band
<br></br>

Walter Hornsby has performed with:

·         Chuck Berry

·         Charlie Daniels Band

·         Rufus Band

·         Chank La Kahn

·         Wet Willie

·         Allman Brothers

·         and Lou Reed
<br></br>
The Goodfellas play a wide assortment of great music: Motown, Classic Rock, Van Morrison, Eric Clapton and many more.
<br></br><br></br>
<h4>Bourbon Tumbleweed</h4>

Welcome to the wild world of bourbon Tumbleweed. This band is a rock rhythm and blues Collective made up of veteran Musicians from the Atlanta music scene!
Make sure to bring your dancing shoes and hoist your beers , these guys will keep you moving and grooving all night long!!!!

This is a great party band that you don’t want to miss!!!                              </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
