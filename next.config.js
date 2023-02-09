const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  unstable_flexsearch: true,
  unstable_staticImage: true,
});

module.exports = withNextra();
