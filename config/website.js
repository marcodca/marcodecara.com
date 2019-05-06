const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Marco de Cara', // Navigation and Site Title
  siteTitleAlt: 'Marco, web developer in Copenhagen', // Alternative Site title for SEO
  siteTitleShort: 'MarcoDC', // short_name for manifest
  siteHeadline: 'Marco de Cara is a web developer based in Copenhagen, he likes React, Gatsby, styled-components, and a bunch of other stuff', // Headline for schema.org JSONLD
  siteUrl: 'https://marcodecara.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: "Marco de Cara's personal website. He is a web developer, by the way",
  author: 'Marco de Cara', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  //userTwitter: '', // Twitter Username
  //ogSiteName: '', // Facebook Site Name
  //ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-139454760-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
