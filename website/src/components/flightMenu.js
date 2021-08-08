import React from 'react'
import flight from '../images/flight-2.png'

export default function flightMenu({ open }) {

    return (
        <>
        {
            open ? (
                <div className="flight-menu">
                    <img src={flight} />
                </div>
            ) : (
                <div className="flight-menu flighted">
                    <img src={flight} />
                    <div style={{backgroundColor:'red', width:"100%", position:'absolute', bottom: 40, height: 60, opacity: 0.6}} />
                    <div style={{backgroundColor:'yellow', width:"100%", position:'absolute', bottom: 100, height: 60, opacity: 0.6}} />
                    <div style={{backgroundColor:'green', width:"100%", position:'absolute', bottom: 160, height: 60, opacity: 0.6}} />
                    <div style={{backgroundColor:'blue', width:"100%", position:'absolute', bottom: 220, height: 60, opacity: 0.6}} />
                    <div style={{backgroundColor:'orange', width:"100%", position:'absolute', bottom: 280, height: 60, opacity: 0.6}} />
                    <div style={{backgroundColor:'turqouise', width:"100%", position:'absolute', bottom: 340, height: 60, opacity: 0.6}} />
                    <div style={{backgroundColor:'purple', width:"100%", position:'absolute', bottom: 340, height: 60, opacity: 0.6}} />

                </div>
            )
        }
        </>
    )
}
