import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const PaperBackground = ({ className, children }) => {
    const data = useStaticQuery(
      graphql`
        query {
          desktop: file(relativePath: { eq: "first-page-paper-new-850.png" }) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `
    )
  
    // Set ImageData.
    const imageData = data.desktop.childImageSharp.fluid
  
    return (
      <BackgroundImage
        Tag="section"
        className={className}
        fluid={imageData}
      >
          {children}
      </BackgroundImage>
    )
  }
  
  const StyledPaperBackground = styled(PaperBackground)`
    width: 850px;
    min-height:660px;
    margin: 0 auto;
  `
  
  export default StyledPaperBackground
