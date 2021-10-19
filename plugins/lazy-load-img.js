import Vue from "vue";

// 是否在可视区域
const isVisualArea = el =>
  el.getBoundingClientRect().top < (window.innerHeight || document.documentElement.clientHeight);

function load(el) {
  if (el.tagName.toLocaleLowerCase() === "img") {
    if (isVisualArea(el)) {
      // 加载过，无需加载
      if (el.getAttribute("is-load")) return;
      // 开始处理，如有 src
      if (el.dataset.src) {
        el.setAttribute("src", el.dataset.src);
        el.setAttribute("is-load", true); // 是否加载的标识
      }
    }
  } else {
    const imgs = el.getElementsByTagName("img");
    imgs.forEach(img => {
      if (img.getAttribute("is-load")) return;

      const originalWidth = new URLSearchParams(new URL(img.dataset.src).search).get("width"); // 图片原始width
      const originalHeight = new URLSearchParams(new URL(img.dataset.src).search).get("height"); // 图片原始width

      img.width = img.width || originalWidth;
      img.height = img.height || (originalHeight * img.width) / originalWidth;

      if (isVisualArea(img) && img.dataset.src) {
        img.setAttribute("src", img.dataset.src);
        img.setAttribute("is-load", true); // 是否加载的标识
      }
    });
  }
}

Vue.directive("lazy-img", {
  inserted: el => {
    setTimeout(() => {
      load(el);
      window.addEventListener("scroll", () => load(el));
    });
  }
});
