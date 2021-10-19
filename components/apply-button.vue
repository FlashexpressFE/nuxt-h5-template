<template>
  <button @click="apply">{{ $t("free") }}</button>
</template>

<script>
export default {
  props: {
    category: { type: String },
    label: { type: String },
  },
  methods: {
    apply() {
      const form = document.querySelector(".form-info");
      form.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      // 免费试用埋点
        this.$ga.event(this.category, 'click', this.label, 1)
    }
  }
};
</script>

<style lang="less" scoped>
button {
  padding: 0.07rem 0.24rem;
  font-size: 0.16rem;
  color: #fff;
  line-height: 0.22rem;
  background: #1592ff;
  border: none;
  border-radius: 4px;
}
</style>
