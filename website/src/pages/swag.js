import React, { useState } from 'react'
import { Link } from "gatsby"
// Image imports
import dog from '../images/dog.png'
import bottleOpenerTab from '../images/bottle-opener-tab.png'
import brewTab from '../images/brew-tab.png'
import bottleOpener from '../images/bottle-opener.png'

import menuButton from '../images/menu-button.png'
import '../styles/home.css'

class Swag extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            open: false
        }
    }


    openMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }
   

    render() {
        const { abita, wildleap, jailhouse } = this.state
        const bottleOpenerWidth = 500
        const bottleOpenerHeight = 809
        return (
            <>
                <div className="brews-background">
                    <div className="mobile-menu-button-wrapper">
                        <img className="mobile-menu-button" src={menuButton} onClick={this.openMenu} />
                    </div>
                    <div className="body">
                        <div className="brews-header">
                            <img src={dog} className="beer" />
                            <h1 className="brews-title">SWAG</h1>
                        </div>
                        <h3 className="brews-subtitle">
                        Suds on the Square Merchandise <br></br>
                        proceeds going to help our charities
                        </h3>
                        <div className="logo-container">
                            <h2>Barware</h2>
                            <h2><span className="pipes">i</span></h2>
                            <h2>Tees</h2>
                            <h2><span className="pipes">i</span></h2>
                            <h2>Throws</h2>
                        </div>
                        <div className="swag-tab-container">
                            <img src={brewTab} className="swag-tab" id="brew-tab" onClick={this.openMenu} />
                            <img src={bottleOpenerTab} className="swag-tab" id="bottle-opener-tab" onClick={this.openMenu} />
                        </div>
                    </div>  
                </div>
                {/* 
                    ******* Modal *******
                */}
                <div className={"swag-modal " + (this.state.open ? "swag-modal-open" : "")}>
                    <div style={{
                        position: 'absolute', 
                        top: `calc(50% - ${bottleOpenerWidth / 2}px)`, 
                        left: `calc(50% - ${bottleOpenerHeight / 2}px)`
                    }} 
                    >
                        <div onClick={this.openMenu}>
                        X
                        </div>
                        <img src={bottleOpener} />
                    </div>
                </div>
            </>
        )
    }
}

export default Swag
