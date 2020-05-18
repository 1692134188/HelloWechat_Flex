//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    guobaoList: [
      {
        pic_url: "/static/index/1.jpg",
        isLike: true,
        ownerName: "盖聂",
        ownerFansNums: 500,
        ownerFrom: '秦时明月'
      },
      {
        pic_url: "/static/index/2.jpg",
        isLike: true,
        ownerName: "乔峰",
        ownerFansNums: 600,
        ownerFrom: '天龙八部'
      },
      {
        pic_url: "/static/index/3.jpg",
        isLike: true,
        ownerName: "Harry Petter",
        ownerFansNums: 50,
        ownerFrom: '哈利 波特'
      },
      {
        pic_url: "/static/index/4.jpg",
        isLike: false,
        ownerName: "伏地魔",
        ownerFansNums: 600,
        ownerFrom: '哈利 波特'
      },
      {
        pic_url: "/static/index/5.jpg",
        isLike: true,
        ownerName: "琼恩 雪诺",
        ownerFansNums: 50,
        ownerFrom: '冰与火'
      },
      {
        pic_url: "/static/index/6.jpg",
        isLike: false,
        ownerName: "夜王",
        ownerFansNums: 600,
        ownerFrom: '权力的游戏'
      },
      {
        pic_url: "/static/index/7.jpg",
        isLike: true,
        ownerName: "苏轼",
        ownerFansNums: 50,
        ownerFrom: '宋'
      },
      {
        pic_url: "/static/index/8.jpg",
        isLike: true,
        ownerName: "李白",
        ownerFansNums: 600,
        ownerFrom: '唐'
      },
      {
        pic_url: "/static/index/9.jpg",
        isLike: true,
        ownerName: "秦始皇",
        ownerFansNums: 50,
        ownerFrom: '秦'
      },
      {
        pic_url: "/static/index/10.jpg",
        isLike: true,
        ownerName: "汉武帝",
        ownerFansNums: 60,
        ownerFrom: '汉'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse) {
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  onLoad: function (options) {

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  fansClick: function (e) {
    // 提前准备好对象
    let index = e.currentTarget.dataset['index'];
    var item = this.data.guobaoList[index]
    item.ownerFansNums++;
    // 依旧是根据index获取数组中的对象
    var key = "guobaoList[" + index + "]"
    this.setData({
      // 这里使用键值对方式赋值
      key: item
    }, function () { this.onReady() })
    this.setData({
      guobaoList: this.data.guobaoList
    })
  },
  likeClick: function (e) {
    // 提前准备好对象
    let index = e.currentTarget.dataset['index'];
    var item = this.data.guobaoList[index]
    item.isLike = !item.isLike;
    // 依旧是根据index获取数组中的对象
    var key = "guobaoList[" + index + "]"
    this.setData({
      // 这里使用键值对方式赋值
      key: item
    }, function () { })
    this.setData({ guobaoList: this.data.guobaoList })
  }
})
