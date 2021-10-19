<template>
  <div class="blog">
    <h2 class="title">{{ $t("169") }}</h2>
    <Swipe :autoplay="3000">
      <SwipeItem v-for="(item, index) in articleList" :key="index" class="blog-item">
        <client-only><div class="img"><VanImage lazy-load :src="item.pic_object_url" alt="" /></div></client-only>
        <nuxt-link :to="$path(`/blog/${item.url || ''}`)">
          <h3>{{ item.title }}</h3>
          <div class="tag">
            <span class="tag-item" v-for="(tag, tagIndex) in item.tag" :key="tagIndex">{{ tag.tag_name }}</span>
          </div>
          <p>{{ item.content_intro }}</p>
          <div class="footer">
            <span class="author">
              <img width="12" height="12" src="~/assets/image/icon2/icon_blog1.png" alt="" />
              <i>{{ item.author }}</i>
            </span>
            <span class="time">
              <img width="12" height="12" src="~/assets/image/icon2/icon_blog2.png" alt="" />
              <i>{{ item.publish_at }}</i>
            </span>
            <span>
              <img width="12" height="12" src="~/assets/image/icon2/icon_blog3.png" alt="" />
              <i>{{ item.pv }}</i>
            </span>
          </div>
        </nuxt-link>
      </SwipeItem>
    </Swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Image as VanImage } from "vant";
export default {
  components: { Swipe, SwipeItem, VanImage },
  props: {
    articleList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped lang="less">
.blog {
  background: #fafcff;
  padding: 0.24rem 0;
  .title {
    font-size: 0.18rem;
    font-weight: 500;
    text-align: center;
    color: #303133;
    margin: 0 0.6rem 0.16rem 0.6rem;
  }
  /deep/ .van-swipe {
    width: 2.79rem;
    margin: 0 auto;
  }
  &-item {
    width: 2.79rem;
    border: 0.01rem solid #dcdee0;
    margin: 0 auto;
    a {
      display: block;
    }
    .img {
      width: 100%;
      .van-image {
        width: 2.79rem;
        height: 1.57rem;
      }
    }
    h3 {
      padding: 0.16rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      margin-bottom: 0.04rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .tag {
      margin: 0 0.16rem;
      color: rgba(0, 0, 0, 0.85);
      &-item {
        display: inline-block;
        margin-right: 0.04rem;
        margin-bottom: 0.02rem;
        font-size: 0.12rem;
        padding: 0.03rem 0.06rem;
        background: #f6f7f8;
        border-radius: 0.02rem;
        white-space: nowrap;
      }
    }
    p {
      padding: 0 0.16rem;
      font-size: 0.14rem;
      color: rgba(0, 0, 0, 0.65);
      margin-top: 0.12rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    .footer {
      margin-left: 0.16rem;
      margin-top: 0.4rem;
      margin-bottom: 0.24rem;
      span {
        font-size: 0.12rem;
        color: rgba(0, 0, 0, 0.45);
        img {
          display: inline-block;
          width: 0.16rem;
        }
        i {
          vertical-align: middle;
        }
        &:nth-child(2) {
          margin: 0 0.16rem;
        }
      }
    }
  }
}
</style>
