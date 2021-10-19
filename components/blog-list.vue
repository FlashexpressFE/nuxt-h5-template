<template>
  <div class="blog" v-if="articleList.total">
    <div class="blog-content" ref="content" @scroll="paperScroll">
      <ul v-if="articleList.total" class="blog-list">
        <li v-for="(item, index) in list" :key="index">
          <nuxt-link class="blog-item" :to="$path(`/blog/${item.url || ''}`)">
            <client-only> <VanImage class="img" lazy-load :src="item.pic_object_url" :alt="item.title" /></client-only>
            <div class="content">
              <h2 class="title">{{ item.title }}</h2>
              <div class="footer">
                <span>
                  <img width="12" height="12" src="~/assets/image/icon2/icon_blog1.png" alt="" />
                  <i>{{ item.author }}</i>
                </span>
                <span>
                  <img width="12" height="12" src="~/assets/image/icon2/icon_blog2.png" alt="" />
                  <i>{{ item.publish_at }}</i>
                </span>
                <span>
                  <img width="12" height="12" src="~/assets/image/icon2/icon_blog3.png" alt="" />
                  <i>{{ item.pv }}</i>
                </span>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
      <div class="not-data" v-else>{{ $t("164") }}</div>
    </div>
    <div class="blog-article">
      <p class="title">{{ $t("162") }}</p>
      <Swipe :autoplay="3000" v-if="hotArticle.hot_items && hotArticle.hot_items.length">
        <SwipeItem v-for="(item, index) in hotArticle.hot_items" :key="index" class="blog-article-item">
          <client-only> <VanImage class="item" lazy-load :src="item.pic_object_url" :alt="item.title" /></client-only>
          <nuxt-link :to="$path(`/blog/${item.url || ''}`)" no-prefetch>
            <p>{{ item.title }}</p>
          </nuxt-link>
        </SwipeItem>
      </Swipe>
      <div class="not-data" v-else>{{ $t("164") }}</div>
    </div>
  </div>
  <div class="not-data" v-else>{{ $t("164") }}</div>
</template>

<script>
import { Swipe, SwipeItem, Image as VanImage } from "vant";
export default {
  components: { Swipe, SwipeItem, VanImage },
  props: {
    articleList: {
      type: Object
    },
    hotArticle: {
      type: Object
    },
    aList: {
      type: Array,
      default() {
        return [];
      }
    },
    num: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {
      list: this.aList,
      start: 1,
      top: 600
    };
  },
  methods: {
    paperScroll() {
      let temp = [];
      let scrollTop = this.$refs.content.scrollTop;
      if (this.list.length < this.articleList.total) {
        if (scrollTop > this.top) {
          temp = this.articleList.items.slice(this.start * this.num, this.start * this.num + this.num);
          this.list.push(...temp);
          this.start = this.start + 1;
          this.top = this.start * 600;
        }
      }
    }
  }
};
</script>

<style scoped lang="less">
.blog {
  &-content {
    max-height: 500px;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &-list {
    margin: 0 0.16rem;
    li {
      cursor: pointer;
      padding: 0.16rem 0;
      border-bottom: 0.01rem solid #ebedf0;
      a {
        display: flex;
      }
      .img {
        width: 1.05rem;
        height: 0.59rem;
      }
      .content {
        margin-left: 0.12rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          font-weight: 500;
          font-size: 0.12rem;
          color: #333333;
          line-height: 0.18rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .footer {
          width: 100%;
          display: flex;
          span {
            display: flex;
            align-items: center;
            img {
              width: 0.12rem;
              height: 0.12rem;
              margin-right: 0.04rem;
            }
            i {
              margin-top: 0.03rem;
              display: inline-block;
              font-size: 0.12rem;
              color: rgba(0, 0, 0, 0.45);
              transform: scale(0.83);
              transform-origin: 0% 0%;
            }
            &:nth-child(2) {
              margin: 0 0.12rem;
            }
          }
        }
      }
      &:hover {
        .title {
          color: #1592ff;
        }
      }
    }
  }

  &-article {
    margin-bottom: 0.24rem;
    .title {
      font-size: 0.16rem;
      color: rgba(0, 0, 0, 0.85);
      line-height: 16px;
      font-weight: 500;
      text-align: center;
      margin: 0.24rem 0 0.16rem 0;
    }
    .van-swipe {
      width: 3.11rem;
      margin: 0 auto;
    }
    &-item {
      width: 100%;
      border: 1px solid #dcdee0;
      box-sizing: border-box;
      a {
        display: block;
      }
      .van-image {
        width: 3.11rem;
        height: 1.75rem;
      }
      p {
        padding: 0.12rem;
        font-size: 0.12rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
    }
  }
}
.not-data {
  margin-top: 0.1rem;
  margin-left: 0.1rem;
}
</style>
