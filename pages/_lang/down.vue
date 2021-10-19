<template>
  <main>
    <section class="down active" v-if="phone">
      <img src="~/assets/image/logo_APP.png" :alt="$t('g_4')" />
      <h1>{{ $t("74") }}</h1>
      <p>{{ $t("75") }}</p>
      <a :href="downurl">{{ $t("77") }}</a>
    </section>
    <section class="down active" v-else>
      <img src="~/assets/image/logo_APP.png" :alt="$t('g_4')" />
      <h4>{{ $t("104") }}</h4>
      <p>{{ $t("75") }}</p>
      <a :href="downurl">{{ $t("77") }}</a>
    </section>
    <section class="info-about">
      <h3>{{ $t("61") }}</h3>
      <p>
        {{ $t("62") }}
      </p>
      <img src="~/assets/image/img_Macbook.png" :alt="$t('g_4')" />
    </section>
  </main>
</template>

<script>
import { getPlatform, androidDownloadUrl, iOSDownloadUrl } from "~/util";
export default {
  head() {
    return {
      title: this.$t("g_1"),
      meta: [
        { name: "keywords", content: this.$t("g_3") },
        { hid: "description", name: "description", content: this.$t("g_2") }
      ]
    };
  },
  data() {
    return {
      phone: true,
      downurl: ""
    };
  },
  mounted() {
    if (getPlatform() === "IPHONE") {
      this.phone = true;
      this.downurl = iOSDownloadUrl;
    } else {
      this.phone = false;
      this.downurl = androidDownloadUrl;
    }
  }
};
</script>

<style lang="less" scoped>
main {
  padding-top: 0.44rem;
  .down {
    padding: 0.64rem 0.16rem 1.2rem;
    text-align: center;
    img {
      height: 0.88rem;
      width: 0.88rem;
      margin: 0 auto;
    }
    h1 {
      font-size: 0.2rem;
      line-height: 0.28rem;
      font-weight: 500;
      padding-top: 0.48rem;
    }
    p {
      padding: 0.08rem 0 0.64rem;
      font-size: 0.14rem;
      line-height: 0.2rem;
      color: #606266;
    }
    a {
      display: block;
      margin: 0 auto;
      width: 35%;
      height: 0.3rem;
      background: #1592ff;
      color: #fff;
      font-size: 0.16rem;
      line-height: 0.3rem;
      border: none;
      border-radius: 4px;
      box-shadow: 0px 10px 24px 0px rgba(21, 146, 255, 0.18);
    }
  }
  .info-about {
    padding: 0.24rem 0.16rem;
    text-align: left;
    h3 {
      font-size: 0.16rem;
      line-height: 0.22rem;
      color: #303133;
    }
    p {
      color: #606266;
      padding: 0.08rem 0 0.16rem;
      font-size: 0.14rem;
      line-height: 0.2rem;
    }
    img {
      width: 3.2rem;
      height: 1.9rem;
      margin: 0 auto;
    }
  }
}
</style>
