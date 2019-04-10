module.exports = {
  meta: {
    author: 'Debbie Cawdron',
    description: 'Architectural Assistant',
    title: 'Debbie Cawdron',
  },

  // Prefixes all links
  pathPrefix: '/',

  rss: {
    // Path to RSS feed, appended to siteUrl
    path: '/rss.xml',
  },

  // The FQDN of the site; deployed or local
  siteUrl: process.env.SITE_URL
    ? process.env.SITE_URL
    : 'https://thepetarchitect.co.uk',

  projectPathPrefix: '/work/',
};
