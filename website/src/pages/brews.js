import React from 'react'
import beer from '../images/beer.png'
import '../styles/brews.css'

export default function brews() {
    return (
        <div className="brews-background">
            <div className="brews-body">
                <div className="brews-header">
                    <img src={beer} className="beer" />
                    <h1 className="brews-title">Brews</h1>
                </div>
            </div>
            
        </div>
    )
}
