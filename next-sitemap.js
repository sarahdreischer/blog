module.exports = {
  siteUrl: "https://softwarewithsarah.com",
  changefreq: "weekly",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  exclude: ["/pages/page/*"],
};
