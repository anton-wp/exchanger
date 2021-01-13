const isProd = false

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/anton-wp/exchanger.github.io/gh-pages/' : '',
}
