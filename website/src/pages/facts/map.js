import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import BrickWall from '../../components/brickWallNoPaper'

export default function Map() {

    const data = useStaticQuery(graphql`
    query {
      map: file(relativePath: { eq: "sudsMap.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    return (
        <BrickWall>
            <div className="map-wrapper">
                <Img className="map-img" fluid={data.map.childImageSharp.fluid} />
            </div>
        </BrickWall>
    )
}
