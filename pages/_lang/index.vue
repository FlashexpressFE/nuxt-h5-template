<template>
  <main>
    <Swipe :autoplay="3000">
      <SwipeItem v-for="(item, index) in swiperlist" :key="index">
        <top-show-main
          category="FHRHome"
          :label="index === 0 ? 'PosterTrial' : 'MiddleTrial0' + index"
          :info="item"
        ></top-show-main>
      </SwipeItem>
    </Swipe>
    <main-info class="active"></main-info>
    <word-title></word-title>
    <div class="function">
      <section class="banner">
        <h2>{{ $t("47") }}</h2>
        <Swipe :autoplay="3000">
          <SwipeItem v-for="(item, index) in effectInfoList" :key="index">
            <nuxt-link :to="$path(item.path)">
              <h3>{{ $t(item.title) }}</h3></nuxt-link
            >
            <div class="tonext">
              <client-only><VanImage lazy-load :src="item.image" :alt="item.alt" /></client-only>
              <p>{{ $t(item.info) }}</p>
            </div>
          </SwipeItem>
        </Swipe>
      </section>
    </div>
    <word-title></word-title>
    <div class="manage active">
      <section class="banner">
        <h2>{{ $t("24") }}</h2>
        <section class="manage-info" v-for="(item, index) in salaryInfoList" :key="index">
          <h3>{{ $t(item.title) }}</h3>
          <p>
            {{ $t(item.info) }}
          </p>
          <client-only><VanImage lazy-load :src="item.img" v-if="item.img" :alt="$t(item.alt)" /></client-only>
        </section>
      </section>
    </div>
    <blog-banner v-if="articleList && articleList.length" :articleList="articleList"></blog-banner>
    <form-info category="FHRHome" label="BottomTrialButton"></form-info>
  </main>
</template>

<script>
import { Swipe, SwipeItem, Image as VanImage } from "vant";

import { effectInfoList, salaryInfoList, swiperlist, imgswipe } from "~/util/config.js";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  url: "https://www.flash-hr.com",
  logo: "https://www.flash-hr.com/img/logo.png",
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "support@flash-hr.com",
      contactType: "customer service",
      areaServed: "TH"
    }
  ],
  sameAs: ["https://www.facebook.com/flashhrofficial/"],
  name: "Flash HR",
  image: "https://www.flash-hr.com/img/logo.png",
  description:
    "Flash HR เป็นโปรแกรมHRที่แน้นการบริหารจัดการบุคลากรเป็นหลัก  ให้บริการฟังกชัน การจัดการข้อมูลลงเวลา การคำนวนเงินเดือน โครงสร้างองค์กร การจัดการการอนุมัติ การสแกนใบหน้าลงชื่อเข้าออกงาน การแจ้งเตือนต่างๆ"
};

const preloadImage = imgswipe("img_banner1");
export default {
  components: { Swipe, SwipeItem, VanImage },

  async asyncData({ $axios }) {
    let res1 = await $axios.get(`/pub/article/items??page=&size=&category=&tag=`);
    let res = res1.code === 1 ? res1.data : {};
    let articleList = [];
    if (res.items) {
      articleList = res.items.splice(0, 9);
    }
    return { articleList };
  },
  head() {
    return {
      title: this.$t("s_1"),
      meta: [
        { name: "keywords", content: this.$t("s_3") },
        { hid: "description", name: "description", content: this.$t("s_2") }
      ],
      __dangerouslyDisableSanitizers: ["script"],
      script: [{ json: structuredData, type: "application/ld+json" }],
      link: [
        {
          rel: "preload",
          as: "image",
          href: preloadImage
        }
      ]
    };
  },
  data() {
    return {
      effectInfoList,
      salaryInfoList,
      swiperlist,
      active: 1
    };
  },
  methods: {
    ontonext(item) {
      this.$router.push({ path: `${item}` });
    }
  }
};
</script>

<style lang="less" scoped>
main {
  padding-top: 0.44rem;
  .function {
    background: #fafcff;
    .banner {
      width: 92%;
      padding: 0.24rem 0;
      margin: 0 auto;
      text-align: center;
      h2 {
        font-size: 0.18rem;
        line-height: 0.25rem;
      }
      h3 {
        font-size: 0.16rem;
        line-height: 0.22rem;
        padding: 0.2rem 0.06rem 0;
      }
      /deep/.van-swipe__indicators {
        bottom: 0;
      }
      .tonext {
        background: #fff;
        padding: 0.16rem 0.16rem 0.1rem;
        text-align: left;
        display: flex;
        justify-content: space-between;
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
        p {
          padding-left: 0.08rem;
          font-size: 0.14rem;
        }
        /deep/ .van-image {
          img {
            width: 0.24rem;
            height: 0.24rem;
          }
        }
      }
    }
  }
  .manage {
    .banner {
      width: 92%;
      margin: 0 auto;
      padding: 0.24rem 0;
      text-align: center;
      h2 {
        font-size: 0.18rem;
        line-height: 0.25rem;
      }
      .manage-info {
        margin: 0.12rem 0;
        border: 1px solid #dcdee0;
        padding: 0.24rem 0.16rem;
        text-align: left;
        h3 {
          font-size: 0.16rem;
          line-height: 0.22rem;
          padding-bottom: 0.06rem;
        }
        p {
          color: #606266;
          font-size: 0.14rem;
          line-height: 0.2rem;
        }
        /deep/ .van-image {
          display: block;
          width: 90%;
          max-width: 300px;
          margin: 0.16rem auto 0;
        }
      }
    }
  }
}
</style>
