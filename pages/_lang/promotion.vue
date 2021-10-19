<template>
  <div class="promotion">
    <img class="promotion-logo" src="~assets/image/Logo.png" />
    <img class="promotion-img" src="~assets/image/logo_APP.png" />
    <div class="promotion-client">{{ promotionTitle }}</div>
    <p>{{ $t("152") }}</p>
    <div class="promotion-down">
      <Button type="primary" block @click="downHandle">{{ $t("153") }}</Button>
    </div>
    <div class="promotion-tip">
      <i>{{ $t("154") }}</i>
      <i
        >{{ $t("155") }}<span @click="refreshHandle">{{ $t("156") }}</span></i
      >
    </div>
  </div>
</template>

<script>
/*
url协议格式：
flashhr://fe/type?param1=value1&param2=value2

type标识业务：
/tab(app打开指定tab页面), /page(app打开指定native页面), /html(app打开网页), /browser(app打开浏览器)

参数：
打开页面需要的参数，如果是URL需要urlencode

示例：
打开tab页：flashhr://fe/tab?index=home（home:首页；message：消息列表页；approval：审批页面；mine：我的页面）
在tab页打开url：flashhr://fe/tab?index=approval&url=urlencode('https://flashexpress.com')（在审批tab页打开官网）
打开消息详情页面：flashhr://fe/page?path=message&messageid=1554311141173414083862
打开关于页面：flashhr://fe/page?path=about
打开登录页面：flashhr://fe/page?path=rootlogin
在app内打开网页：flashhr://fe/html?url=urlencode('https://flashexpress.com')
在浏览器中打开网页：flashhr://fe/browser?url=urlencode('https://flashexpress.com')
*/
import { isIos, isAndroid, androidDownloadUrl, iOSDownloadUrl, openApp } from "~/util";
import { Button } from "vant";

export default {
  components: { Button },
  layout: "blank",
  data() {
    return {
      timer: null,
      promotionTitle: ""
    };
  },
  mounted() {
    this.promotionTitle = isIos() ? this.$t("150") : this.$t("151");
    this.init();
  },
  methods: {
    init() {
      window.location.href = openApp("page", { index: "home" });
      this.timer = setTimeout(() => this.downHandle(), 3500);
      document.addEventListener("visibilitychange", () => {
        if (document.hidden || document.webkitHidden || document.visibilityState === "hidden") clearTimeout(this.timer);
      });
      window.addEventListener("pagehide", () => clearTimeout(this.timer));
    },
    downHandle() {
      if (isIos()) {
        window.location.href = iOSDownloadUrl;
      } else if (isAndroid()) {
        window.location.href = androidDownloadUrl;
      }
    },
    refreshHandle() {
      window.location.reload();
    }
  }
};
</script>

<style lang="less" scoped>
.promotion {
  width: 92%;
  margin: 0 auto;
  padding: 0.1rem 0;
  box-sizing: border-box;
  &-logo {
    width: 0.92rem;
    height: 0.24rem;
  }
  &-img {
    width: 90px;
    border-radius: 50%;
    margin: 60px auto;
    // box-shadow: 0 0 1px @fle-base-color;
  }
  &-client {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    color: #303133;
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
    text-align: center;
    color: #606266;
    margin-bottom: 60px;
  }
  &-down {
    width: 90%;
    margin: 0 auto 24px;
  }
  /deep/ .van-button {
    font-size: 16px;
    color: #ffffff;
    text-shadow: 0px 10px 24px 0px rgba(21, 146, 255, 0.18);
  }
  &-tip {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.25);
    align-items: center;
    span {
      color: @fle-base-color;
      cursor: pointer;
    }
  }
}
</style>
