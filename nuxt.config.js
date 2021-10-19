import env from "./env";

export default {
  env: env[process.env.NODE_ENV],
  server: { port: 8056, host: "0.0.0.0" },
  googleAnalytics: { id: "xxxxxxxx" },
  loading: false,
  head: {
    htmlAttrs: { lang: "en" },
    title: "Flash HR",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" },
      {
        name: "google-site-verification",
        content: "xxxxxxxx"
      }
    ],
    script: [
      { async: true, src: "https://www.googletagmanager.com/gtag/js?id=xxxxxxxx" },
      { async: true, src: "https://www.googletagmanager.com/gtag/js?id=xxxxxxx" },
      { async: true, src: "/ga4.js" },
      { async: true, src: "/ua.js" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
    __dangerouslyDisableSanitizers: ["script"]
  },
  css: [
    { src: "~/assets/less/reset.less", lang: "less" },
    { src: "~/assets/less/prompt.less", lang: "less" }
  ],
  plugins: [
    { src: "~/plugins/i18n", ssr: true },
    { src: "~/plugins/axios", ssr: true },
    { src: "~/plugins/fastclick", ssr: false },
    { src: "~/plugins/dompurify-html", ssr: false },
    { src: "~/plugins/van-lazy-load", ssr: false },
    { src: "~/plugins/lazy-load-img", ssr: false }
  ],
  components: true,
  buildModules: ["@nuxtjs/google-analytics"],
  modules: ["cookie-universal-nuxt", "@nuxtjs/axios"],
  router: {
    prefetchLinks: true
  },
  build: {
    extractCSS: { ignoreOrder: true },
    analyze: false,
    vendor: ["axios"],
    transpile: [/vant.*?less/],
    babel: {
      plugins: [["import", { libraryName: "vant", style: name => name + "/style/less" }, "vant"]]
    },
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: { hack: `true; @import "./assets/less/variables.less";` }
        }
      }
    }
  }
};
