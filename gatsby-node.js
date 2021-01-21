// @ts-check

const path = require('path');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type venues implements Node {
      clubs: [jclubYaml] @link(by: "short_name", from: "clubs")
    },
  `);
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query CreatePages {
      allVenues(sort: { fields: population___val_10, order: DESC }) {
        edges {
          node {
            slug
          }
          next {
            slug
            name
          }
          previous {
            slug
            name
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const { allVenues } = result.data;
  allVenues.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.slug,
      component: path.resolve('./src/templates/venues.tsx'),
      context: { slug: node.slug, relativeDirectory: `stadiums/${node.slug}`, next, previous },
    });
  });
};

/*
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allVenuesJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      allArenasJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const { allVenuesJson, allArenasJson } = result.data;

  allVenuesJson.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/venuesContainer.tsx`),
      context: { slug: node.fields.slug, group: 'venues' },
    });
  });
  allArenasJson.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/arenasContainer.tsx`),
      context: { slug: node.fields.slug, group: 'arenas' },
    });
  });
};
*/
