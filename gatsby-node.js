const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

const config = require('./src/config');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve('./src/templates/Post.tsx');

  const graphqlQuery = `{
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }`;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(graphqlQuery).then(result => {
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }

        if (result.data.allMarkdownRemark === null) {
          console.info(`No projects to load`);
          return;
        }

        // Create projects pages.
        const projects = result.data.allMarkdownRemark.edges.filter(
          ({ node: project }) =>
            project.frontmatter.slug && project.frontmatter.slug.length > 0,
        );

        _.each(projects, ({ node: { frontmatter: { slug } } }, index) => {
          const previous =
            index === projects.length - 1 ? {} : projects[index + 1].node;
          const next = index === 0 ? {} : projects[index - 1].node;

          createPage({
            path: `${config.projectPathPrefix}${slug}`,
            component: pageTemplate,
            context: {
              fullPath: `${config.projectPathPrefix}${slug}`,
              slug,
              previous,
              next,
            },
          });
        });
      }),
    );
  });
};

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};
