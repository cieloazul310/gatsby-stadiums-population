// @ts-check
'use strict';

const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'VenuesJson' || node.internal.type === 'ArenasJson') {
    const { createNodeField } = actions;
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages`
    });
    createNodeField({ node, name: `slug`, value: slug });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
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
  `).then(result => {
    result.data.allVenuesJson.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/venuesContainer.tsx`),
        context: { slug: node.fields.slug, group: 'venues' }
      });
    });
    result.data.allArenasJson.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/arenasContainer.tsx`),
        context: { slug: node.fields.slug, group: 'arenas' }
      });
    });
  });
};

/*
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.

  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, layout } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}/`;
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || ''
      });

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || ''
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              layout
              slug
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);
    throw new Error(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, layout } = node.fields;

    createPage({
      path: slug,
      // This will automatically resolve the template to a corresponding
      // `layout` frontmatter in the Markdown.
      //
      // Feel free to set any `layout` as you'd like in the frontmatter, as
      // long as the corresponding template file exists in src/templates.
      // If no template is set, it will fall back to the default `page`
      // template.
      //
      // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/${layout || 'page'}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug
      }
    });
  });
};
*/
