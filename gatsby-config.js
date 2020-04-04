module.exports = {
  siteMetadata: {
    title: 'jilvanx',
    description: 'Full-stack developer, developing apps and web pages',
    author: '@jilvanx',
    siteUrl: 'https://jilvanx.github.io',
  },
  plugins: [
    'gatsby-styled-components-dark-mode',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jilvan Cândido',
        short_name: 'jilvanx',
        start_url: '/',
        background_color: '#303030',
        theme_color: '#303030',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
