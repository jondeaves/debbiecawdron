const path = require('path');
const urljoin = require('url-join');

// Must come first to ensure it's loaded before site config
require('dotenv').config();

const config = require('./src/config');

const fqdn = urljoin(config.siteUrl, config.pathPrefix);

module.exports = {
  siteMetadata: {
    ...config.meta,
    rssMetadata: {
      ...config.meta,
      site_url: fqdn,
      feed_url: urljoin(fqdn, config.rss.path),
      image_url: `${urljoin(fqdn, 'favicons', 'firefox_app_512x512.png')}`,
      copyright: config.copyright,
    },
    siteUrl: config.siteUrl,
  },
  pathPrefix: config.pathPrefix,
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-manifest',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/projects`,
        name: 'markdown-pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/projects/images/uploads`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads', // Must match the source name ^
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1170,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow external',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_CODE,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: edge.node.frontmatter.tagLine,
                  url: `${site.siteMetadata.siteUrl}${
                    config.projectPathPrefix
                  }${edge.node.frontmatter.slug}`,
                  guid: `${site.siteMetadata.siteUrl}${
                    config.projectPathPrefix
                  }${edge.node.frontmatter.slug}`,

                  custom_elements: [
                    { language: 'en-GB' },
                    { author: 'hello@jondeaves.me' },
                    { pubDate: edge.node.frontmatter.date },
                  ],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { fields: [frontmatter___date], order: DESC }
                  limit: 1000
                ) {
                  edges {
                    node {
                      frontmatter {
                        title
                        slug
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
  ],
};
