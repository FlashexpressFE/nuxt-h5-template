<template>
  <main>
    <div class="top active">
      <div class="banner">
        <h1>{{ $t("110") }}</h1>
        <p>{{ $t("94") }}</p>
      </div>
    </div>
    <div class="form-info">
      <form-submit></form-submit>
      <div class="word-info">
        <div class="banner">
          <h4>
            {{ $t("98") }}
          </h4>
          <a href="mailto:support@flash-hr.com">
            {{ $t("100") }}
          </a>
          <h5>{{ $t("99") }}</h5>
          <p>
            {{ $t("101") }}
          </p>
          <div class="size">
            <a :href="item.url" v-for="(item, index) in nlist2.filter(v => !v.tyre)" :key="index">
              <img :src="item.image" :alt="$t(item.alt)" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { nlist2 } from "~/util/config.js";
export default {
  data() {
    return {
      nlist2
    };
  },
  head() {
    return {
      title: this.$t("contact_1"),
      meta: [
        { name: "keywords", content: this.$t("contact_3") },
        { hid: "description", name: "description", content: this.$t("contact_2") }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
main {
  padding-top: 0.44rem;
  .top {
    background: #1592ff;
    background: url("~assets/image/img_call.png") center no-repeat;
    background-size: cover;
    .banner {
      padding: 0.34rem 0 0.37rem;
      width: 92%;
      margin: 0 auto;
      //   background: url("~assets/images/img_call.png") center no-repeat;
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
        font-size: 0.14rem;
        font-weight: 400;
        text-align: center;
        color: #ffffff;
        line-height: 0.2rem;
        padding: 0.08rem 0.16rem 0;
      }
    }
  }
  .form-info {
    .word-info {
      background: #fafcff;
      .banner {
        width: 92%;
        margin: 0 auto;
        padding: 0.24rem 0;
        h4 {
          font-size: 0.2rem;
          font-weight: 400;
          text-align: left;
          color: #303133;
          line-height: 0.28rem;
        }
        h5 {
          padding: 0.16rem 0 0.08rem;
          font-size: 0.14rem;
          font-weight: 400;
          text-align: left;
          color: #222a41;
          line-height: 0.2rem;
        }
        a {
          font-size: 0.14rem;
          font-weight: 400;
          text-align: left;
          color: #1592ff;
          line-height: 0.2rem;
        }

        p {
          font-size: 0.14rem;
          font-weight: 400;
          text-align: left;
          color: #606266;
          line-height: 0.2rem;
          padding-bottom: 0.16rem;
        }
        .size {
          display: flex;
          flex-direction: row;

          img {
            height: 0.36rem;
            width: 0.36rem;
            margin-right: 0.1rem;
          }
        }
      }
    }
  }
}
</style>
