module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-preact/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".md",".mdx"],"remarkPlugins":[[null,{"type":"yaml","marker":"-"}],null],"rehypePlugins":[null,null],"gatsbyRemarkPlugins":[],"defaultLayouts":{"default":"/home/runner/work/unittestbot.github.io/unittestbot.github.io/node_modules/gatsby-theme-docz/src/base/Layout.js"},"lessBabel":false,"mediaTypes":["text/markdown","text/x-markdown"],"root":"/home/runner/work/unittestbot.github.io/unittestbot.github.io"},
    },{
      plugin: require('../node_modules/gatsby-theme-docz/node_modules/gatsby-plugin-react-helmet-async/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-theme-docz/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/utbot-logo-5.svg","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"aebc4885c03a4f1b00881be040430490"},
    },{
      plugin: require('../node_modules/gatsby-plugin-lunr/gatsby-browser.js'),
      options: {"plugins":[],"languages":[{"name":"en"}],"fields":[{"name":"name","store":true,"attributes":{"boost":20}},{"name":"description","store":true,"attributes":{"boost":10}},{"name":"content","store":true,"attributes":{"boost":15}},{"name":"route","store":true}],"resolvers":{"MarkdownRemark":{}}},
    }]
