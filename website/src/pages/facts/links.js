import React from 'react'
import BrickPaperLayout from '../../components/brickPaperLayout'
import atlantaUnited from '../../images/Atlanta_MLS.svg.png'
import cityfayetteville from '../../images/cityfayetteville.png'
import lyft from '../../images/lyft.png'
import uber from '../../images/uber.png'

export default function test() {
    return (
        <BrickPaperLayout>
            <div className="brews-header">
                <h1 className="brews-title" id="sponsors-title">LINKS</h1>
            </div>
            <div className="brickpaper-content">
                <a href="https://www.atlutd.com/" className="links-link">
                    <img className="host-logo" src={atlantaUnited} />
                </a>
                <a href="https://fayetteville-ga.gov/" className="links-link">
                    <img className="host-logo" src={cityfayetteville} />
                </a>
                <a href="https://www.lyft.com/" className="links-link">
                    <img className="host-logo" src={lyft} />
                </a>
                <a href="https://www.uber.com/" className="links-link">
                    <img className="host-logo" src={uber} />
                </a>
            </div>
        </BrickPaperLayout>
    )
}
