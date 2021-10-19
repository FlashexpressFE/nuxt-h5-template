<template></template>
<script>
import { getPlatform, androidDownloadUrl, iOSDownloadUrl } from "~/util";
export default {
  layout: "blank",
  mounted() {
    if (getPlatform() === "IPHONE") {
      window.location.href = iOSDownloadUrl;
    } else {
      window.location.href = androidDownloadUrl;
    }
  }
};
</script>
