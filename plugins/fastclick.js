import fastclick from "fastclick";
fastclick.attach(document.body);
fastclick.prototype.focus = targetElement => {
  let length;
  if (
    targetElement.setSelectionRange &&
    targetElement.type.indexOf("date") !== 0 &&
    targetElement.type !== "time" &&
    targetElement.type !== "month" &&
    targetElement.type !== "email"
  ) {
    length = targetElement.value.length;
    targetElement.focus(); // 加入这一句话
    targetElement.setSelectionRange(length, length);
  } else {
    targetElement.focus();
  }
};
