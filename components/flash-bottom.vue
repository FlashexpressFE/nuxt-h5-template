<template>
  <footer>
    <Collapse v-model="activeNames">
      <CollapseItem :title="$t('71')" name="1"
        ><nuxt-link v-for="(item, index) in navlist" :to="$path(item.nav)" :key="index">{{
          $t(item.item)
        }}</nuxt-link></CollapseItem
      >
      <CollapseItem :title="$t('47')" name="2">
        <nuxt-link v-for="(item, index) in infolist" :to="$path(item.path)" :key="index">{{ $t(item.info) }}</nuxt-link>
      </CollapseItem>
    </Collapse>
    <div class="down">
      <nuxt-link :to="$path('/down')">{{ $t("48") }}</nuxt-link>
    </div>
    <div class="contact">
      <div class="banner">
        <div class="logo">
          <img width="92" height="24" src="~/assets/image/logo_white.png" :alt="$t('s_4')" />
        </div>
        <p>
          {{ $t("101") }}
        </p>
      </div>
      <div class="size">
        <a :href="item.url" v-for="(item, index) in nlist2" :key="index">
          <img width="20" height="20" :src="item.image" :alt="$t(item.alt)"
        /></a>
        <p class="phone">
          <a href="tel:063-940-2837">
            <svg
              t="1618799984854"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1251"
              width="19"
              height="19"
              style="transform: translateY(4px)"
            >
              <path
                d="M636.288 689.024l-45.184 33.216c0 0-45.248 21.056-99.52-27.136-54.272-48.256-150.656-158.464-177.792-221.632C286.656 410.176 340.928 383.04 340.928 383.04S411.776 324.288 414.72 313.728c3.008-10.56 42.24-52.736-42.176-165.76C288.192 34.944 268.608 57.536 223.36 92.224 178.176 126.848 114.752 194.688 101.312 273.088 87.744 351.424 78.72 447.872 193.28 619.712s287.808 302.912 384.256 324.032c96.576 21.056 164.352 34.624 260.672-43.712 96.512-78.4 113.152-85.888 69.376-141.632-43.648-55.808-139.84-122.688-154.24-125.44-14.336-2.88-35.008-7.68-67.456 16.32C653.376 673.28 636.288 689.024 636.288 689.024z"
                p-id="1252"
                fill="#aaa6ac"
              ></path>
            </svg>
            063-940-2837</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import { Collapse, CollapseItem } from "vant";
import { navlist, infolist, nlist2 } from "~/util/config.js";
export default {
  components: { Collapse, CollapseItem, nlist2 },
  data() {
    return {
      activeNames: ["1"],
      navlist,
      infolist,
      nlist2
    };
  }
};
</script>

<style lang="less" scoped>
footer {
  .phone {
    font-size: 20px;
    line-height: 47px;
    > a {
      color: #aaa6ac;
      padding: 0;
    }
  }
  background: #1b202d;
  font-size: 0.14rem;
  a {
    width: 100%;
    display: block;
    color: #afb6bc;
    padding: 0.12rem 0;
    font-size: 0.14rem;
  }

  /deep/.van-cell {
    padding: 0.12rem 0.16rem;
    background: #1b202d;
    color: #afb6bc;
  }
  /deep/.van-collapse-item__content {
    padding: 0.16rem 0.16rem;
    background: #000;
    color: #afb6bc;
  }
  .down {
    padding: 0 0.16rem;
  }
  .contact {
    padding-top: 0.16rem;
    border-top: none;
    .banner {
      width: 92%;
      margin: 0 auto;
      .logo {
        width: 0.92rem;
        height: 0.24rem;
        img {
          height: 100%;
          width: 100%;
        }
      }
      p {
        font-size: 0.14rem;
        line-height: 0.24rem;
        text-align: left;
        color: #afb6bc;
        padding: 0.08rem 0 0.17rem 0;
      }
    }
    .size {
      border-top: 1px solid rgba(235, 237, 240, 0.1);
      padding: 0.1rem 0.16rem;
      display: flex;
      > a {
        width: 8%;
        img {
          height: 0.2rem;
          width: 0.2rem;
        }
      }
    }
  }
}
</style>
