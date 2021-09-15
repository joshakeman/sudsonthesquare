import React from 'react'
import StationaryFlightMenu from '../components/stationaryFlightMenu'
import guitar from '../images/guitar.png'

export default function BrickPaperLayout({ children, subtitle, title }) {
    return (
        <div className="brickpaper-background">
            <StationaryFlightMenu />
            {/* <div className="facts-header" >
                <div className="logo-wrapper">
                    <h1 className="tunes-title">TUNES</h1>
                    <img src={guitar} id="guitar" />
                </div>
                <h2 className="tunes-subtitle">
                    Live Music on <br></br>
                    the Old Courthouse Square
                </h2>
            </div> */}
            <div className="long-paper-bg">
                {children}
            </div> 
        </div>
    )
}
