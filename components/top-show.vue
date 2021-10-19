<template>
  <div class="show">
    <section class="banner">
      <h1>{{ $t(info.title) }}</h1>
      <p>{{ $t(info.word) }}</p>
      <apply-button :category="category" :label="label"></apply-button>
      <img :src="info.image" :alt="$t(info.alt)" />
    </section>
  </div>
</template>

<script>
export default {
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
