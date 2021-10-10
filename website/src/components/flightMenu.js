import React from 'react'
import flight from '../images/flight-menu.png'
import { Link } from "gatsby"

export default function flightMenu({ open }) {

    return (
        <>
        {
            open ? (
                <div className="flight-menu flighted">
                    {/* <img src={flight} /> */}
                    <Link to="https://www.eventbrite.com/e/suds-on-the-square-oktoberfest-tickets-168951395171" >
                        <div id="tix-flight-btn" className="flight-btn" />
                    </Link>
                    <Link to="/pix">
                        <div id="pix-flight-btn" className="flight-btn" />
                    </Link>
                    <Link to="/tunes">
                        <div id="tunes-flight-btn" className="flight-btn" />
                    </Link>
                    <Link to="/brews">
                        <div id="brews-flight-btn" className="flight-btn" />
                    </Link>
                    <Link to="/swag">
                        <div id="swag-flight-btn" className="flight-btn" />
                    </Link>
                    <Link to="/facts">
                        <div to="/facts" id="facts-flight-btn" className="flight-btn" />
                    </Link>
                </div>
            ) : (
                <div className="flight-menu">

                    {/* <img src={flight} /> */}
                </div>
            )
        }
        </>
    )
}
