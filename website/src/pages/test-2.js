import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import PaperBackground from '../components/paperBackground'
import HomepaperLeft from '../components/homepaper/homepaperLeft'

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "brickwall-optimized.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 3000) {
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
      backgroundColor={`#040e18`}
    >
     <PaperBackground>
        <HomepaperLeft />
    </PaperBackground>
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  min-height:100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default StyledBackgroundSection
