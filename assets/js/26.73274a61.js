(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{592:function(t,s,a){"use strict";a.r(s);var n=a(9),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),a("p",[t._v("小程序学习day5，want的使用，分包的概念，自定义tabbar等")])]),t._v(" "),a("p",[a("strong",[t._v("小程序对npm的支持与限制")])]),t._v(" "),a("p",[t._v("目前，小程序中已经支持使用npm安装第三方包，从而来提高小程序的开发效率。但是，在小程序中使用npm包有如下3个限制:")]),t._v(" "),a("p",[t._v("①不支持依赖于Node.js内置库的包")]),t._v(" "),a("p",[t._v("②不支持依赖于浏览器内置对象的包")]),t._v(" "),a("p",[t._v("③不支持依赖于C++插件的包")]),t._v(" "),a("p",[a("strong",[t._v("总结:虽然npm上的包有千千万，但是能供小程序使用的包却“为数不多”。")])]),t._v(" "),a("p",[a("strong",[t._v("1.定制全局主题样式")])]),t._v(" "),a("p",[t._v("在app.wxss中，写入CSS变量，即可对全局生效:")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("page")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--button-border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("--button-default-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ac1de4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"api-promise化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-promise化"}},[t._v("#")]),t._v(" API promise化")]),t._v(" "),a("p",[a("strong",[t._v("1.基于回调函数的异步API的缺点")])]),t._v(" "),a("p",[t._v("默认情况下，小程序官方提供的异步API都是基于回调函数实现的，例如，网络请求的API需要按照如下的方式调用:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fail")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("complete")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("缺点:容易造成回调地狱的问题，代码的可读性、维护性差!")])]),t._v(" "),a("p",[a("strong",[t._v("2.什么是API Promise化")])]),t._v(" "),a("p",[t._v("API Promise化，指的是通过额外的配置，将官方提供的、基于回调函数的异步API,升级改造为基于Promise的异步API,从而提高代码的可读性、维护性,避免回调地狱的问题。")]),t._v(" "),a("p",[a("strong",[t._v("3.实现API Promise化")])]),t._v(" "),a("p",[t._v("在小程序中，实现API Promise化主要依赖于miniprogram-api-promise这个第三方的npm包。它的安装和使用步骤如下:")]),t._v(" "),a("p",[a("code",[t._v("npm install miniprogram-api-promise")])]),t._v(" "),a("p",[a("strong",[t._v("注意：每次安装完包后都要重新构建一下")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//app.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" promisifyAll "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'miniprogram-api -promise'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wxp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("promisifyAl1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wx，wxp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("现在用不着了，官方api已经支持promise了")])]),t._v(" "),a("h3",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("ol",[a("li",[t._v("部分接口如 "),a("code",[t._v("downloadFile")]),t._v(", "),a("code",[t._v("request")]),t._v(", "),a("code",[t._v("uploadFile")]),t._v(", "),a("code",[t._v("connectSocket")]),t._v(", "),a("code",[t._v("createCamera")]),t._v("（小游戏）本身就有返回值， 它们的 promisify 需要开发者自行封装。")]),t._v(" "),a("li",[t._v("当没有回调参数时，异步接口返回 promise。此时若函数调用失败进入 fail 逻辑， 会报错提示 "),a("code",[t._v("Uncaught (in promise)")]),t._v("，开发者可通过 catch 来进行捕获。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("wx.onUnhandledRejection"),a("OutboundLink")],1),t._v(" 可以监听未处理的 Promise 拒绝事件。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// callback 形式调用")]),t._v("\nwx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chooseImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'res:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// promise 形式调用")]),t._v("\nwx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chooseImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'res: '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"全局数据共享-状态管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局数据共享-状态管理"}},[t._v("#")]),t._v(" 全局数据共享（状态管理）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/06/13/UNivkRsePg5auQY.png",alt:"image-20220613094421280"}})]),t._v(" "),a("p",[a("strong",[t._v("安装")])]),t._v(" "),a("p",[a("code",[t._v("npm install mobx-miniprogram mobx-miniprogram-bindings")])]),t._v(" "),a("p",[a("strong",[t._v("使用mobx")])]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 目录/store/store.ts")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("observable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mobx-miniprogram'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//里面相当于page")]),t._v("\n    numA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    numB"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//计算属性")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numB\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//action函数")]),t._v("\n    updateNum1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@ts-ignore")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("step\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    updateNum2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("step"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//@ts-ignore")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("numB"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v("step\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("strong",[t._v("3.将Store中的成员绑定到页面中")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/06/13/Hw5cNBMt9vjkyIr.png",alt:"image-20220613103612855"}})]),t._v(" "),a("p",[a("strong",[t._v("4.将Store中的成员绑定到组件中")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/06/13/s5rhlAj3pK2SOnT.png",alt:"image-20220613104657529"}})]),t._v(" "),a("h2",{attrs:{id:"分包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分包"}},[t._v("#")]),t._v(" 分包")]),t._v(" "),a("p",[a("strong",[t._v("1.什么是分包")])]),t._v(" "),a("p",[t._v("分包指的是把一个完整的小程序项目，按照需求划分为不同的子包，在构建时打包成不同的分包，用户在使用时按需进行加载。")]),t._v(" "),a("p",[a("strong",[t._v("2.分包的好处")])]),t._v(" "),a("p",[t._v("对小程序进行分包的好处主要有以下两点:")]),t._v(" "),a("ul",[a("li",[t._v("可以优化小程序首次启动的下载时间.")]),t._v(" "),a("li",[t._v("在多团队共同开发时可以更好的解耦协作")])]),t._v(" "),a("p",[a("strong",[t._v("3.分包前项目的构成")])]),t._v(" "),a("p",[t._v("分包前,小程序项目中所有的页面和资源都被打包到了-起导致整个项目体积过大,影响小程序首次启动的下载时间。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/06/13/XWvqHCn1w4ZbPgj.png",alt:"image-20220613105205203"}})]),t._v(" "),a("p",[a("strong",[t._v("4.分包后项目的构成")])]),t._v(" "),a("p",[t._v("分包后，小程序项目由"),a("strong",[t._v("1个主包+多个分包")]),t._v("组成:")]),t._v(" "),a("ul",[a("li",[t._v("主包:一般只包含项目的启动页面或TabBar页面、以及所有分包都需要用到的一些公共资源")]),t._v(" "),a("li",[t._v("分包:只包含和当前分包有关的页面和私有资源")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/06/13/bgYJGeSuhTXBNUx.png",alt:"image-20220613105359687"}})]),t._v(" "),a("p",[a("strong",[t._v("5.分包的加载规则")])]),t._v(" "),a("p",[t._v("①在小程序启动时，默认会下载主包并启动主包内页面")]),t._v(" "),a("ul",[a("li",[t._v("tabBar 页面需要放到主包中")])]),t._v(" "),a("p",[t._v("②当用户进入分包内某个页面时，客户端会把对应分包下载下来，下载完成后再进行展示")]),t._v(" "),a("ul",[a("li",[t._v("非tabBar页面可以按照功能的不同,划分为不同的分包之后,进行按需下载")])]),t._v(" "),a("p",[a("strong",[t._v("6.分包的体积限制")])]),t._v(" "),a("p",[t._v("目前，小程序分包的大小有以下两个限制: .")]),t._v(" "),a("ul",[a("li",[t._v("整个小程序所有 分包大小不超过16M (主包+所有分包)")]),t._v(" "),a("li",[t._v("单个分包/主包大小不能超过 2M")])]),t._v(" "),a("p",[a("strong",[t._v("7.配置方法")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/06/13/5yNT3XRDgPBwVch.png",alt:"image-20220613105758906"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/06/13/nBdV1hFKDNmpPZQ.png",alt:"image-20220613105903405"}})]),t._v(" "),a("p",[a("strong",[t._v("打包原则")])]),t._v(" "),a("p",[t._v("①小程序会按subpackages的配置进行分包，subpackages 之外的目录将被打包到主包中")]),t._v(" "),a("p",[t._v("②主包也可以有自己的pages ( 即最外层的pages字段)")]),t._v(" "),a("p",[t._v("③tabBar 页面必须在主包内")]),t._v(" "),a("p",[t._v("④分包之间不能互相嵌套")]),t._v(" "),a("p",[a("strong",[t._v("引用原则")])]),t._v(" "),a("p",[t._v("①主包无法引用分包内的私有资源")]),t._v(" "),a("p",[t._v("②分包之间不能相互引用私有资源")]),t._v(" "),a("p",[t._v("③分包可以引用主包内的公共资源")]),t._v(" "),a("h2",{attrs:{id:"独立分包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#独立分包"}},[t._v("#")]),t._v(" 独立分包")]),t._v(" "),a("p",[a("strong",[t._v("1.什么是独立分包")])]),t._v(" "),a("p",[t._v("独立分包本质.上也是分包，只不过它比较特殊，可以独立于主包和其他分包而单独运行。")]),t._v(" "),a("p",[a("strong",[t._v("2.独立分包和普通分包的区别")])]),t._v(" "),a("p",[t._v("最主要的区别:是否依赖于主包才能运行")]),t._v(" "),a("ul",[a("li",[t._v("普通分包必须依赖于主包才 能运行")]),t._v(" "),a("li",[t._v("独立分包可以在不下载主包的情况下，独立运行")])]),t._v(" "),a("p",[a("strong",[t._v("3.独立分包的应用场景")])]),t._v(" "),a("p",[t._v("开发者可以按需，将某些具有一定功能独立性的页面配置到独立分包中。原因如下:")]),t._v(" "),a("ul",[a("li",[t._v("当小程序从普通的分包页面启动时，需要首先下载主包")]),t._v(" "),a("li",[t._v("而独立分包不依赖主包即可运行，可以很大程度上提升分包页面的启动速度")])]),t._v(" "),a("p",[t._v("注意:一个小程序中可以有多个独立分包。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"subPackages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"root"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pkga"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/car/car"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pages/apple/apple"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//只要加了这个选项就能从普通分包变成独立分包")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"independent"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("5.引用原则")])]),t._v(" "),a("p",[t._v("独立分包和普通分包以及主包之间，是相互隔绝的，不能相互引用彼此的资源!例如:")]),t._v(" "),a("p",[t._v("①主包无法引用独立分包内的私有资源")]),t._v(" "),a("p",[t._v("②独立分包之间，不能相互引用私有资源")]),t._v(" "),a("p",[t._v("③独立分包和普通分包之间，不能相互引用私有资源")]),t._v(" "),a("p",[a("strong",[t._v("④特别注意:独立分包中不能引用主包内的公共资源")])]),t._v(" "),a("h2",{attrs:{id:"分包预下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分包预下载"}},[t._v("#")]),t._v(" 分包预下载")]),t._v(" "),a("p",[a("strong",[t._v("1.什么是分包预下载")])]),t._v(" "),a("p",[t._v("分包预下载指的是:在进入小程序的某个页面时，由框架自动预下载可能需要的分包，从而提升进入后续分包页面时的启动速度。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"preloadRule"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//分包预下载的规则")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pages/contact/contact"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//触发分包预下载的页面路径")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// network 表示在指定的网络模式下进行顶下载，")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可选值为: all (不限网络)和wifi (仅wifi 模式下进行预下载)  ")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认值为: wifi")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"al1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// packages 表示进入页面后预下载哪些分包")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可以通过root或name指定预下载哪些分包")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"packages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pkgA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("2.分包预下载的限制")])]),t._v(" "),a("p",[t._v("同一个分包中的页面享有共同的预下载大小限额2M,例如: .")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/06/13/DOHTahEVo4Imikx.png",alt:"image-20220613163429383"}})]),t._v(" "),a("h2",{attrs:{id:"自定义tabbar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义tabbar"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/ability/custom-tabbar.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("自定义tabbar"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/06/13/fDLZ4o3CEkKm9d6.png",alt:"image-20220613172727541"}})])])}),[],!1,null,null,null);s.default=p.exports}}]);