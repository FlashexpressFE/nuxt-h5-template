import "vant/lib/icon/local.css";
import { Toast } from "vant";
import { ft } from "~/util";

export default async ({ app, $axios, env: { baseUrl }, store }, inject) => {
  inject("t", (str, obj) => ft(store.state.langPack, str, obj));

  $axios.defaults.baseURL = baseUrl;
  $axios.defaults.timeout = 20 * 1000;

  await $axios.onRequest(config => {
    config.headers["Accept-Language"] = store.state.lang.value;
  });

  await $axios.interceptors.response.use(
    res => {
      const data = res.data;
      const code = data.code;
      if (code !== 1) Toast(data.message || app.$t("151"));
      return data;
    },
    err => {
      Toast(err.message || app.$t("151"));
      return err;
    }
  );
};
