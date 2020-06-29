module.exports = {
  title: "大江东去",
  description: '随遇而安，随缘自在',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      { text: '联系', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/dlxqlig', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
    },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    friendLink:[],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'xqlig',
    // 作者头像
    authorAvatar: '/avatar.png',
    // 备案号
    record: '@dlxqlig@',
    // 项目开始时间
    startYear: '2020',
    vssueConfig: {
      platform: 'github',
      owner: 'dlxqlig',
      repo: 'blog-comment',
      clientId: '09189f2e2a9afff34e3f',
      clientSecret: 'c4336f702ca6ae2fdef4c5c5a3a96d4a0b647a11'
    }
  },
  markdown: {
    lineNumbers: true
  }
}  
