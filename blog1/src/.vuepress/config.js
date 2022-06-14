const path = require("path");

module.exports = {
  title: '红尘散仙的博客',
  description: '个人博客',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],

  evergreen: true,

  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-165839722-1',
    }],
  ],

  theme: 'melodydl',
  themeConfig: {
    title: '红尘散仙 Blog',

    // aside personInfo
    personalInfo: {
      name: 'Aphorism',
      avatar: '/avatar-top.png',
      headerBackgroundImg: '/avatar-bg.jpg',
      description: 'Don not compare yourself too much. If you compare yourself, it will be more difficult<br/>做人不要太攀比，要比就比激光雨',
      email: 'yexiyue666@qq.com',
      location: 'henan, China',
      // organization: '',
    },
    // Nav link
    nav: [
      { text: 'HOME', link: '/' },
      { text: 'ABOUT', link: '/about/' },
      { text: 'TAGS', link: '/tags/' }
    ],
    header: {
      home: {
        title: '红尘散仙 Blog',
        subtitle: '别爱我没结果，除非花手摇过我。',
        headerImage: '/home-bg.jpg'
      },
      tags: {
        title: 'Tags',
        subtitle: '翻江龙遇下山虎，社会不由你做主',
        headerImage: '/tags-bg.jpg'
      },
      postHeaderImg: '/post-bg.jpg',
    },
    // footer sns
    sns: {
      juejin: {
        account: 'juejin',
        link: 'https://juejin.cn/user/334694205359901'
      },
      github: {
        account: 'github',
        link: 'https://github.com/yexiyue'
      }
    },

    // footer github button
    footer: {
      gitbtn: {
        repository: "https://ghbtns.com/github-btn.html?user=yexiyue&repo=blog&type=star&count=true",
        frameborder: 0,
        scrolling: 0,
        width: "80px",
        height: "20px"
      },
      custom: `Copyright &copy; 红尘散仙 Blog 2022 <br /> 
        Theme By <a href="https://www.vuepress.cn/" target="_blank">VuePress</a>
        | <a href="https://www.github.com/yexiyue/" target="_blank">yexiyue</a>`
    },
    pagination: {
      perPage: 5,
    },

    comments: false
  }
}