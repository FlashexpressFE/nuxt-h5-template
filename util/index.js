export const isIos = () => /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);

export const isAndroid = () => /(Android)/i.test(navigator.userAgent);

export const getPlatform = () => (process.client ? (isIos() ? "IPHONE" : "ANDROID") : "IPHONE");

export const androidDownloadUrl =
  "https://play.google.com/store/apps/details?id=com.flashexpress.backyard.commercialization";

export const iOSDownloadUrl = "https://apps.apple.com/app/apple-store/id1529119065";

export const objReduce = (obj = {}) => {
  let res = {};
  let _res = {};
  for (const key in obj) {
    if (Object.prototype.toString.call(obj[key]) === "[object Object]") {
      _res = objReduce(obj[key]);
    } else {
      res[key] = obj[key];
    }
  }
  return Object.assign({}, res, _res);
};
export const toUrl = (url = "", params) => {
  let paramsArr = [];
  if (params) {
    for (const key in objReduce(params)) paramsArr.push(key + "=" + encodeURIComponent(objReduce(params)[key]));
    url += (url.includes("?") ? "&" : "?") + paramsArr.join("&");
  }
  return url;
};

export const openApp = (type, params = {}) => toUrl(`flashhr://fe/${type}`, params);

export const ft = (lang = {}, str, obj) => {
  let res = lang[str];
  !res && (res = str);
  // !res && (res = str) && console.warn(`${str} 字典项不存在 哦 ~~~ ^-^`);
  if (obj) for (const k in obj) res = res.replace(`{${k}}`, obj[k]);
  return res;
};
