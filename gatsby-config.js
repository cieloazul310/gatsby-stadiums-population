'use strict';

module.exports = {
  siteMetadata: {
    title: 'スタジアム・アリーナと人口',
    description: 'スタジアム・アリーナと人口は、日本国内の主要スタジアム・アリーナの周辺の人口を地図で表示したサイトです。',
    siteUrl: 'https://cieloazul310.github.io/gatsby-stadiums-population/',
    date: '2019-02-25',
    lastmod: '2019-03-03',
    author: {
      name: 'cieloazul310',
      siteName: '水戸地図',
      url: 'https://cieloazul310.github.io',
      twitter: 'cieloazul310',
      github: 'cieloazul310',
      email: 'cieloazul310@gmail.com'
    }
  },
  pathPrefix: '/gatsby-stadiums-population',
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {}
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://cieloazul310.github.io'
      }
    },
    `gatsby-plugin-sitemap`,
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
