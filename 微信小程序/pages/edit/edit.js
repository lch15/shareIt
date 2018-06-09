// pages/edit/edit.js
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
  submit:function(e){

  },
  onLoad: function (options) {
  this.setData({
    title:options.title,
    content:options.content,
    id:options.id
  })
  console.log(options.title)
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