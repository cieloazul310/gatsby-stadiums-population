'use strict';

module.exports = {
  siteMetadata: {
    title: 'サッカースタジアムと人口',
    description: '日本国内の主要サッカースタジアムと周辺の人口を地図で表示したサイトです。',
    siteUrl: 'https://cieloazul310.github.io/gatsby-stadiums-population/',
    author: {
      name: 'cieloazul310',
      url: 'https://twitter.com/cieloazul310',
      email: 'cieloazul310@gmail.com'
    }
  },
  pathPrefix: '/gatsby-stadiums-population',
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/venues`
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-74683419-3'
      }
    }
  ]
};
