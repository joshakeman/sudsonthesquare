import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import timeDate from '../../images/time_date.png'
import kiwanis from '../../images/kiwanis-logo.png'
import mainstreet from '../../images/k_logo.png'
import dog from '../../images/dog.png'
import spider from '../../images/spider.png'


export default function HomepaperLeft() {
    const data = useStaticQuery(graphql`
      query {
        mainLogo: file(relativePath: { eq: "mainLogoBeerfest.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return (
        <div className="paper-left">
            <div className="main-logo-wrapper">
              {/* <img className="main-logo" src={mainLogo} /> */}
              <Img className="main-logo" fluid={data.mainLogo.childImageSharp.fluid} />
              <img className="main-logo" src={timeDate} />
            </div>
            <div className="main-footer">
              <img className="kiwanis-logo" src={kiwanis} />
              <img className="mainstreet-logo" src={mainstreet} />
              <img className="dog-logo" src={dog} />
            </div>
            <img className="spider" src={spider} />
        </div>
    )
}
