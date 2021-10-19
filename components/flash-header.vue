<template>
  <header>
    <div class="top-head">
      <div class="banner">
        <img width="92" height="24" :src="imagefun('Logo')" :alt="$t('s_4')" />
        <div class="menubox" @click="checkto(type)">
          <img width="18" height="16" v-if="type" :src="check.menu" :alt="$t(check.alt)" />
          <img width="18" height="16" v-else :src="check.clone" :alt="$t(check.alt)" />
        </div>
      </div>
      <div class="menu-info" v-show="!type">
        <Collapse v-model="activeNames" accordion>
          <div class="down">
            <nuxt-link :to="$path('/')">{{ $t("home") }}</nuxt-link>
          </div>
          <CollapseItem :title="$t('Features ')" name="1"
            ><nuxt-link v-for="(item, index) in infolist" :to="$path(item.path)" :key="index">{{
              $t(item.info)
            }}</nuxt-link></CollapseItem
          >
          <div class="blog">
            <nuxt-link :to="$path('/blog')">{{ $t("blog") }}</nuxt-link>
          </div>
          <div class="down">
            <nuxt-link :to="$path('/contact-us')">{{ $t("contactus") }}</nuxt-link>
          </div>
          <div class="down" @click="download">
            <nuxt-link :to="$path('/down')">{{ $t("download ") }}</nuxt-link>
          </div>
          <CollapseItem :title="$t($store.state.lang.label)" name="2">
            <a v-for="(item, index) in langArr" :key="index" @click="changeLang(item)">{{ $t(item.label) }}</a>
          </CollapseItem>
        </Collapse>
      </div>
    </div>
  </header>
</template>

<script>
import { Collapse, CollapseItem } from "vant";
import { langArr, infolist } from "~/util/config.js";
const imagefun = img => require(`~/assets/image/${img}.png`);
export default {
  components: { Collapse, CollapseItem },
  data() {
    return {
      imagefun,
      type: true,
      infolist,
      langArr,
      check: { menu: imagefun("img_menu"), clone: imagefun("img_clone"), alt: "s_4" },
      activeNames: "3"
    };
  },
  watch: {
    $route(res) {
      this.type = true;
    }
  },
  methods: {
    download() {
      // 下载埋点
      this.$ga.event("FHRTopNavi", "click", "Download", 6);
    },
    checkto(item) {
      this.type = !item;
    },
    changeLang(item) {
      const lang = this.$route.params.lang;
      const path = this.$route.fullPath === "/" ? "" : this.$route.fullPath;
      const pathLang = item.value === this.$store.state.env.lang ? "" : `/${item.value}`;
      const href = lang
        ? path.replace(`/${lang}`, pathLang) === ""
          ? "/"
          : path.replace(`/${lang}`, pathLang)
        : `${pathLang}${path}`;
      this.$store.commit("set_lang", langArr.filter(v => v.value === item.value)[0]);
      this.$router.push(href, () => {
        window.location.reload();
      });
    }
  }
};
</script>

<style lang="less" scoped>
header {
  position: fixed;
  z-index: 999;
  background: #fff;
  width: 100%;
  max-width: 750px;
  .top-head {
    .banner {
      width: 92%;
      margin: 0 auto;
      padding: 0.1rem 0;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      img:first-child {
        width: 0.92rem;
        height: 0.24rem;
      }
      img:last-child {
        width: 0.18rem;
        height: 0.16rem;
      }
    }
    .menu-info {
      width: 100%;
      height: 100vh;
      background: #fff;
      a {
        width: 100%;
        display: block;
        color: #303133;
        padding: 0.12rem 0;
        font-size: 0.14rem;
      }

      /deep/.van-cell {
        padding: 0.12rem 0.16rem;
        color: #303133;
      }
      /deep/.van-collapse-item__content {
        padding: 0.16rem 0.16rem;
        background: #fafcff;
        color: #303133;
      }
      .blog {
        padding: 0 0.16rem;
      }
      .down {
        padding: 0 0.16rem;
      }
    }
  }
  .nuxt-link-active {
    color: #1592ff;
  }
}
</style>
