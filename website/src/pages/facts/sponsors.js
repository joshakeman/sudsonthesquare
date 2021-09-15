import React from 'react'
import BrickPaperLayout from '../../components/brickPaperLayout'
import atlantaUnited from '../../images/Atlanta_MLS.svg.png'
import cityfayetteville from '../../images/cityfayetteville.png'

export default function test() {
    return (
        <BrickPaperLayout>
            <div className="brews-header">
                <h1 className="brews-title" id="sponsors-title">SPONSORS</h1>
            </div>
            <div className="brickpaper-content">
                <img className="host-logo" src={atlantaUnited} />
                <img className="host-logo" src={cityfayetteville} />
            </div>
        </BrickPaperLayout>
    )
}
