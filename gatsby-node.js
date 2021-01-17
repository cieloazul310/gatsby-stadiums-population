// @ts-check

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'VenuesJson' || node.internal.type === 'ArenasJson') {
    const { createNodeField } = actions;
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`,
    });
    createNodeField({ node, name: `slug`, value: slug });
  }
};

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
