require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE
const googleAnalyticsTrackingId = process.env.GOOGLE_ANALYTICS_ID

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Clean`,
    // Default title of the page
    siteTitleAlt: `Clean - clean my dirty money`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Clean - clean my dirty money`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://cara.lekoarts.de`,
    // Used for SEO
    siteDescription: `Wow ur investing in carbon? So out of fashion`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `g`,
  },
};
