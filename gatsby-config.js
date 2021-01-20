const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'スタジアム・アリーナと人口',
    description: 'スタジアム・アリーナと人口は、日本国内の主要スタジアム・アリーナの周辺の人口を地図で表示したサイトです。',
    lang: 'ja',
    siteUrl: 'https://cieloazul310.github.io/gatsby-stadiums-population/',
    baseUrl: 'https://cieloazul310.github.io',
    date: '2019-02-25',
    lastmod: '2019-03-03',
    author: 'cieloazul310',
    keywords: ['J League'],
    social: {
      mail: '',
      twitter: 'cieloazul310',
      github: 'cieloazul310',
      facebook: '',
      gitlab: '',
      linkedin: '',
      medium: '',
      pocket: '',
      tumblr: '',
      instagram: '',
      vimeo: '',
      youtube: '',
    },
  },
  pathPrefix: '/gatsby-stadiums-population',
  plugins: [
    {
      resolve: `gatsby-theme-aoi`,
      options: {
        siteId: `gatsby-starter-aoi-theme`,
      },
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./dataset/frames`,
        name: 'frames',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./dataset/yaml`,
        name: `venues`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: ({ node }) => {
          return node.sourceInstanceName === 'venues'
            ? `venues`
            : node.relativePath === 'jclub.yaml'
            ? `jclubYaml`
            : node.relativePath === 'bclub.yaml'
            ? `bclubYaml`
            : node.relativePath === 'stadiums.yaml'
            ? `stadiumYaml`
            : `yaml`;
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `dataset`, `yaml`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://cieloazul310.github.io',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-74683419-3',
      },
    },
    `gatsby-plugin-graphql-codegen`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                baseUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: ({ site }) => {
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.baseUrl;
        },
      },
    },
  ],
};
