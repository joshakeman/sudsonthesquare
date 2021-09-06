import React, { useState } from 'react'
import { Link } from "gatsby"
// Image imports
import dog from '../images/dog.png'
import bottleOpenerTab from '../images/bottle-opener-tab.png'
import brewTab from '../images/brew-tab.png'
import bottleOpener from '../images/bottle-opener.png'
import closeIcon from '../images/close-icon.png'

import menuButton from '../images/menu-button.png'
import '../styles/home.css'

class Swag extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            open: false,
            swagCategory: ''
        }
    }

    openMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }

    setCategory = (cat) => {
        this.setState({
            swagCategory: cat
        })
    }
   

    render() {
        const { abita, wildleap, jailhouse, swagCategory } = this.state
        const bottleOpenerWidth = 500
        const bottleOpenerHeight = 809

        let swagTray

        if (swagCategory === 'barware') {
            swagTray =  <>
                        <div className="swag-tab-wrapper" id="brew-tab">
                            <div className="swag-tab-btn" onClick={this.openMenu} />
                        </div>
                        <div className="swag-tab-wrapper" id="bottle-opener-tab">
                            <div className="swag-tab-btn" onClick={this.openMenu} />
                        </div>
                        </>
        }
        return (
            <>
                <div className="brews-background">
                    {/* <div className="mobile-menu-button-wrapper">
                        <img className="mobile-menu-button" src={menuButton} onClick={this.openMenu} />
                    </div> */}
                    <div className="swag-content-wrapper">
                        <div className="brews-header">
                            <img src={dog} className="beer" />
                            <h1 className="brews-title">SWAG</h1>
                        </div>
                        <h3 className="brews-subtitle">
                        Suds on the Square Merchandise <br></br>
                        proceeds going to help our charities
                        </h3>
                        <div className="swag-headers">
                            <h2 onClick={()=>this.setCategory('barware')}>Barware</h2>
                            <h2><span className="pipes">i</span></h2>
                            <h2>Tees</h2>
                            <h2><span className="pipes">i</span></h2>
                            <h2>Throws</h2>
                        </div>
                        <div className="swag-tab-container">
                            {swagTray}
                            {/* <img src={bottleOpenerTab} className="swag-tab" id="bottle-opener-tab" onClick={this.openMenu} /> */}
                        </div>
                    </div>
                </div>
                {/* 
                    ******* Modal *******
                */}
                <div className={"swag-modal " + (this.state.open ? "swag-modal-open" : "")}>
                    <div style={{
                        position: 'absolute', 
                        top: `calc(50% - ${bottleOpenerHeight / 2.5}px)`, 
                        left: `calc(50% - ${bottleOpenerWidth / 2}px)`
                    }} 
                    >
                        <img onClick={this.openMenu} src={closeIcon} style={{width:50, position: 'absolute', top: '-40px', left: 0, cursor: 'pointer'}} />
                        <img src={bottleOpener} />
                    </div>
                </div>
            </>
        )
    }
}

export default Swag
