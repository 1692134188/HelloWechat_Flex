// pages/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    publich:{
      imageList: [],
      location:"",
      attUserList:"",
      canUserList:""
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  uploadImage: function () {
    var that = this;
   

    wx.chooseImage({
      count:9,
      sizeType:['compressed','original'],
      sourceType:["album","camera"],
      
      success: (res) => {
        var item = this.data.publich
        item.imageList = that.data.publich.imageList.concat(res.tempFilePaths);
        // 依旧是根据index获取数组中的对象
        var key = "publich"
        this.setData({
          // 这里使用键值对方式赋值
          key: item
        }, function () { })
        this.setData({ publich: this.data.publich })
      },
    })
  },
  chooseLocation: function () {
    var that = this;
    wx.chooseLocation({
      success: (res) => {
        var item = this.data.publich
        item.location = res.address ;
        // 依旧是根据index获取数组中的对象
        var key = "publich"
        this.setData({
          // 这里使用键值对方式赋值
          key: item
        }, function () { })
        this.setData({ publich: this.data.publich })
      },
    })
  }
})