import React from 'react'
import { Link } from "gatsby"

export default function StationaryFlightMenu() {
    return (
        <div className="stationary-flight-menu-wrapper">
            <div className="stationary-flight-menu">
                {/* <img src={flight} /> */}
                <Link to="https://www.eventbrite.com/e/suds-on-the-square-oktoberfest-tickets-168951395171">
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
        </div>
    )
}
