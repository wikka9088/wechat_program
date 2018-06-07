var app = getApp();
Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "护肤",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '洁面皂',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117972563.jpg"
          },
          {
            child_id: 2,
            name: '卸妆',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161207/148110444480.jpg"
          },
          {
            child_id: 3,
            name: '洁面乳',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117973270.jpg"
          },
          {
            child_id: 4,
            name: '面部祛角质',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161208/148117981591.jpg"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "香水/香氛",
        ishaveChild: true,
        children:
        [
          {
            child_id: 1,
            name: '淡香水EDT',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/14815978910.jpg"
          },
          {
            child_id: 2,
            name: '浓香水EDP',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/148159789883.jpg"
          },
          {
            child_id: 3,
            name: '香体走珠',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/14815979307.jpg"
          },
          {
            child_id: 4,
            name: '古龙香水男士的最爱',
            image: "http://mz.djmall.xmisp.cn/files/logo/20161213/148159765589.jpg"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "个人护理",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})   