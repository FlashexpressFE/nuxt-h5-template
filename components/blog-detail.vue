<template>
  <div class="detail" v-if="detail.id">
    <section>
      <header>
        <h2 class="title">{{ detail.title }}</h2>
        <div class="tag">
          <nuxt-link class="tag-item" v-for="item in detail.tag" :key="item.tag_id" :to="$path(`/tag/${item.url}`)">
            {{ item.tag_name }}
          </nuxt-link>
        </div>
        <div>
          <span class="author">
            <img width="12" height="12" src="~/assets/image/icon2/icon_blog1.png" alt="" />
            <i>{{ detail.author }}</i>
          </span>
          <span class="time">
            <img width="12" height="12" src="~/assets/image/icon2/icon_blog2.png" alt="" />
            <i>{{ detail.publish_at }}</i>
          </span>
          <span>
            <img width="12" height="12" src="~/assets/image/icon2/icon_blog3.png" alt="" />
            <i>{{ detail.pv }}</i>
          </span>
        </div>
      </header>
      <div
        class="content wangeditor-style"
        v-dompurify-html="detail.content.split('src=').join('data-src=')"
        v-lazy-img
      ></div>
      <div class="praise">
        <img width="48" height="48" src="~/assets/image/icon2/icon_blog4.png" alt="" @click="handlrPraise(detail)" />
        <span>{{ $t("167", { key: detail.praise_number }) }}</span>
        <ShareThis class="sharethis" />
      </div>
    </section>
    <div class="recommend">
      <h2 class="title">{{ $t("163") }}</h2>
      <ul>
        <nuxt-link :to="$path(item.path)" v-for="(item, index) in recommendInfolist" :key="index">
          <client-only> <VanImage lazy-load :src="item.image" :alt="item.info" /></client-only>
          {{ $t(item.info) }}
        </nuxt-link>
      </ul>
    </div>
  </div>
  <div class="not-data" v-else>{{ $t("cms_articles_0") }}</div>
</template>

<script>
import { Image as VanImage } from "vant";

import { recommendInfolist } from "~/util/config.js";
export default {
  components: { VanImage },
  props: {
    detail: {
      type: Object
    }
  },
  data() {
    return {
      recommendInfolist
    };
  },
  methods: {
    async handlrPraise(detail) {
      this.detail.praise_number = Number.parseInt(detail.praise_number) + 1;
      this.$axios.post("/pub/article/praise", {
        id: detail.id
      });
    }
  }
};
</script>

<style scoped lang="less">
.detail {
  section {
    margin: 0 0.16rem;
    header {
      padding-top: 0.16rem;
      padding-bottom: 0.12rem;
      border-bottom: 0.01rem solid rgba(0, 0, 0, 0.06);
      border-radius: 0.01rem;
      .title {
        font-size: 0.18rem;
        font-weight: 500;
        line-height: 0.28rem;
        color: #333333;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .tag {
        font-size: 0.12rem;
        color: rgba(0, 0, 0, 0.85);
        &-item {
          padding: 0.03rem 0.06rem;
          background: #f6f7f8;
          border-radius: 0.02rem;
          margin-right: 0.04rem;
        }
      }
      div {
        width: 100%;
        margin-top: 0.15rem;
        display: flex;
        align-items: center;
        span {
          display: flex;
          align-items: center;
          img {
            width: 0.12rem;
            margin-right: 0.04rem;
          }
          i {
            margin-top: 0.03rem;
            display: inline-block;
            font-size: 0.12rem;
            color: rgba(0, 0, 0, 0.45);
            transform: scale(0.83);
            transform-origin: 0% 0%;
            vertical-align: middle;
          }
          &:nth-child(2) {
            margin: 0 0.12rem;
          }
        }
      }
    }
    .praise {
      text-align: center;
      font-size: 0.14rem;
      color: rgba(0, 0, 0, 0.45);
      padding: 0.24rem 0;
      border-bottom: 0.01rem solid rgba(0, 0, 0, 0.06);
      border-radius: 0.01rem;
      img {
        width: 0.48rem;
        margin: 0 auto;
        margin-bottom: 0.08rem;
      }
      .sharethis {
        margin-top: 0.2rem;
      }
    }
  }
  .recommend {
    margin: 0.24rem 0.16rem;
    .title {
      text-align: center;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      a {
        width: 50%;
        text-align: center;
        font-size: 0.12rem;
        color: rgba(0, 0, 0, 0.85);
        margin-top: 0.16rem;
        padding-right: 0.08rem;
        &:nth-child(2n) {
          padding-right: 0;
          padding-left: 0.08rem;
        }
        img {
          width: 100%;
          margin-bottom: 0.12rem;
        }
      }
    }
  }
}
</style>

<style lang="less">
@import "~@/assets/less/wangeditor.less";
</style>
