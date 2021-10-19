<template>
  <div class="structure">
    <section class="banner">
      <h2>{{ $t(info.title) }}</h2>
      <p>{{ $t(info.word) }}</p>
      <client-only><VanImage lazy-load :src="info.image" :alt="$t(info.alt)" /></client-only>
    </section>
  </div>
</template>

<script>
import { Image as VanImage } from "vant";
export default {
  components: { VanImage },
  props: {
    info: { type: Object, default: {} }
  }
};
</script>

<style lang="less" scoped>
.structure {
  padding: 0.24rem 0;
  .banner {
    margin: 0 auto;
    width: 92%;
    h2 {
      font-size: 0.18rem;
      font-weight: 600;
      color: #303133;
      line-height: 0.25rem;
    }
    p {
      padding: 0.16rem 0;
      font-size: 0.14rem;
      font-weight: 400;

      color: #606266;
      line-height: 0.2rem;
    }
    img {
      min-height: 1.9rem;
      width: 3.2rem;
      margin: 0 auto;
    }
  }
}
</style>
