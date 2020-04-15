import React, { useState } from 'react'
// Image imports
import beer from '../images/beer.png'
import abitaBrown from '../images/abita-brown.png'
import abitaColor from '../images/abita-color.png'
import jailhouseBrown from '../images/jailhouse-brown.png'
import jailhouseColor from '../images/jailhouse-color.png'
import wildleapBrown from '../images/wildleap-brown.png'
import wildleapColor from '../images/wildleap-color.png'

import '../styles/brews.css'

class Brews extends React.Component {

    constructor(props) {
        super(props)

        this.state={
            abita: abitaBrown,
            jailhouse: jailhouseBrown,
            wildleap: wildleapBrown
        }
    }

    changeImage = (img) => {
        if (img === 'abita') {
            this.setState({
                abita: abitaColor
            })
        }
    }
   

    render() {
        const { abita, jailhouse, wildleap } = image
        return (
            <div className="brews-background">
                <div className="brews-body">
                    <div className="brews-header">
                        <img src={beer} className="beer" />
                        <h1 className="brews-title">BREWS</h1>
                    </div>
                    <h3 className="brews-subtitle">
                    a selection of the breweries <br></br>
                    that will be serving up their <br></br>
                    amazing concoctions
                    </h3>
                    <div className="logo-container">
                        <img src={abita} 
                            onMouseOver={() => this.changeImage('abita')} 
                            onMouseOut={e => (e.currentTarget.src = abita)} 
                            />
                        <img src={wildleap} />
                        <img src={jailhouse} />
                    </div>
                </div>  
            </div>
        )
    }
}

export default Brews
