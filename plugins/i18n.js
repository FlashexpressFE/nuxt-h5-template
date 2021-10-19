// 有赞官方：https://youzan.github.io/vant/#/zh-CN/locale
import { Locale } from "vant";
const langConfig = { zh: "zh-CN", en: "en-US", th: "th" };

export default async ({ app, store, params, redirect, route, env }, inject) => {
  if (!route.name) redirect("/404");
  const langs = store.state.langArr.map(v => v.value);
  let lang = params.lang;

  // 有参数，但 参数是错的，需要赋值正确的语言，并重定向到该语言地址
  if (lang && !langs.includes(lang)) lang = env.lang && redirect(route.fullPath.replace(params.lang, env.lang));

  // 有参数且正确，且等于默认参数，重定向到默认地址
  if (lang && lang === env.lang) redirect(route.fullPath.slice(3) || "/");

  // 没有语言，设置为默认语言
  if (!lang) lang = env.lang;

  store.commit("set_lang", store.state.langArr.filter(v => v.value === lang)[0]);
  store.commit("set_env", env);

  if (lang === "zh" || env.node_env === "training")
    app.head.meta.push({ name: "ROBOTS", content: "NOINDEX, NOFOLLOW" });

  app.head.htmlAttrs.lang = lang;
  const langFile = langConfig[lang];
  const vantLang = lang === "th" ? await import(`~/local/th-vant`) : await import(`vant/lib/locale/lang/${langFile}`); // 设置 有赞 的语言包
  Locale.use(langFile, vantLang.default);
  inject("path", href => (lang === env.lang ? `${href}` : `/${lang}${href === "/" ? "" : href}`));
};
