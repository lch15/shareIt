// pages/searchresultshow/searchresultshow.js
var Data = require('../search_user/search_user_result.js')  

Page({
  /**
   * 页面的初始数据
   */
  data: {
    showData: Data.myData().list,  
    casArray: ['userid', 'articleid'],
    casIndex:0,
    showData:[]
         },
  
  bindCasPickerChange: function (e) {   
    this.setData({
      casIndex: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    var that=this
    wx.request({
      url: 'https://www.yhmeng.top/search_user', //仅为示例，并非真实的接口地址
      data: {
        author_id: options.keywords
      },
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          showData: res.data.result
        });

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