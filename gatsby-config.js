module.exports = {
  siteMetadata: {
    title: 'jilvanx',
    description: 'Full-stack developer, developing apps and web pages',
    author: '@jilvanx',
    siteUrl: 'https://jilvanx.github.io',
    name: 'Jilvan Cândido',
    position: 'Full Stack Software Developer',
    aboutme: 'I\'m a full stack software developer specializing in modern JavaScript, I work with front-end or back-end to creating apps and web pages. Nowadays I work with React Native and I like a lot. I like study stuffs about technology and development, I\'m continue improve my Javascript stack, with Reactjs, React Native, Node.js.',
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
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
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
