export const langArr = [
  { label: "中文", value: "zh" },
  { label: "English", value: "en" },
  { label: "ภาษาไทย", value: "th" }
];

//首页功能文案
const getimage = name => require(`~/assets/image/img/${name}.png`);
export const functionInfoList = [
  {
    image: getimage("icon_481"),
    title: "8",
    info: "7",
    alt: "s_4"
  },
  {
    image: getimage("icon_482"),
    title: "9",
    info: "10",
    alt: "s_4"
  },
  {
    image: getimage("icon_483"),
    title: "11",
    info: "12",
    alt: "s_4"
  },
  {
    image: getimage("icon_484"),
    title: "13",
    info: "14",
    alt: "s_4"
  }
];
//首页功能文案
export const effectInfoList = [
  {
    image: getimage("wage"),
    title: "22",
    info: "23",
    alt: "s_4",
    path: "/smart-payroll-salary-slip-management-online"
  },
  {
    image: getimage("Statistics"),
    title: "18",
    info: "19",
    path: "/time-attendance"
  },
  {
    image: getimage("approval"),
    title: "20",
    info: "21",
    alt: "s_4",
    path: "/approval-management"
  },
  {
    image: getimage("msg"),
    title: "msg",
    info: "news.2",
    alt: "s_4",
    path: "/news-management-for-hr-software"
  }
];
//首页具体功能体现
const getimages = name => require(`~/assets/image/img_${name}.png`);
export const salaryInfoList = [
  {
    title: "25",
    info: "26",
    img: getimages("moneny"),
    alt: "s_4"
  },
  {
    title: "27",
    info: "28"
  },
  {
    title: "29",
    info: "30"
  },
  {
    title: "31",
    info: "32"
  },
  {
    title: "33",
    info: "34"
  }
];

//底部导航信息
export const navlist = [
  {
    nav: "/",
    item: "home"
  },
  {
    nav: "/news-management-for-hr-software",
    item: "Features "
  },
  {
    nav: "/blog",
    item: "blog"
  },
  {
    nav: "/contact-us",
    item: "contactus"
  },
  {
    nav: "/down",
    item: "48"
  }
];

// 博客详情
const recommendImg = name => require(`~/assets/image/img_${name}.png`);
export const recommendInfolist = [
  {
    info: "22",
    path: "/smart-payroll-salary-slip-management-online",
    image: recommendImg("recommend2")
  },
  {
    info: "18",
    path: "/time-attendance",
    image: recommendImg("recommend3")
  },
  {
    info: "20",
    path: "/approval-management",
    image: recommendImg("recommend4")
  },
  {
    info: "msg",
    path: "/news-management-for-hr-software",
    image: recommendImg("recommend1")
  }
];

//特色功能以及子导航信息
const imginfo = name => require(`~/assets/image/word/img_${name}.png`);
export const infolist = [
  {
    info: "22", // 薪酬管理
    path: "/smart-payroll-salary-slip-management-online",
    childer: [
      {
        title: "payroll.3", // 薪资智能计算
        word: "payroll.4",
        image: imginfo("smart-1"),
        alt: "payroll_alt"
      },
      {
        title: "payroll.5",
        word: "payroll.6",
        image: imginfo("smart-2"),
        alt: "payroll_alt"
      },
      {
        title: "payroll.7",
        word: "payroll.8",
        image: imginfo("smart-3"),
        alt: "payroll_alt"
      },
      {
        title: "payroll.9",
        word: "payroll.10",
        image: imginfo("smart-4"),
        alt: "payroll_alt"
      }
    ]
  },
  {
    info: "18", // 考勤管理
    path: "/time-attendance",
    childer: [
      {
        title: "attendance.3",
        word: "attendance.4",
        image: imginfo("attendance-1"),
        alt: "k_4"
      },
      {
        title: "attendance.5",
        word: "attendance.6",
        image: imginfo("attendance-2"),
        alt: "k_4"
      },
      {
        title: "attendance.7",
        word: "attendance.8",
        image: imginfo("attendance-3"),
        alt: "k_4"
      },
      {
        title: "attendance.9",
        word: "attendance.10",
        image: imginfo("attendance-4"),
        alt: "k_4"
      }
    ]
  },
  {
    info: "20", // 审批管理
    path: "/approval-management",
    childer: [
      {
        title: "approval.3",
        word: "approval.4",
        image: imginfo("approval-1"),
        alt: "sp_4"
      },
      {
        title: "approval.5",
        word: "approval.6",
        image: imginfo("approval-2"),
        alt: "sp_4"
      },
      {
        title: "approval.7",
        word: "approval.8",
        image: imginfo("approval-3"),
        alt: "sp_4"
      }
    ]
  },
  {
    info: "msg", // 公告管理
    path: "/news-management-for-hr-software",
    childer: [
      {
        title: "news.3",
        word: "news.4",
        image: imginfo("news-1"),
        alt: "z_4"
      },
      {
        title: "news.5",
        word: "news.6",
        image: imginfo("news-2"),
        alt: "z_4"
      },
      {
        title: "news.7",
        word: "news.8",
        image: imginfo("news-3"),
        alt: "z_4"
      }
    ]
  }
];

