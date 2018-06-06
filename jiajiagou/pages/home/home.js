var app = getApp()
Page({
  data: {
    navbar: ['精品包', '保健品', '服饰', '其它'],
    currentTab: 0,
  },

  // 导航切换监听
  navbarTap: function (e) {
    console.log(e);
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

}) 