import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Bagisto SaaS Guide",
  description:
    "User documentation for the Bagisto Multi-Tenant SaaS — super admin, tenants, subscription plans, billing, themes and platform settings.",

  srcDir: "./src",
  cleanUrls: true,
  lastUpdated: true,

  vite: {
    server: {
      host: "0.0.0.0",
    },
  },

  head: [
    ["link", { rel: "icon", type: "image/png", href: "/favicon.ico" }],
  ],

  themeConfig: {
    siteTitle: false,

    logo: {
      light: "/logo.png",
      dark: "/logo.png",
    },

    nav: [
      { text: "Introduction", link: "/getting-started/introduction" },
      { text: "User Guide", link: "https://docs.bagisto.com/" },
      { text: "Dev Docs", link: "https://devdocs.bagisto.com/" },
      { text: "Extensions", link: "https://bagisto.com/en/extensions/" },
    ],

    editLink: {
      pattern:
        "https://github.com/bagisto/bagisto-saas-user-guide/edit/main/src/:path",
      text: "Help us improve this page on GitHub.",
    },

    lastUpdated: {
      text: "Last Updated",
      formatOptions: {
        dateStyle: "full",
      },
    },

    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/bagisto/bagisto" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
        items: [
          {
            text: "Introduction",
            link: "/getting-started/introduction",
            collapsed: false,
            items: [
              { text: "Single Database", link: "/getting-started/single-database" },
              { text: "Multiple Databases", link: "/getting-started/multi-database" },
            ],
          },
        ],
      },
      {
        text: "Super Admin",
        collapsed: false,
        items: [
          { text: "Dashboard & Sign-in", link: "/super-admin/dashboard" },
          { text: "Insights", link: "/super-admin/insights" },
          { text: "Tenant Management", link: "/super-admin/tenant-management" },
          { text: "Tenant Data", link: "/super-admin/tenant-data" },
        ],
      },
      {
        text: "Subscriptions",
        collapsed: false,
        items: [
          { text: "Plan Management", link: "/subscriptions/plan-management" },
          { text: "Purchased Plans & Invoices", link: "/subscriptions/purchased-plans" },
          { text: "Tenant Billing", link: "/subscriptions/tenant-billing" },
        ],
      },
      {
        text: "Settings",
        collapsed: false,
        items: [
          { text: "Agents & Roles", link: "/settings/agents-and-roles" },
          { text: "Currencies & Exchange Rates", link: "/settings/currencies-and-exchange-rates" },
          { text: "Webhooks", link: "/settings/webhooks" },
          { text: "Themes", link: "/settings/themes" },
          { text: "Send Email", link: "/settings/send-email" },
        ],
      },
      {
        text: "Content & Configuration",
        collapsed: false,
        items: [
          { text: "CMS Pages", link: "/content/cms-pages" },
          { text: "Configuration", link: "/content/configuration" },
        ],
      },
      {
        text: "Tenants",
        collapsed: false,
        items: [
          { text: "Registration & Sign-in", link: "/tenants/registration" },
          { text: "Store & Admin Panel", link: "/tenants/store-management" },
          { text: "Storefront Themes", link: "/tenants/storefront-themes" },
          { text: "Profile & Billing", link: "/tenants/profile-and-billing" },
        ],
      },
      {
        text: "Domains",
        collapsed: false,
        items: [
          { text: "CNAME Mapping", link: "/domains/cname-mapping" },
        ],
      },
    ],
  },
});
