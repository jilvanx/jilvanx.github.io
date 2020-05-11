require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { GATSBY_GA_TRACKING_ID } = process.env;

module.exports = {
  siteMetadata: {
    title: 'jilvanx',
    description: 'Full-stack developer, developing apps and web pages',
    author: '@jilvanx',
    siteUrl: 'https://jilvanx.github.io',
    name: 'Jilvan Cândido',
    position: 'Full Stack Software Developer',
    aboutme: 'I\'m a passionate and enthusiastic developer with experience in full-stack development. I have a wide range of experience starting from designing and building small web sites to architect scale real-time web and mobile apps. I continue improving my Javascript stack, with Reactjs, React Native, and Node.js. I try to expand my area expertise every day and not afraid to learn new things.',
    skills: [
      { name: 'NodeJS', level: 90 },
      { name: 'PHP', level: 80 },
      { name: 'GraphQL', level: 60 },
      { name: 'React Native', level: 65 },
      { name: 'MySql', level: 85 },
      { name: 'MongoDB', level: 70 },
      { name: 'ReactJS', level: 70 },
      { name: 'Laravel', level: 80 },
      { name: 'Google Cloud', level: 40 },
      { name: 'AWS', level: 40 },
      { name: 'Docker', level: 80 },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: GATSBY_GA_TRACKING_ID,
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
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
  ],
};
