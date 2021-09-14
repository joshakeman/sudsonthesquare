import React, { useState } from 'react'
import mustacheBrown from '../images/mustache-menu-brown.png'
import mustacheTan from '../images/mustache-menu-tan.png'

export default function MustacheMenu({color, toggleMenu}) {

    let mustache
    if (color === "brown") {
        mustache = mustacheBrown
    } else if (color === "tan") {
        mustache = mustacheTan
    }

    return (
        <>
        <div className="mustache-menu-wrapper" onClick={toggleMenu}>
            <img src={mustache} />
        </div>
        </>
    )
}
