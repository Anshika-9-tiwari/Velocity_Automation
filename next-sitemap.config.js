/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://velocity-automation.vercel.app',
  generateRobotsTxt: true, 
  sitemapSize: 5000, 

  // Optional: Priorities and frequency hints
  changefreq: 'weekly',
  priority: 0.7,

  // Explicit include of all main & subpages
  additionalPaths: async (config) => [
    // Main Pages
    await config.transform(config, '/'),
    await config.transform(config, '/solutions'),
    await config.transform(config, '/about'),
    await config.transform(config, '/products'),
    await config.transform(config, '/smartfactory'),
    await config.transform(config, '/industry/automotive'),
    await config.transform(config, '/contact'),

    // Solutions Subpages
    await config.transform(config, '/solutions/people'),
    await config.transform(config, '/solutions/machine'),
    await config.transform(config, '/solutions/security'),
    await config.transform(config, '/solutions/quality'),

    //Products Subpages
    await config.transform(config, '/products/siemens'),
    await config.transform(config, '/products/delta'),
    await config.transform(config, '/products/control_panel'),

    // Smart Factory Subpages
    await config.transform(config, '/smartfactory/smart-machine'),
    await config.transform(config, '/smartfactory/smart-worker'),
    await config.transform(config, '/smartfactory/smart-security'),
    await config.transform(config, '/smartfactory/smart-vision'),

    // Industry Subpages
    await config.transform(config, '/industry/automotive'),
    await config.transform(config, '/industry/food-and-beverages'),
    await config.transform(config, '/industry/manufacturing'),
    await config.transform(config, '/industry/warehouse-and-logistics'),
    await config.transform(config, '/industry/steel'),
  ],
};
