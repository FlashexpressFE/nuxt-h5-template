module.exports = {
  development: {
    node_env: "development",
    baseUrl: "http://192.168.0.230:8800",
    visit: "http://127.0.0.1:8056",
    translate: "https://ard-static.flashexpress.com/new-flash-hr-website/lang/",
    lang: "zh"
  },
  trunk: {
    node_env: "trunk",
    baseUrl: "http://192.168.0.230:8800",
    visit: "http://127.0.0.1:8056",
    translate: "https://ard-static.flashexpress.com/new-flash-hr-website/lang/",
    lang: "zh"
  },
  training: {
    node_env: "training",
    baseUrl: "https://backyard-api-tra.flash-hr.com",
    visit: "https://m-tra.flash-hr.com",
    translate: "https://ard-static.flashexpress.com/new-flash-hr-website/lang/",
    lang: "th"
  },
  production: {
    node_env: "production",
    baseUrl: "https://backyard-api.flash-hr.com",
    visit: "https://m.flash-hr.com",
    translate: "https://ard-static.flashexpress.com/new-flash-hr-website/lang/",
    lang: "th"
  }
};
