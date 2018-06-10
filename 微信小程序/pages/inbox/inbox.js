// pages/inbox/inbox.js
var app=getApp()
var Data = require('../inbox/inbox_list.js')  
Page({

  /**
   * 页面的初始数据
   */
  data: { 
     
 searchresult:[],
 casArray: ['删除'],
  },
  bindCasPickerChange: function (e) {
    this.setData({
      casIndex: e.detail.value
    })
    var item = this.data.searchresult[e.target.id]
    if (e.detail.value == 0 )
    {
      var that=this
      wx.request({
        url: 'https://www.yhmeng.top/share_article_delete', //仅为示例，并非真实的接口地址
        data: {
          user_id: app.globalData.useropenid,
          article_id:item.id
        },
        method: 'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
        }
      })
      wx.request({
        url: 'https://www.yhmeng.top/inbox_list', //仅为示例，并非真实的接口地址
        data: {
          user_id: app.globalData.useropenid
        },
        method: 'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          that.setData({
            searchresult: res.data.result
          });
        }
      })
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
    var that = this
    wx.request({
      url: 'https://www.yhmeng.top/inbox_list', //仅为示例，并非真实的接口地址
      data: {
        user_id: app.globalData.useropenid
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.result)
        that.setData({
          searchresult: res.data.result
        });
      }
    })
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
    wx.stopPullDownRefresh()
    var that = this
    wx.request({
      url: 'https://www.yhmeng.top/inbox_list', //仅为示例，并非真实的接口地址
      data: {
        user_id: app.globalData.useropenid
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        that.setData({
          searchresult: res.data.result
        });

      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    return{
      title:'ShareIt 分享你的idear',
      path:'pages/newshare/newshare',
      imageUrl:'../../image/icon.png'
    }
  }
})