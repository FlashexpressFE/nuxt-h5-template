const axios = require("axios");
const fs = require("fs");

init("zh");
init("th");
init("en");

function init(lang) {
  axios
    .get(`xxx/lang/${lang}.json?time=${Date.now()}`)
    .then(res => {
      fs.writeFile(`./local/${lang}.json`, JSON.stringify(res.data), "utf8", error => {
        if (error) {
          console.log(error);
          return false;
        }
        console.log("success");
      });
    });
}
