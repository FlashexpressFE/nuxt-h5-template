<template>
  <div class="breadcrumb">
    <nuxt-link :to="$path('/')">{{ $t("home") }}</nuxt-link>
    <i class="el-icon-arrow-right">></i>
    <nuxt-link :to="$path('/blog')">{{ $t("cms_articles_2") }}</nuxt-link>
    <i class="el-icon-arrow-right">></i>
    <span>{{ detail.title || value[`${type}_name`] }}</span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    },
    detail: {
      type: Object
    },
    value: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.breadcrumb {
  padding: 0.1rem 0.16rem;
  border-bottom: 0.01rem solid rgba(0, 0, 0, 0.06);
  font-size: 0.14rem;
  i {
    color: #c0c4cc;
  }
}
</style>
