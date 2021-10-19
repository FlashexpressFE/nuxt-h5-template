<template>
  <div class="blog-select">
    <div class="category">
      <span
        v-for="item in enums.category"
        :key="item.id"
        :class="['category-item', item.url == val.url ? 'category-active' : '']"
      >
        <nuxt-link :to="item.id == 0 ? $path(`/blog`) : $path(`/category/${item.url}`)">{{
          item.category_name
        }}</nuxt-link>
      </span>
    </div>
    <div class="tag" v-if="enums.tag && Object.keys(enums.tag) && Object.keys(enums.tag).length">
      <span v-for="item in enums.tag" :key="item.id" :class="['tag-item']">
        <nuxt-link :to="$path(`/tag/${item.url || ''}`)">{{ item.tag_name }}</nuxt-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    enums: {
      type: Object
    },
    val: {
      type: Object
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="less">
.category {
  display: flex;
  padding: 0 0.16rem;
  overflow-x: scroll;
  border-bottom: 1px solid #ebedf0;
  box-sizing: border-box;
  &-item {
    margin-right: 0.24rem;
    white-space: nowrap;
    padding-top: 0.12rem;
    padding-bottom: 0.08rem;
    box-sizing: border-box;
    a {
      color: #303133;
      font-size: 0.14rem;
    }
    &:hover {
      a {
        color: #1592ff;
        font-weight: 500;
      }
    }
    &.category-active {
      border-bottom: 1px solid #1592ff;
      a {
        color: #1592ff;
        font-weight: 500;
      }
    }
    &:last-child {
      margin: 0;
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
.tag {
  margin-top: 0.12rem;
  white-space: nowrap;
  font-size: 0.14rem;
  color: rgba(0, 0, 0, 0.65);
  overflow-y: auto;
  padding-left: 0.16rem;
  &::-webkit-scrollbar {
    display: none;
  }
  &-item {
    margin-right: 0.08rem;
    a {
      display: inline-block;
      background: #f6f7f8;
      border-radius: 0.02rem;
      padding: 0 0.08rem;
      cursor: pointer;
    }
    &:hover {
      color: #1592ff;
    }
  }
  &-active {
    a {
      background: #f0f8ff;
      color: #1592ff;
    }
  }
}
</style>
