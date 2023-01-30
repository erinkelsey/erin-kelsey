const config = require('./src/config')

module.exports = {
  siteMetadata: {
    title: `Erin Kelsey | Senior Software Engineer`,
    description: `I am a senior software engineer (and beginner ui/ux designer), focused on bringing engaging digital products to life for web and mobile.`,
    siteUrl: `https://erinkelsey.io`,
    image: '/og.png',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ErinKelsey',
        short_name: 'ErinKelsey',
        start_url: '/',
        background_color: config.colors.darkPurple,
        theme_color: config.colors.purple,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `projects`,
    //     path: `${__dirname}/content/projects`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-images
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: { color: config.colors.green },
            },
          },
        ],
      },
    },
  ],
}
