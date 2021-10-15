import React from 'react'
import StationaryFlightMenu from '../components/stationaryFlightMenu'
import guitar from '../images/guitar.png'

export default function BrickPaperLayout({ children, subtitle, title }) {
    return (
        <div className="brickpaper-background">
            <StationaryFlightMenu />
            {children}
        </div>
    )
}
