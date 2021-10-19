<template>
  <!-- 组织架构 -->
  <main>
    <top-show category="FHRSturcture" label="PosterTrial" :info="swiperlists[3]" class="active"> </top-show>
    <structure-info v-for="(item, index) in infolist[3].childer" :key="index" :info="item"> </structure-info>
    <blog-banner v-if="articleList && articleList.length" :articleList="articleList"></blog-banner>
    <form-info category="FHRSturcture" label="BottomTrialButton"></form-info>
  </main>
</template>

<script>
import { infolist, swiperlists, structuredData } from "~/util/config.js";
export default {
  async asyncData({ $axios }) {
    // 组织架构 在blog标签中id为4
    let id = 4;
    let type = "tag";
    let res1 = await $axios.get(`/pub/article/items?page=&size=&type=${type}&id=${id}`);
    let res = res1.code === 1 ? res1.data : {};
    let articleList = [];
    if (res.items) {
      articleList = res.items.splice(0, 9);
    }
    return { articleList };
  },
  // 该路由已废弃，302 到 首页
  middleware: "home-page",
  head() {
    return {
      title: this.$t("z_1"),
      meta: [
        { name: "keywords", content: this.$t("z_3") },
        { hid: "description", name: "description", content: this.$t("z_2") }
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: structuredData("https://www.flash-hr.com/company-organization-structure-management", this.$t("16"))
    };
  },
  data() {
    return {
      infolist,
      swiperlists
    };
  }
};
</script>

<style lang="less" scoped>
main {
  padding-top: 0.44rem;
  .structure:nth-child(3) {
    background: #fafcff;
  }
}
</style>
