import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Img from "gatsby-image"
import background from '../images/suds-main.jpg'
import '../styles/home.css'

const IndexPage = () => (
  // <Layout>
  <>
    <SEO title="Home" />
    {/* <div className="background">

    </div> */}
      <img className="bg" src={background}></img>
    {/* <Img className="bg" fluid={data.background.childImageSharp.fluid} /> */}
  </>
  // </Layout>
)

// const data = useStaticQuery(graphql`
//     query {
//       background: file(relativePath: { eq: "suds-main.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 3000) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

export default IndexPage
