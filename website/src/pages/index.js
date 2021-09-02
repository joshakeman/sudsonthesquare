import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Img from "gatsby-image"
import brickwall from '../images/brickwall.jpg'
import background from '../images/paper-only-background.png'
import menuButton from '../images/menu-button.png'
import mainLogo from '../images/mainLogo.png'
import timeDate from '../images/time_date.png'
import kiwanis from '../images/kiwanis-logo.png'
import mainstreet from '../images/k_logo.png'
import dog from '../images/dog.png'
import spider from '../images/spider.png'
import FlightMenu from '../components/flightMenu'
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
          <div className="paper-left">
            <div className="main-logo-wrapper">
              <img className="main-logo" src={mainLogo} />
              <img className="main-logo" src={timeDate} />
            </div>
            <div className="main-footer">
              <img className="kiwanis-logo" src={kiwanis} />
              <img className="mainstreet-logo" src={mainstreet} />
              <img className="dog-logo" src={dog} />
            </div>
            <img className="spider" src={spider} />
          </div>
          <div className="paper-right">
            
          </div>
          {/* <img className="paper" src={background}></img> */}
          <img className="menu-button" src={menuButton}  onClick={() => toggleMenu(!showMenu)}></img>
          {/* <FlightMenu open={showMenu} /> */}
        </div>
      </div>
    </>
  )
  }


export default IndexPage
