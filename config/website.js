const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Marco, web developer in Barcelona', // Navigation and Site Title
  siteTitleAlt: 'Marco, web developer', // Alternative Site title for SEO
  siteTitleShort: 'Marco', // short_name for manifest
  siteHeadline: 'Marco de Cara is a web developer based in Barcelona, he likes React, Gatsby, Styled-components, and a bunch of other neat web techs', // Headline for schema.org JSONLD
  siteUrl: 'https://marcodecara.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: "Web developer based in Barcelona. Enjoys working in the front-end around the ReactJS environment",
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
