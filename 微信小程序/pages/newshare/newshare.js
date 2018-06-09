// pages/newshare/newshare.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
  loginfo:'d',
  title:'',
  content:''
  },
  addpic: function (e){
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
  },
  submit:function(e){
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://www.yhmeng.top/create_article', //仅为示例，并非真实的接口地址
      data: {
        author_id: app.globalData.useropenid,
        article_title: 55,
        article_content: 555

      },
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log('success')
        that.setData({
          title: app.globalData.useropenid,
          content: 12345
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
      title: 'ShareIt 分享你的idear',
      path: 'pages/newshare/newshare',
      imageUrl: '../../image/icon.png'
    }
  },
  accessory: function(){
    wx.getSavedFileList({
      success: function (res) {
        console.log(res.fileList)
        console.log('111')
      },
      fail:function(res){
        console.log('fail')
      }
    })
  },
})