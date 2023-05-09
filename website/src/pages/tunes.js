import React, { useState } from 'react'
import guitar from '../images/guitar.png'
import collage from '../images/bands/2023/collage.png'
import singer2 from '../images/bands/2023/1.jpg'
import singer3 from '../images/bands/2023/2.jpg'
import singer4 from '../images/bands/2023/3.jpg'
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
            {/* <div className="singer-box" style={{display:'flex', flexDirection:'column'}}> */}
                <div className="singer-photo">
                    <img src={collage} />
                </div>
                {/* <div className="singer-photo">
                    <img src={singer2} />
                </div>
                <div className="singer-photo">
                    <img src={singer3} />
                </div>
                <div className="singer-photo">
                    <img src={singer4} />
                </div> */}
                {/* </div> */}
                <div className="description-sheet">
                    <h4 className="tunes-description-title">
                        Mary Martin
                    </h4>
                    <p className="tunes-description">
                    Mary is a singer/songwriter from Newnan, GA that specializes in creating a harmonious blend of guitar and voice.  Her writing and playing style spans across genres; all the way from country and blues, rock and alternative, to Americana and R&B.  Mary released her newest single, Pray, in April of this year with Real2Reel Studios, and can be found playing in the metro-Atlanta area every weekend!
                    </p>
<h4 className="tunes-description-title">John Hensley & Patrick Thompson</h4>
<p className="tunes-description">
John was born and raised in Newnan. He is a self-taught guitarist and learned to play while serving in Iraq in 2007. He loves a variety of music and is a huge fan of singer/songwriters. John supplies main vocals and rhythm guitar.
Patrick is a local school music director and multi instrumentalist. He plays guitar, bass, piano, banjo, violin, and nearly anything else that can make a sound! He adds incredible vocal harmonies and melodic solos to create the sound that has made their band “Liberty Road” a local favorite in the Newnan scene.                   
                    </p>
                    <h4 className="tunes-description-title">Spectrum</h4>
<p className="tunes-description">
Spectrum is a classic rock band whose core has been playing together since the early 80’s. The band formed in a basement in Dunwoody, Georgia, learning the Top-40 hits and songs they liked from the 60’s and 70’s. Spectrum began playing at bars, parties, and proms, as well as travelling out-of-state to perform during their college years. After a hiatus, they reformed in 2010, adding a couple of young musicians to expand the depth of the music that they have been playing regularly since. Spectrum has five members who sing lead. They enjoy filling out their sound with three and four part harmonies, bringing 60’s, 70’s, and 80’s music to life, and sharing the energy and love they bring to the stage with the audience.                  
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
                        {/* <div className="singer-box" style={{display:'flex', flexDirection:'column'}}> */}
                            {/* <div className="singer-photo">
                                <img src={collage} />
                            </div> */}
                            {/* <div className="singer-photo">
                                <img src={singer2} />
                            </div>
                            <div className="singer-photo">
                                <img src={singer3} />
                            </div>
                            <div className="singer-photo">
                                <img src={singer4} />
                            </div> */}
                        {/* </div> */}
                        <div>
                        <h4 className="tunes-description-title">
                        Mary Martin
                    </h4>
                    <p className="tunes-description">
                    Mary is a singer/songwriter from Newnan, GA that specializes in creating a harmonious blend of guitar and voice.  Her writing and playing style spans across genres; all the way from country and blues, rock and alternative, to Americana and R&B.  Mary released her newest single, Pray, in April of this year with Real2Reel Studios, and can be found playing in the metro-Atlanta area every weekend!
                    </p>
<h4 className="tunes-description-title">John Hensley & Patrick Thompson</h4>
<p className="tunes-description">
John was born and raised in Newnan. He is a self-taught guitarist and learned to play while serving in Iraq in 2007. John supplies main vocals and rhythm guitar.
Patrick is a local school music director. He plays guitar, bass, piano, banjo, violin, and nearly anything else that can make a sound!                 
                    </p>
                    <h4 className="tunes-description-title">Spectrum</h4>
<p className="tunes-description">
Spectrum is a classic rock band whose core has been playing together since the early 80’s. The band formed in a basement in Dunwoody, Georgia, learning the Top-40 hits and songs they liked from the 60’s and 70’s. Spectrum began playing at bars, parties, and proms, as well as travelling out-of-state to perform during their college years. After a hiatus, they reformed in 2010, adding a couple of young musicians to expand the depth of the music that they have been playing regularly since.               
                    </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