//联系我们图标以及链接
const imgfinish2 = name => require(`~/assets/image/icon2/icon_24_${name}.png`);
export const nlist2 = [
  {
    image: imgfinish2("facebook"),
    url: "https://www.facebook.com/flashhrofficial  ",
    alt: "g_4"
  },
  {
    image: imgfinish2("ins"),
    url: "https://instagram.com/flashhrofficial?igshid=4ym99sidnfk",
    alt: "g_4"
  },
  {
    image: imgfinish2("line"),
    url: "/line",
    alt: "g_4"
  },
  {
    image: imgfinish2("Youtube"),
    url: "https://m.youtube.com/channel/UCIluAePbHKjYsLSBz-1g3EA ",
    alt: "g_4"
  },
  {
    tyre: true,
    image: imgfinish2("linkedin"),
    alt: "g_4",
    url: "https://www.linkedin.com/company/72040947 "
  },
  {
    tyre: true,
    image: imgfinish2("twitter"),
    alt: "g_4",
    url: "https://twitter.com/FlashHr"
  },
  {
    tyre: true,
    image: imgfinish2("tiktok"),
    alt: "g_4",
    url: "https://www.tiktok.com/@flashhrofficial "
  }
];
//轮播显示信息以及标题
export const imgswipe = name => require(`~/assets/image/${name}.png`);
export const swiperlist = [
  {
    title: "1",
    word: "2",
    image: imgswipe("img_banner4"),
    alt: "s_4"
  },
  {
    title: "47",
    word: "3",
    image: imgswipe("img_banner3"),
    alt: "s_4"
  },
  {
    title: "4",
    word: "5",
    image: imgswipe("img_banner6"),
    alt: "s_4"
  }
];
export const swiperlists = [
  {
    title: "22.h1", // 智能薪资软件
    word: "payroll.2",
    image: imgswipe("img_banner5"),
    alt: "payroll_alt"
  },
  {
    title: "18.h1", // 移动考勤管理
    word: "attendance.2",
    image: imgswipe("img_banner1"),
    alt: "k_4"
  },
  {
    title: "20.h1", // 审批管理软件
    word: "approval.2",
    image: imgswipe("img_banner2"),
    alt: "sp_4"
  },
  {
    title: "msg.h1", // 公告管理系统
    word: "news.2",
    image: imgswipe("img_banner8"),
    alt: "z_4"
  }
];

export const structuredData = (id, name) => [
  {
    json: {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@id": "https://www.flash-hr.com", name: "Flash HR" } },
        { "@type": "ListItem", position: 2, item: { "@id": id, name } }
      ]
    },
    type: "application/ld+json"
  }
];
export const structuredData1 = query => [
  {
    json: {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: { "@id": `https://www.flash-hr.com${query.lang ? "/" + query.lang : ""}`, name: "Flash HR" }
        },
        { "@type": "ListItem", position: 2, item: { "@id": query.id, name: query.name } }
      ]
    },
    type: "application/ld+json"
  }
];
export const structuredData2 = query => [
  {
    json: {
      "@context": "http://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: { "@id": `https://www.flash-hr.com${query.lang ? "/" + query.lang : ""}`, name: "Flash HR" }
        },
        { "@type": "ListItem", position: 2, item: { "@id": query.id, name: query.name } },
        { "@type": "ListItem", position: 3, item: { "@id": query.id1, name: query.name1 } }
      ]
    },
    type: "application/ld+json"
  }
];
