<!-- 薪酬管理 -->
<template>
  <main>
    <top-show category="FHRPayroll" label="PosterTrial" :info="swiperlists[0]" class="active"> </top-show>
    <structure-info v-for="(item, index) in infolist[0].childer" :key="index" :info="item"> </structure-info>
    <blog-banner v-if="articleList && articleList.length" :articleList="articleList"></blog-banner>
    <form-info category="FHRPayroll" label="BottomTrialButton"></form-info>
  </main>
</template>

<script>
import { infolist, swiperlists, structuredData } from "~/util/config.js";
export default {
  async asyncData({ $axios }) {
    // 薪酬管理 在blog标签中id为1
    let id = 1;
    let type = "tag";
    let res1 = await $axios.get(`/pub/article/items?page=&size=&type=${type}&id=${id}`);
    let res = res1.code === 1 ? res1.data : {};
    let articleList = [];
    if (res.items) {
      articleList = res.items.splice(0, 9);
    }
    return { articleList };
  },
  head() {
    return {
      title: this.$t("x_1"),
      meta: [
        { name: "keywords", content: this.$t("x_3") },
        { hid: "description", name: "description", content: this.$t("x_2") }
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: structuredData("https://www.flash-hr.com/smart-payroll-salary-slip-management-online", this.$t("22"))
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
