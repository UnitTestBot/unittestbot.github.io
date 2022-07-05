const path = require("path");
const { isNil } = require("lodash");

module.exports = {
  siteMetadata: {
    title: `UnitTestBot`,
    description: `Unit tests generation tool`,
    author: `UnitTestBot`,
    backend_host: `https://utbot.org`, // `http://127.0.0.1:10000`,
    // backend_survey_host: `<backend-survey-host-url>`,
    github_utbot: `https://github.com/UnitTestBot`,
    discussions_utbot: `https://github.com/orgs/UnitTestBot/discussions`,
    github_issues: `https://github.com/UnitTestBot/unittestbot.github.io/issues`,
    utbot_cpp_releases_link: `https://github.com/UnitTestBot/UTBotCpp/releases`,
    utbot_cpp_releases_info: `https://api.github.com/repos/UnitTestBot/UTBotCpp/releases`,
    utbot_java_releases_link: `https://github.com/UnitTestBot/UTBotJava/releases`,
    utbot_java_releases_info: `https://api.github.com/repos/UnitTestBot/UTBotJava/releases`,
    build_number: `19`,
    build_date: `2022-6-30`,
  },

  plugins: [
    `gatsby-plugin-preact`,
    // "gatsby-theme-docz",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/utbot-logo-5.svg`, // This path is relative to the root of the site.
      },
    },
    /* {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          docz: path.resolve(__dirname, "src/docz-proxy.js"),
          "@docz": require.resolve("docz"),
        },
      },
    }, */
    {
      resolve: "gatsby-plugin-lunr",
      options: {
        languages: [
          {
            name: "en",
            filterNodes: node =>
                !isNil(node.frontmatter) && !isNil(node.frontmatter.name),
          },
        ],
        fields: [
          { name: "name", store: true, attributes: { boost: 20 } },
          { name: "description", store: true, attributes: { boost: 10 } },
          { name: "content", store: true, attributes: { boost: 15 } },
          { name: "path", store: true },
        ],
        // A function for filtering nodes. () => true by default
        filterNodes: node =>
            !isNil(node.frontmatter) && !isNil(node.frontmatter.name),
        // How to resolve each field's value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
            name: node => node.frontmatter.name,
            description: node => node.frontmatter.description,
            content: node => node.rawMarkdownBody,
            path: node => node.frontmatter.path,
          },
        },
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`name`, `description`, `content`, `path`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            name: node => node.frontmatter.name,
            description: node => node.frontmatter.description,
            content: node => node.rawMarkdownBody,
            path: node => node.frontmatter.path,
          },
        },
        // Optional filter to limit indexed nodes
        // filter: (node, getNode) => node.frontmatter.tags !== "exempt",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
