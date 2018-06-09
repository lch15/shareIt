// pages/item_detail/item_detail.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    id: '',
    author: '',
    content: '',
    avatarUrl: '',
    create_time: '',
    mes:'ddd'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  home:function(e){
    wx.reLaunch({
      url: '/pages/newshare/newshare',
    })
  },
  onLoad: function (options) {
    var that = this
    that.setData({
      mes: app.globalData.useropenid,
      title: options.title,
      id: options.id,
      author: options.author,
      avatarUrl: options.head,
      create_time: options.create_time
    });
    wx.request({
      url: 'https://www.yhmeng.top/get_article', //仅为示例，并非真实的接口地址
      data: {
        article_id: options.id
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          content: res.data.result,
        });
      }
    })
    wx.request({
      url: 'https://www.yhmeng.top/share_article', //仅为示例，并非真实的接口地址
      data: {
        article_id: options.id,
        user_id: app.globalData.useropenid
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          mes:res.data.msg
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
    return {
      path: '/pages/item_detail/item_detail?id=' + this.data.id + '&head=' + this.data.head + '&title=' + this.data.title + '&create_time=' + this.data.create_time + '&author=' + this.data.author
    }
  }
})