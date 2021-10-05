module.exports = {
  siteMetadata: {
    title: `Suds on the Square`,
    description: `Suds on the Square beer festival and family event presented by Kiwanis Club of Fayette County.`,
    author: `Kiwanis Club of Fayette County`,
    keywords: `beer festival, beer fest, fayette county, fayetteville, suds on the square`,
    image: `src/images/mainLogoBeerfest.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/kiwanis-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
