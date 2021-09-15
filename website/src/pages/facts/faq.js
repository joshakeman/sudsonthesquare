import React from 'react'
import BrickPaperLayout from '../../components/brickPaperLayout'
import atlantaUnited from '../../images/Atlanta_MLS.svg.png'
import cityfayetteville from '../../images/cityfayetteville.png'

export default function test() {
    return (
        <BrickPaperLayout>
            <div className="brews-header">
                <h1 className="brews-title">FAQ</h1>
            </div>
            <div className="brickpaper-content">

<h4>Who is allowed into the festival?</h4>
<p>This event is family friendly, anyone will be allowed in with an adult or guardian. You must be 21 or older to drink but the food is available for all.</p> 

<h4>What kinds of items do I need to bring to the festival?</h4>
<p>All attendees that will sample the beer or wine must bring an ID to validate they are over 21. Folding chairs are allowed. Don't forget your tickets and that insatiable thirst for exciting brews and great tunes!</p>

<h4>What happens if it rains?</h4>
<p>All ticket sales are final. The festival will continue rain or shine!</p>

<h4>What kinds of items are not allowed into the festival?</h4>
<p>No outside food or drink, glass, or illegal substances- we're here to have safe fun!</p>
            </div>
        </BrickPaperLayout>
    )
}
