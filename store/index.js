import { langArr } from "~/util/config";

export const state = () => ({
  langArr,
  lang: {},
  env: {},
  langPack: {}
});

export const mutations = {
  set_env(state, env) {
    state.env = env || {};
  },
  set_lang(state, lang) {
    state.lang = lang;
  },
  set_langPack(state, data) {
    state.langPack = data;
  }
};

export const actions = {
  async nuxtServerInit({ state, commit }, { $axios }) {
    const res = await $axios.get(
      `https://ard-static.flashexpress.com/new-flash-hr-website/lang/${state.lang.value}.json?${new Date().getTime()}`
    );
    if (res.response?.status) {
      await commit("set_langPack", (await import(`../local/${state.lang.value}.json`)).default);
      return false;
    }
    await commit("set_langPack", res);
  }
};
