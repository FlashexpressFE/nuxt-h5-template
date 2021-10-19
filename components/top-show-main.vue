<!--
 * @Author: your name
 * @Date: 2021-08-26 20:26:42
 * @LastEditTime: 2021-10-19 11:30:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /flash-hr-website/components/top-show-main.vue
-->
<template>
  <div class="show">
    <section class="banner">
      <h1>{{ $t(info.title) }}</h1>
      <p>{{ $t(info.word) }}</p>
      <apply-button :category="category" :label="label"></apply-button>
      <client-only><VanImage lazy-load :width="2.54 * 100" :height="1.6 * 100" :src="info.image" :alt="$t(info.alt)" /></client-only>
    </section>
  </div>
</template>

<script>
import { Image as VanImage } from "vant";
export default {
  components: { VanImage },
  props: {
    info: { type: Object, default: {} },
    category: { type: String },
    label: { type: String }
  }
};
</script>

<style lang="less" scoped>
.show {
  background: #fafcff;
  .banner {
    width: 92%;
    margin: 0 auto;
    padding: 0.32rem 0 0.21rem 0;
    text-align: center;
    h1 {
      font-size: 0.28rem;
      line-height: 0.41rem;
      font-weight: 600;
    }
    p {
      font-size: 0.14rem;
      line-height: 0.2rem;
      font-weight: 400;
      padding: 0.08rem 0 0.16rem 0;
    }
    button {
      margin-bottom: 0.24rem;
    }
    img {
      width: 2.54rem;
      height: 1.6rem;
      margin: 0 auto;
    }
  }
}
</style>
