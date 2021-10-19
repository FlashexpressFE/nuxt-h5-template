<template>
  <main>
    <div class="top active">
      <div class="banner">
        <h1>{{ value.h1 }}</h1>
        <p>{{ value.p }}</p>
      </div>
    </div>
    <blog-breadcrumb :detail="detail" :value="value" :type="type"></blog-breadcrumb>
    <blog-detail :detail="detail" v-if="path === 'blog' && $route.params.id"></blog-detail>
    <div v-else>
      <blog-select :val="tak" :enums="enums"></blog-select>
      <blog-list :articleList="articleList" :aList="aList" :hotArticle="hotArticle"></blog-list>
    </div>
  </main>
</template>

<script>
  import { structuredData1, structuredData2 } from "~/util/config.js";
  import { Tab, Tabs, Swipe, SwipeItem } from "vant";
  export default {
    components: { Tab, Tabs, Swipe, SwipeItem },
    async asyncData({ $axios, route }) {
      let path = route.name.split("-")[0] === "lang" ? route.name.split("-")[1] : route.name.split("-")[0];
      let type = path === "blog" ? "category" : path;
      // 获取当前点击项的数据 默认为分类第一项
      let tak = {};
      // 保留标签或分类的内容
      let value = {};
      // 列表详情
      let detail = {};
      let enums = {};
      let hotArticle = {};
      let articleList = {};
      let aList = [];
      // 为true说明没有当前url跳转/blog页面
      let status = false;
      let res1 = await $axios.get("/pub/article/enums"); // 分类、标签接口
      enums = res1.code === 1 ? res1.data : {};
      let res2 = await $axios.get("/pub/article/hotItems"); // 热门文章接口
      hotArticle = res2.code === 1 ? res2.data : {};
      tak = enums.category ? enums.category[0] : {};
      value = enums.category ? enums.category[0] : {};
      if (route.params.id) {
        let type1 = path === "blog" ? "article" : path;
        let res = await $axios.get(`/pub/article/urlDetail?url=${route.params.id}&type=${type1}`); // 热门文章接口
        if (res.code === 3000 || res.code === 0) {
          status = true;
        }
        tak = res.code === 1 ? res.data : {};
        if (path === "tag" || path === "category") {
          enums[type].forEach(item => {
            if (item.url === route.params.id) {
              value = item;
            }
          });
        }
      }
      if (tak.id) {
        // 博客列表接口
        let res3 = await $axios.get(`/pub/article/items?page=&size=&type=${type}&id=${tak.id}`);
        articleList = res3.code === 1 ? res3.data : {};
      }

      if (path === "blog" && route.params.id) {
        let res = await $axios.get(`/pub/article/detail?id=${tak.id}`);
        detail = res.code === 1 ? res.data : {};
      }
      if (articleList.total) {
        aList = articleList.total > 12 ? articleList.items.splice(0, 12) : articleList.items.splice(0, articleList.items.length);
      }
      return { enums, hotArticle, articleList, detail, aList, path, status, tak, value, type };
    },
    data() {
      return {};
    },
    head() {
      return {
        title: !this.$route.params.id ? this.$t("blog-title") : this.tak.page_title || this.tak.title,
        meta: [
          { name: "keywords", content: !this.$route.params.id ? this.$t("blog-keywords") : this.tak.keywords },
          {
            hid: "description",
            name: "description",
            content: !this.$route.params.id ? this.$t("blog-description") : this.tak.description
          }
        ],
        link: [
          {
            rel: "canonical",
            href: "https://www.flash-hr.com" + this.$route.path
          }
        ],
        script: !this.$route.params.id
          ? structuredData1({
            lang: this.$route.params.lang,
            name: this.value.h1,
            id: `https://www.flash-hr.com${this.$route.path}`, 
          })
          : structuredData2({
            lang: this.$route.params.lang,
            id: `https://www.flash-hr.com/${this.$route.params.lang ? this.$route.params.lang + "/" : ""}${this.path}`,
            name: 'Flash HR Blog',
            id1: `https://www.flash-hr.com${this.$route.path}`,
            name1: this.detail.title || this.value.h1
          })
      };
    },
    created() {
      if (this.status) {
        this.$router.push({
          path: this.$path("/blog")
        });
      }
    },
    methods: {}
  };
</script>

<style lang="less" scoped>
  main {
    padding-top: 0.44rem;
    .top {
      background: #1592ff;
      background: url("~assets/image/img_call2.png") center no-repeat;
      background-size: cover;
      .banner {
        padding: 0.34rem 0 0.37rem;
        background-size: cover;
        text-align: center;
        h1 {
          font-size: 0.28rem;
          font-weight: 500;
          text-align: center;
          color: #ffffff;
          line-height: 0.41rem;
        }
        p {
          padding: 0 0.32rem;
          font-size: 0.14rem;
          font-weight: 400;
          color: #ffffff;
          line-height: 0.2rem;
        }
      }
    }
  }

  .not-data {
    margin-top: 10px;
    margin-left: 10px;
  }
</style>
