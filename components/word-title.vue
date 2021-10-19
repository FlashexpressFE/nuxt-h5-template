<template>
  <div class="title">
    <section class="banner">
      <p>{{ $t("15") }}</p>
      <apply-button></apply-button>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.title {
  background: #1592ff;
  background: url("~assets/image/img_banner_1.png") center no-repeat;
  background-size: cover;
  .banner {
    width: 92%;
    margin: 0 auto;
    padding: 0.16rem 0;
    text-align: center;
    p {
      color: #fff;
      font-size: 0.16rem;
      line-height: 0.24rem;
      font-weight: 400;
    }
    button {
      margin: 0.1rem;
      padding: 0 0.08rem;
      color: #1592ff;
      background: #fff;
      font-size: 0.12rem;
      height: 0.24rem;
      line-height: 0.24rem;
    }
  }
}
</style>
