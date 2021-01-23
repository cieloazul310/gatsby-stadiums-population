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
      j1: allVenues(filter: { clubs: { elemMatch: { category: { eq: "J1" } } } }, sort: { fields: population___val_10, order: DESC }) {
        edges {
          node {
            slug
            name
          }
        }
      }
      j2: allVenues(filter: { clubs: { elemMatch: { category: { eq: "J2" } } } }, sort: { fields: population___val_10, order: DESC }) {
        edges {
          node {
            slug
            name
          }
        }
      }
      j3: allVenues(filter: { clubs: { elemMatch: { category: { eq: "J3" } } } }, sort: { fields: population___val_10, order: DESC }) {
        edges {
          node {
            slug
            name
          }
        }
      }
      jfl: allVenues(filter: { clubs: { elemMatch: { category: { eq: "JFL" } } } }, sort: { fields: population___val_10, order: DESC }) {
        edges {
          node {
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
  const { j1, j2, j3, jfl } = result.data;
  const allVenues = [...j1.edges, ...j2.edges, ...j3.edges, ...jfl.edges].reduce(
    (accum, curr) => (accum.map(({ node }) => node.slug).indexOf(curr.node.slug) < 0 ? [...accum, curr] : accum),
    []
  );
  allVenues.forEach(({ node }, index, arr) => {
    const previous = index !== 0 ? arr[index - 1] : null;
    const next = index !== arr.length - 1 ? arr[index + 1] : null;
    createPage({
      path: node.slug,
      component: path.resolve('./src/templates/venues.tsx'),
      context: { slug: node.slug, relativeDirectory: `stadiums/${node.slug}`, next, previous },
    });
  });
};
