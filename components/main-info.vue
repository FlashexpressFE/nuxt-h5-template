<template>
  <div class="main-info">
    <section class="banner">
      <h1>{{ $t("6") }}</h1>
      <Collapse v-model="activeNames">
        <CollapseItem
          v-for="(item, index) in functionInfoList"
          :title="$t(item.title)"
          :name="index"
          :key="index"
          :icon="item.image"
          ><p>{{ $t(item.info) }}</p></CollapseItem
        >
      </Collapse>
    </section>
  </div>
</template>

<script>
import { Collapse, CollapseItem } from "vant";
import { functionInfoList } from "~/util/config.js";
export default {
  components: { Collapse, CollapseItem },

  data() {
    return {
      functionInfoList,
      activeNames: [0]
    };
  }
};
</script>

<style lang="less" scoped>
.main-info {
  .banner {
    width: 92%;
    margin: 0 auto;
    padding: 0.24rem 0;

    h1 {
      font-size: 0.2rem;
      padding: 0 0.5rem;
      line-height: 0.28rem;
      text-align: center;
      padding-bottom: 0.2rem;
    }
    /deep/.van-cell {
      padding: 0.12rem 0;
      font-size: 0.14rem;
      span {
        font-weight: 500;
      }
      /deep/.van-cell__left-icon {
        padding-top: 0.04rem;
        margin-right: 0.12rem;
      }
    }
    /deep/.van-collapse-item__content {
      padding: 0.16rem 0;
      color: #606266;
    }
    p {
      font-size: 0.14rem;
    }
  }
}
</style>
