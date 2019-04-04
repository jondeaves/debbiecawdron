const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const config = require('./src/config');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve('./src/templates/post.tsx');

  const graphqlQuery = `{
      allContentfulProject(
        sort: { fields: [date], order: DESC },
        limit: 1000
      ) {
        edges {
          node {
            id
            title
            slug
            previewImage {
              id
              file {
                url
                fileName
                contentType
              }
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

        if (result.data.allContentfulProject === null) {
          console.info(`No projects to load`);
          return;
        }

        // Create projects pages.
        const projects = result.data.allContentfulProject.edges;

        _.each(projects, (project, index) => {
          const previous =
            index === projects.length - 1 ? {} : projects[index + 1].node;
          const next = index === 0 ? {} : projects[index - 1].node;

          createPage({
            path: `${config.projectPathPrefix}${project.node.slug}`,
            component: pageTemplate,
            context: {
              fullPath: `${config.projectPathPrefix}${project.node.slug}`,
              slug: project.node.slug,
              previous,
              next,
            },
          });
        });
      }),
    );
  });
};
