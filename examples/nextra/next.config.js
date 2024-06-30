const { remarkCodeHike } = require("@apostel/mdx")

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.mjs",
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, { theme: "material-palenight" }]],
  },
})

module.exports = withNextra()
