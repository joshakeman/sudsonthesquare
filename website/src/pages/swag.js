import React, { useState } from 'react'
import { Link } from "gatsby"
// Image imports
import dog from '../images/dog.png'
import bottleOpenerTab from '../images/bottle-opener-tab.png'
import brewTab from '../images/brew-tab.png'

import menuButton from '../images/menu-button.png'
import '../styles/home.css'

class Swag extends React.Component {

    constructor(props) {
        super(props)

        this.state={
        }
    }


    openMenu = () => {
        this.setState({
            open: !this.state.open
        })
    }
   

    render() {
        const { abita, wildleap, jailhouse } = this.state
        return (
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
                    <div style={{display:'flex', justifyContent: 'center', paddingLeft: 50}}>
                        <img src={brewTab} style={{width:275}}/>
                        <img src={bottleOpenerTab} style={{width:275, marginLeft:'-50px'}}/>
                    </div>
                    {/* <div className={"paper " + (this.state.open ? "paper-open" : "")}>
                        <div className="mobile-menu-text">
                            <Link to="/brews">BREWS</Link>
                            <Link>TUNES</Link>
                            <Link>PIX</Link>
                            <Link>SWAG</Link>
                            <Link to="/facts">FACTS</Link>
                            <Link>TIX</Link>
                        </div>
                    </div> */}
                </div>  
            </div>
        )
    }
}

export default Swag
