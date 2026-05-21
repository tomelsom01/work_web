# Set the host name for URL creation
SitemapGenerator::Sitemap.default_host = "https://www.mobilemassagelondon.com"

SitemapGenerator::Sitemap.create do
  add "/", priority: 1.0, changefreq: "daily"

  add "/contact", priority: 0.5
  add "/faq", priority: 0.5

  add "/mobile-massage-kensington", priority: 0.8
  add "/mobile-massage-canary-wharf", priority: 0.8
  add "/mobile-massage-chelsea", priority: 0.8
  add "/mobile-massage-london-bridge", priority: 0.8
end
