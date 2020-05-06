module.exports = {
  title: "journal",
  description: "Life Mission",
  base: "/",
  theme: "yuu",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png",
      },
    ],
  ],
  plugins: [
    [
      "vuepress-plugin-rss",
      {
        base_url: "/",
        site_url: "https://pioneer.sentrei.com",
        count: 30,
      },
      "sitemap",
      {
        hostname: "https://pioneer.sentrei.com",
      },
      "@vuepress/active-header-links",
      "@vuepress/back-to-top",
      "@vuepress/search",
      {
        searchMaxSuggestions: 30,
      },
      "@vuepress/nprogress",
    ],
  ],
  themeConfig: {
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "Home",
        link: "/",
      },
    ],
    yuu: {
      defaultDarkTheme: true,
      defaultColorTheme: "blue",
    },
  },
};
