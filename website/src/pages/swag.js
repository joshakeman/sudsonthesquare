// import React, { useState } from 'react'
// import { Link } from "gatsby"
// // Image imports
// import dog from '../images/dog.png'
// import bottleOpenerTab from '../images/bottle-opener-tab.png'
// import brewTab from '../images/brew-tab.png'
// import bottleOpener from '../images/bottle-opener.png'
// import closeIcon from '../images/close-icon.png'

// import menuButton from '../images/menu-button.png'
// import '../styles/home.css'

// class Swag extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state={
//             open: false,
//             swagCategory: ''
//         }
//     }

//     openMenu = () => {
//         this.setState({
//             open: !this.state.open
//         })
//     }

//     setCategory = (cat) => {
//         this.setState({
//             swagCategory: cat
//         })
//     }
   

//     render() {
//         const { abita, wildleap, jailhouse, swagCategory } = this.state
//         const bottleOpenerWidth = 500
//         const bottleOpenerHeight = 809

//         let swagTray

//         if (swagCategory === 'barware') {
//             swagTray =  <>
//                         <div className="swag-tab-wrapper" id="brew-tab">
//                             <div className="swag-tab-btn" onClick={this.openMenu} />
//                         </div>
//                         <div className="swag-tab-wrapper" id="bottle-opener-tab">
//                             <div className="swag-tab-btn" onClick={this.openMenu} />
//                         </div>
//                         </>
//         }
//         return (
//             <>
//                 <div className="brews-background">
//                     {/* <div className="mobile-menu-button-wrapper">
//                         <img className="mobile-menu-button" src={menuButton} onClick={this.openMenu} />
//                     </div> */}
//                     <div className="swag-content-wrapper">
//                         <div className="brews-header">
//                             <img src={dog} className="beer" />
//                             <h1 className="brews-title">SWAG</h1>
//                         </div>
//                         <h3 className="brews-subtitle">
//                         Suds on the Square Merchandise <br></br>
//                         proceeds going to help our charities
//                         </h3>
//                         <div className="swag-headers">
//                             <h2 onClick={()=>this.setCategory('barware')}>Barware</h2>
//                             <h2><span className="pipes">i</span></h2>
//                             <h2>Tees</h2>
//                             <h2><span className="pipes">i</span></h2>
//                             <h2>Throws</h2>
//                         </div>
//                         <div className="swag-tab-container">
//                             {swagTray}
//                             {/* <img src={bottleOpenerTab} className="swag-tab" id="bottle-opener-tab" onClick={this.openMenu} /> */}
//                         </div>
//                     </div>
//                 </div>
//                 {/* 
//                     ******* Modal *******
//                 */}
//                 <div className={"swag-modal " + (this.state.open ? "swag-modal-open" : "")}>
//                     <div style={{
//                         position: 'absolute', 
//                         top: `calc(50% - ${bottleOpenerHeight / 2.5}px)`, 
//                         left: `calc(50% - ${bottleOpenerWidth / 2}px)`
//                     }} 
//                     >
//                         <img onClick={this.openMenu} src={closeIcon} style={{width:50, position: 'absolute', top: '-40px', left: 0, cursor: 'pointer'}} />
//                         <img src={bottleOpener} />
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

// export default Swag

import React, { useState } from 'react'
import { Link } from "gatsby"
import dog from '../images/dog.png'
import bottleOpener from '../images/bottle-opener-tab.png'
import astro from '../images/swag/astro.png'
import throws from '../images/swag/throws.png'
import footballBlue from '../images/swag/football_blue.png'
import footballOrange from '../images/swag/football_orange.png'
import StationaryFlightMenu from '../components/stationaryFlightMenu'

import menuButton from '../images/menu-button.png'
import '../styles/home.css'

class Brews extends React.Component {

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
        const eventbrite = "https://www.eventbrite.com/e/suds-on-the-square-oktoberfest-tickets-168951395171"
        return (
            <div className="brews-background">
                <StationaryFlightMenu/>
                <div className="brews-header">
                    <img src={dog} className="beer" />
                    <h1 className="brews-title">SWAG</h1>
                </div>
                <h3 className="brews-subtitle">
                    Suds on the Square Merchandise <br></br>
                    proceeds going to help our charities
                </h3>
                <div className="brew-logo-container">
                    <h2 className="swag-header">Barware</h2>
                    <a href={eventbrite}>
                        <div className="swag-item">
                            <img className="swag-item" src={bottleOpener} />
                            <p>Bottle Opener</p>
                        </div>
                    </a>
                    <h2 className="swag-header">Tees</h2>
                    <a href={eventbrite}>
                        <div className="swag-item">
                            <img className="swag-item" src={astro} />
                            <p>Astronaut T</p>
                        </div>
                    </a>
                    <a href={eventbrite}>
                        <div className="swag-item">
                            <img className="swag-item" src={footballBlue} />
                            <p>Football T - Periwinkle</p>
                        </div>
                    </a>
                    <a href={eventbrite}>
                        <div className="swag-item">
                            <img className="swag-item" src={footballOrange} />
                            <p>Football T - Orange</p>
                        </div>
                    </a>
                    <h2 className="swag-header">Throws</h2>
                    <a href={eventbrite}>
                        <div className="swag-item">
                            <img className="swag-item" src={throws} />
                            <p>Throw blanket</p>
                        </div>
                    </a>
                </div>

                <div className={"menu-paper " + (this.state.open ? "menu-paper-open" : "")}>
                    {/* <div className="mobile-menu-text">
                        <Link to="/brews">BREWS</Link>
                        <Link>TUNES</Link>
                        <Link>PIX</Link>
                        <Link>SWAG</Link>
                        <Link to="/facts">FACTS</Link>
                        <Link>TIX</Link>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Brews

