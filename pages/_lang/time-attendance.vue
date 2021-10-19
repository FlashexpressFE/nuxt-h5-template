<template>
  <!-- 考勤管理 -->
  <main>
    <top-show category="FHRAttendance" label="PosterTrial" :info="swiperlists[1]" class="active"> </top-show>
    <structure-info v-for="(item, index) in infolist[1].childer" :key="index" :info="item"> </structure-info>
    <blog-banner v-if="articleList && articleList.length" :articleList="articleList"></blog-banner>
    <form-info category="FHRAttendance" label="BottomTrialButton"></form-info>
  </main>
</template>

<script>
import { infolist, swiperlists, structuredData } from "~/util/config.js";
export default {
  async asyncData({ $axios }) {
    // 考勤管理 在blog标签中id为2
    let id = 2;
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
      title: this.$t("k_1"),
      meta: [
        { name: "keywords", content: this.$t("k_3") },
        { hid: "description", name: "description", content: this.$t("k_2") }
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: structuredData("https://www.flash-hr.com/time-attendance", this.$t("18"))
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
