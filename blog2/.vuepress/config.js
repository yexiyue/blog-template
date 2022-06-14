module.exports = {
  "title": "红尘散仙",
  "description": "心软不是病，回头才致命",
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `] //百度统计
  ],
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  // "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "link": "/about/",
        "icon": "reco-account"
      }
    ],
    "type": "blog",
    "sidebar": false,
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "作者博客",
        "desc": "zealsay说你想说",
        "logo": "https://pan.zealsay.com/avatar/20200606105310570000000.jpg",
        "link": "https://blog.zealsay.com"
      },
      {
        "title": "另一个博客",
        "desc": "vuepress_blog",
        "logo": "https://pan.zealsay.com/blog/logo.png",
        "link": "https://www.zealsay.com"
      },
    ],

    "valineConfig": {
      "appId": "xxx",// your appId
      "appKey": "xxx", // your appKey
      "avatar": "", //
      "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
      "requiredFields": ['nick', 'mail'], //设置必填项
    },
    "logo": "/logo.png",
    // "huawei": true, //首页出现华为文案
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "红尘散仙",
    "authorAvatar": "/avatar-top.png",
    "record": "你的备案号 ", //icp备案
    "startYear": "2022",
    "info": "全网人民大家好，我是练习时长两年半的前端练习生，红尘散仙，喜欢唱 跳 rap 篮球。",
    "socials": {
      "github": "https://github.com/GodLikeZeal", //github
      //"gitlub": false, //gitlub
      //"gitee": "https://gitee.com/GodLikeZeal", //gitee
      //"jianshu": "https://www.jianshu.com/u/e2d051b6d2e9", //简书
      //"zhihu": "https://www.zhihu.com/people/qian-ge-diao-63", //知乎
      //"toutiao": false, //知乎
      "juejin": "https://juejin.cn/user/334694205359901", //掘金
      //"segmentfault": "https://segmentfault.com/u/zeal_5eecb699bdb08", //思否
      //"csdn": false, //CSDN
      "wechat": "15881815560", //微信
      "qq": "3066921758" //QQ
    },

    //首页文案，可以自己更换每天会自动显示一段
    "mottos": [
    {
      "zh": "天在下雨地下滑，自己跌倒自己爬。",
      "en": "It was raining and I slipped. I fell and climbed."
    },
    {
      "zh": "花有百般红，人与狗不同。",
      "en": "Flowers are all kinds of red. People are different from dogs."
    },
    {
      "zh": "真正的梦就是现实的彼岸。",
      "en": "Real dream is the other shore of reality."
    },
    {
      "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
      "en": "Don't worry about the vague future, just strive for the clear present."
    },
    {
      "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
      "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
    }, {
      "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
      "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
    },
    {
      "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
      "en": "Life without regret, we can only do our best to not to regret."
    }
    ],
    //配置背景图片，7天每天一张自动更换
    //放public下名字跟下面一样
    "covers": [
      '/7.jpg',
      '/1.jpg',
      '/2.jpg',
      '/3.jpg',
      '/4.jpg',
      '/5.jpg',
      '/6.jpg'
    ],
    "codeTheme": "tomorrow"
  },
  "markdown": {
    "lineNumbers": false
  },
  //配置彩带
  plugins:[
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }]
  ]
  
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
}