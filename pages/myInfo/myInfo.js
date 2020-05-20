// pages/myInfo/myInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {
      avatarUrl: "/static/myinfo/user_icon.png",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        that.data.userInfo = res.userInfo;
        that.setData({
          //userinfo: that.data.userInfo //方式一 获取用户信息
        })
      }
    })
  },
  bindGetUserInfo: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        that.data.userInfo = res.userInfo;
        that.setData({
           userinfo: that.data.userInfo //方式二 获取用户信息
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})