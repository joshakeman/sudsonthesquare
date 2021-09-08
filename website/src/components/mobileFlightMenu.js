import React from 'react'
import flight from '../images/flight-menu.png'
import { Link } from "gatsby"

export default function mobileFlightMenu({ open }) {

    return (
        <>
        {
            open ? (
                <div className="mobile-flight-menu mobile-flighted">
                    {/* <img src={flight} /> */}
                    <Link className="menu-link" id="big-menu-link" to="/">
                        <div id="tix-flight-btn" className="flight-btn" />
                    </Link>
                    <Link className="menu-link" to="/pix">
                        <div id="pix-flight-btn" className="flight-btn" />
                    </Link>
                    <Link className="menu-link" to="/tunes">
                        <div id="tunes-flight-btn" className="flight-btn" />
                    </Link>
                    <Link className="menu-link" to="/brews">
                        <div id="brews-flight-btn" className="flight-btn" />
                    </Link>
                    <Link className="menu-link" to="/swag">
                        <div id="swag-flight-btn" className="flight-btn" />
                    </Link>
                    <Link className="menu-link" to="/facts">
                        <div to="/facts" id="facts-flight-btn" className="flight-btn" />
                    </Link>
                </div>
            ) : (
                <div className="mobile-flight-menu">

                    {/* <img src={flight} /> */}
                </div>
            )
        }
        </>
    )
}
