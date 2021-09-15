import React, { useState } from 'react'
import guitar from '../images/guitar.png'
import singer from '../images/singing-lady.png'
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
                    <h3 className="tunes-description-title">
                        Donna Hopkins Band
                    </h3>
                    <p className="tunes-description">
                    Donna Hopkins is the real deal. Born and raised on an Alabama farm, Donna witnessed life in the South first hand, channeling it into the soulful music that she creates and performs. Music runs in her family; her mother performed rock and roll in go-go boots and mini-skirts and her grandfather was a fine musician in his own right. Donna is a consummate seasoned songwriter and performer, and has opened for and shared the stage with such luminaries as Col. Bruce Hampton, Derek Trucks, Francine Reed, Joe Bonamassa, Emily Saliers, Jerry Lee Lewis, Stevie Wonder, Tanya Tucker and Robert Cray. As much at home in an intimate listening venue as she is on a giant festival stage, Donna Hopkins performs both solo and accompanied by the perfectly seasoned group of musicians who make up the Donna Hopkins Band, and is always a crowd pleaser.
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
                            <h3 className="tunes-description-title">
                                Donna Hopkins Band
                            </h3>
                            <p className="tunes-description">
                            Donna Hopkins is the real deal. Born and raised on an Alabama farm, Donna witnessed life in the South first hand, channeling it into the soulful music that she creates and performs. Music runs in her family; her mother performed rock and roll in go-go boots and mini-skirts and her grandfather was a fine musician in his own right. Donna is a consummate seasoned songwriter and performer, and has opened for and shared the stage with such luminaries as Col. Bruce Hampton, Derek Trucks, Francine Reed, Joe Bonamassa, Emily Saliers, Jerry Lee Lewis, Stevie Wonder, Tanya Tucker and Robert Cray. As much at home in an intimate listening venue as she is on a giant festival stage, Donna Hopkins performs both solo and accompanied by the perfectly seasoned group of musicians who make up the Donna Hopkins Band, and is always a crowd pleaser.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
