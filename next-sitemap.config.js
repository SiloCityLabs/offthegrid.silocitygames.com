/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://offthegrid.silocitygames.com',
  generateRobotsTxt: true,
  outDir: './out', // Output directory for the generated sitemap
};
