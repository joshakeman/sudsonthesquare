import React from 'react'
import BrickPaperLayout from '../components/brickPaperLayout'
import hostLogo from '../images/host_logo.png'
import kLogo from '../images/k_logo.png'

export default function test() {
    return (
        <BrickPaperLayout>
            <div className="brews-header">
                <h1 className="brews-title">HOSTS</h1>
            </div>
            <div className="brickpaper-content">
                <img className="host-logo" src={hostLogo} />
            </div>
        </BrickPaperLayout>
    )
}
