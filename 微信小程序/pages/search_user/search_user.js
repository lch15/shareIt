// pages/searchresultshow/searchresultshow.js
var Data = require('../search_user/search_user_result.js')  
var utils = require('../../utils/util.js')  
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showData: Data.myData().list,  
    casArray: ['userid', 'articleid'],
    casIndex:0,
    keywords:'',
    showData:[]
         },
  searchInputEvent: function (e) {
    this.setData({
      keywords: e.detail.value
    })
  },
  searchClickEvent: function () {
    if (this.data.keywords.replace(/\s+/g, '').length == 0) {
      wx.showModal({
        title: '提示',
        content: '输入不能为空',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }

        }
      })
    } else {
      var that = this
      if (this.data.casIndex == 1) {
        wx.request({
          url: 'https://www.yhmeng.top/search_article', //仅为示例，并非真实的接口地址
          data: {
            article_id: this.data.keywords
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
      }
      else {
        wx.request({
          url: 'https://www.yhmeng.top/search_user', //仅为示例，并非真实的接口地址
          data: {
            author_id: this.data.keywords
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
      }
    }
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