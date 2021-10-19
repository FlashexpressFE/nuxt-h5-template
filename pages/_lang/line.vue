<template>
  <main>
    <div class="banner active">
      <p>Line</p>
      <img width="280" height="280" src="~/assets/image/line.jpg" :alt="$t('74')" />

      <div class="ta">
        <a :href="$path('/contact-us')">{{ $t("64") }}</a
        ><a :href="$path('')">{{ $t("92") }}</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
main {
  padding-top: 0.44rem;
  .banner {
    width: 92%;
    padding: 0.24rem 0 1.2rem 0;
    margin: 0 auto;
    img {
      width: 2.8rem;
      height: 2.8rem;
      margin: 0 auto;
    }
    p {
      padding: 0.24rem 0 0.28rem 0;
      font-size: 0.3rem;
      font-weight: 900;
      text-align: center;
      color: #1592ff;
      line-height: 0.3rem;
    }
    .ta {
      display: flex;
      flex-direction: row;
      justify-content: center;
      a {
        border: 1px solid #1592ff;
        border-radius: 2px;
        background: #fff;
        margin: 0 12px;
        font-size: 0.16rem;
        font-weight: 400;
        text-align: center;
        color: #1592ff;
        line-height: 0.24rem;
        padding: 0.05rem 0.4rem;
      }
      a:last-child {
        background: #1592ff;
        box-shadow: 0px 10px 24px 0px rgba(21, 146, 255, 0.18);
        text-shadow: 0px 10px 24px 0px rgba(21, 146, 255, 0.18);
        color: #ffffff;
      }
    }
  }
}
</style>
