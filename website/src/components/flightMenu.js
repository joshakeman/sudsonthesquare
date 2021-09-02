import React from 'react'
import flight from '../images/flight-menu.png'
import { Link } from "gatsby"

export default function flightMenu({ open }) {

    return (
        <>
        {
            open ? (
                <div className="flight-menu flighted">
                    <img src={flight} />
                </div>
            ) : (
                <div className="flight-menu">
                    <img src={flight} />
                    {/* <Link to="/">
                        <div id="tix-flight-btn" style={{backgroundColor:'red', width:"100%", position:'absolute', bottom: 40, height: 60, opacity: 0.6}} />
                    </Link>
                    <Link to="/pix">
                        <div id="pix-flight-btn" style={{backgroundColor:'yellow', width:"100%", position:'absolute', bottom: 100, height: 60, opacity: 0.6}} />
                    </Link>
                    <Link to="/tunes">
                        <div id="tunes-flight-btn" style={{backgroundColor:'green', width:"100%", position:'absolute', bottom: 160, height: 60, opacity: 0.6}} />
                    </Link>
                    <Link to="/brews">
                        <div id="brews-flight-btn" style={{backgroundColor:'blue', width:"100%", position:'absolute', bottom: 220, height: 60, opacity: 0.6}} />
                    </Link>
                    <Link to="/swag">
                        <div id="swag-flight-btn" style={{backgroundColor:'orange', width:"100%", position:'absolute', bottom: 280, height: 60, opacity: 0.6}} />
                    </Link>
                    <Link to="/facts">
                        <div to="/facts" id="facts-flight-btn" style={{backgroundColor:'purple', width:"100%", position:'absolute', bottom: 340, height: 60, opacity: 0.6}} />
                    </Link> */}
                </div>
            )
        }
        </>
    )
}
