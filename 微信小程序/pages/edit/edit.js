// pages/edit/edit.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  title:'',
  content:'',
  id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  gettitle:function(e){
    return e.detail.value
  },
  getcontent:function(e){
    return e.detail.value
  },
  submit:function(e){
    var that=this
    if (this.data.title.replace(/\s+/g, '').length == 0) {
      {

        wx.showModal({
          title: '提示',
          content: '标题不能为空',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else {
              console.log('用户点击取消')
            }

          }
        })
      }
    }
    else if (this.data.content.replace(/\s+/g, '').length == 0) {
      {

        wx.showModal({
          title: '提示',
          content: '内容不能为空',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else {
              console.log('用户点击取消')
            }

          }
        })
      }
    }else{
      wx.request({
        url: 'https://www.yhmeng.top/update_article', //仅为示例，并非真实的接口地址
        data: {
          article_title: that.data.title,
          article_id: that.data.id,
          article_content:that.data.content,
          author_id:app.globalData.useropenid
        },
        method: 'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          wx.showToast({
            title: '更新成功',
            icon: 'succes',
            duration: 1000,
            mask: true
          })
          wx.reLaunch({
            url: '/pages/outbox/outbox',
          })
        }
      })
    }
  },
  onLoad: function (options) {
  this.setData({
    title:options.title,
    content:options.content,
    id:options.id
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
      title: 'ShareIt 分享你的idear',
      path: 'pages/newshare/newshare',
      imageUrl: '../../image/icon.png'
    }
  }
})