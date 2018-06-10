// pages/outbox/outbox.js
var app=getApp()
var Data = require('../outbox/outbox_list.js')  
Page({

  /**
   * 页面的初始数据
   */
  data: {
  avatarUrl:'',
  searchresult:[],
  casArray: ['编辑','删除'],
  },
  bindCasPickerChange: function (e) {
    this.setData({
      casIndex: e.detail.value
    })
    var item = this.data.searchresult[e.target.id]
    if (e.detail.value == 1 ) {
      var that=this
      app.deletebyid(item.id) 
      wx.request({
        url: 'https://www.yhmeng.top/outbox_list', //仅为示例，并非真实的接口地址
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
    else if (e.detail.value == 0){
      wx.navigateTo({
        url: '/pages/item_detail_outbox/item_detail_outbox?id='+item.id+'&head='+item.head+'&title='+item.title+'&create_time='+item.create_time+'&author='+item.author,
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.flag){
      if(options.flag==1){
      wx.showToast({
        title: '更新成功',
        icon: 'succes',
        duration: 1000,
        mask: true
      })
      }
      else if (options.flag == 2) {
        wx.showToast({
          title: '发表成功',
          icon: 'succes',
          duration: 1000,
          mask: true
        })
      }
    }
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
    this.setData({
      avatarUrl: app.globalData.userInfo.avatarUrl
    })
    var that = this
    wx.request({
      url: 'https://www.yhmeng.top/outbox_list', //仅为示例，并非真实的接口地址
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
      url: 'https://www.yhmeng.top/outbox_list', //仅为示例，并非真实的接口地址
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
  onShareAppMessage: function () {
    return {
      title: 'ShareIt 分享你的idear',
      path: 'pages/newshare/newshare',
      imageUrl: '../../image/icon.png'
    }
  }
})