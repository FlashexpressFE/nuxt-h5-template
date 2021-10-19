export default {
  name: "ชื่อ",
  tel: "เบอร์โทรศัพท์",
  save: "บันทึก",
  confirm: "ยืนยัน",
  cancel: "ยกเลิก",
  delete: "ลบ",
  complete: "เรียบร้อย",
  loading: "กำลังโหลด",
  // telEmpty: "请填写电话",
  // nameEmpty: "请填写姓名",
  // nameInvalid: "请输入正确的姓名",
  // confirmDelete: "确定要删除吗",
  // telInvalid: "请输入正确的手机号",
  vanCalendar: {
    end: "结束",
    start: "开始",
    title: "เลือกวันที่",
    confirm: "ยืนยัน",
    // startEnd: "开始/结束",
    weekdays: ["S", "M", "T", "W", "T", "F", "S"],
    monthTitle: (year, month) => `เดือน ${month} ปี ${year}`,
    rangePrompt: maxRange => `สามารถเลือกจำนวนวันได้ไม่เกิน${maxRange}วัน`
  },
  // vanContactCard: {
  //   addText: "添加联系人"
  // },
  // vanContactList: {
  //   addText: "新建联系人"
  // },
  vanPagination: {
    prev: "ก่อนหน้า",
    next: "ถัดไป"
  },
  vanPullRefresh: {
    pulling: "ลากแล้วปล่อยเพื่อรีเฟรช",
    loosing: "ลากแล้วปล่อยเพื่อรีเฟรช"
  },
  vanSubmitBar: {
    // label: "合计："
  }
  // vanCoupon: {
  //   unlimited: "无使用门槛",
  //   discount: discount => `${discount}折`,
  //   condition: condition => `满${condition}元可用`
  // },
  // vanCouponCell: {
  //   title: "优惠券",
  //   tips: "暂无可用",
  //   count: count => `${count}张可用`
  // },
  // vanCouponList: {
  //   empty: "暂无优惠券",
  //   exchange: "兑换",
  //   close: "不使用优惠券",
  //   enable: "可用",
  //   disabled: "不可用",
  //   placeholder: "请输入优惠码"
  // },
  // vanAddressEdit: {
  //   area: "地区",
  //   postal: "邮政编码",
  //   areaEmpty: "请选择地区",
  //   addressEmpty: "请填写详细地址",
  //   postalEmpty: "邮政编码格式不正确",
  //   defaultAddress: "设为默认收货地址",
  //   telPlaceholder: "收货人手机号",
  //   namePlaceholder: "收货人姓名",
  //   areaPlaceholder: "选择省 / 市 / 区"
  // },
  // vanAddressEditDetail: {
  //   label: "详细地址",
  //   placeholder: "街道门牌、楼层房间号等信息"
  // },
  // vanAddressList: {
  //   add: "新增地址"
  // }
};
