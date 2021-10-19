<template>
  <div class="flash">
    <flash-header :class="{ topactive: toshow }"></flash-header>
    <div class="totop" :class="{ toactive: show }" @click="ontop"></div>
    <Nuxt />
    <flash-bottom></flash-bottom>
  </div>
</template>
<script>
export default {
  head() {
    return {
      htmlAttrs: {
        lang: this.$store.state.lang.value
      },
      title: this.$t("s_1"),
      link: [
        {
          rel: "alternate",
          hreflang: "th",
          href: "https://www.flash-hr.com" + (this.href === "/" ? "" : this.href)
        },
        {
          rel: "alternate",
          hreflang: "en",
          href: "https://www.flash-hr.com/en" + (this.href === "/" ? "" : this.href)
        },
        {
          rel: "alternate",
          hreflang: "zh",
          href: "https://www.flash-hr.com/zh" + (this.href === "/" ? "" : this.href)
        }
      ],
      meta: [
        { name: "keywords", content: this.$t("s_3") },
        { hid: "description", name: "description", content: this.$t("s_2") },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@site_username" },
        { name: "og:description", content: this.$t("s_2") },
        { name: "og:title", content: this.$t("6") },
        { name: "og:image", content: require("../assets/image/Logo.png") },
        { name: "og:url", content: "https://www.flash-hr.com" }
      ]
    };
  },
  data() {
    return {
      toshow: false,
      show: true,
      href: ""
    };
  },
  watch: {
    $route: {
      handler(val) {
        this.href = val.fullPath.substr(val.params.lang ? 3 : 0);
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.toshow = window.pageYOffset > 44;
      this.show = window.pageYOffset < 375;
    },
    ontop() {
      const main = document.querySelector("main");
      main.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }
};
</script>
<style lang="less">
html {
  word-spacing: 1px;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.active {
  animation: 2s opacity2;
  -webkit-animation: 2s opacity2;
  -moz-animation: 2s opacity2;
}
.topactive {
  box-shadow: 0px 5px 18px 0px rgba(0, 0, 0, 0.2);
}
.flash {
  overflow: auto;
  max-width: 750px;
  margin: 0 auto;
}
.totop {
  position: fixed;
  height: 0.3rem;
  width: 0.3rem;
  background: url("~assets/image/totop.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  bottom: 0.2rem;
  right: 0.2rem;
  z-index: 999;
  border-radius: 50%;
}
.toactive {
  display: none;
}
@keyframes opacity2 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
