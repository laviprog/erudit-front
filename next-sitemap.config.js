/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.erudit-party.ru',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'], // Исключить определенные пути
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.erudit-party.ru/sitemap.xml',
    ],
  },
}