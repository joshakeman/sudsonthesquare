import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Img from "gatsby-image"
import brickwall from '../images/brickwall.jpg'
import background from '../images/paper-only-background.png'
import menuButton from '../images/menu-button.png'
import '../styles/home.css'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
      query {
        background: file(relativePath: { eq: "paper-only-background.png" }) {
          childImageSharp {
            fluid(maxWidth: 3000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  const [showMenu, toggleMenu] = useState(false);

  return (
    <>
      <SEO title="Home" />
      <div className="background">
        <div className="paper-wrapper">
          <img className="paper" src={background}></img>
          {/* <Img className="paper" fluid={data.background.childImageSharp.fluid} /> */}
          <img className="menu-button" src={menuButton}  onClick={() => toggleMenu(!showMenu)}></img>

          {
            showMenu ? (
              <div className="menu-text">
              <Link to="/brews">BREWS</Link>
              <Link to="/tunes">TUNES</Link>
              <Link to="/pix">PIX</Link>
              <Link to="/swag">SWAG</Link>
              <Link to="/facts">FACTS</Link>
              <Link>TIX</Link>
              </div>
            ) : null
          }
        </div>
      </div>
    </>
  )
  }


export default IndexPage
