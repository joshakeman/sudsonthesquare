import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Gallery() {

    const data = useStaticQuery(graphql`
    query {
      suds1: file(relativePath: { eq: "suds-1.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      suds2: file(relativePath: { eq: "suds-2.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      suds3: file(relativePath: { eq: "suds-3.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      suds4: file(relativePath: { eq: "suds-4.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      suds5: file(relativePath: { eq: "suds-5.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      suds6: file(relativePath: { eq: "suds-6.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
    }
  `)

    return (
    <div className="gallery-wrapper">
        <div className="gallery-item">
            <Img fluid={data.suds1.childImageSharp.fluid} />
        </div>
        <div className="gallery-item">
            <Img fluid={data.suds2.childImageSharp.fluid} />
        </div>
        <div className="gallery-item">
            <Img fluid={data.suds3.childImageSharp.fluid} />
        </div>
        <div className="gallery-item">
            <Img fluid={data.suds4.childImageSharp.fluid} />
        </div>
        <div className="gallery-item">
            <Img fluid={data.suds5.childImageSharp.fluid} />
        </div>
        <div className="gallery-item">
            <Img fluid={data.suds6.childImageSharp.fluid} />
        </div>
    </div>
  )
}


