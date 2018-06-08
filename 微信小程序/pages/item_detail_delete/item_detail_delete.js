// pages/item_detail_delete/item_detail_delete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  title:'',
  id:'',
  author:'',
  content:'',
  avatarUrl:'',
  create_time:''
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
      url: 'https://www.yhmeng.top/get_article ', //仅为示例，并非真实的接口地址
      data: {
        article_id: options.id
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)       
        that.setData({        
          content:res.result,
        });
        console.log(that.data)
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
    wx.showShareMenu({
      withShareTicket: true
    })
  }
 
})