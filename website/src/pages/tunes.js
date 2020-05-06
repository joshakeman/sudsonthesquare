import React from 'react'
import guitar from '../images/guitar.png'

import menuButton from '../images/menu-button.png'
import '../styles/home.css'

export default function tunes() {

    const openMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }

    return (
        <div className="facts-background">
            <div className="mobile-menu-button-wrapper">
                <img className="mobile-menu-button" src={menuButton} onClick={openMenu} />
            </div>
            <div className="body">
                <div className="facts-header">
                    <div className="logo-wrapper">
                        <h1 className="tunes-title">TUNES</h1>
                        <img src={guitar} id="guitar" />
                    </div>
                    <h2 className="tunes-subtitle">
                        Live Music on the Old Courthouse Square
                    </h2>
                </div>
            </div>
        </div>
    )
}
