// pages/item_detail_delete/item_detail_delete.js
var app = getApp()
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
    create_time: ''
  },
  deletethis:function(e){
    var that = this
    wx.request({
      url: 'https://www.yhmeng.top/delete_article', //仅为示例，并非真实的接口地址
      data: {
        article_id: that.data.id
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
      }
    })
    wx.reLaunch({
      url: '/pages/outbox/outbox'
    })
  },
  click_edit: function () {
    wx.navigateTo({
      url: '../edit/edit?title='+this.data.title+'&content='+this.data.content+'&id='+this.data.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
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
        console.log(res.data.result)
        that.setData({
          content: res.data.result
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
    return{
      
      path: '/pages/item_detail/item_detail?id=' + this.data.id + '&head=' + this.data.head + '&title=' + this.data.title + '&create_time=' + this.data.create_time + '&author=' + this.data.author
    }
  }
})