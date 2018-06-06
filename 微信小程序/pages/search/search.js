var app=getApp()
Page({
  
  data: {
    focus: false,
    inputValue: '',
    keywords:null,
    validation:'',
    searchresult:[]
  },
  searchinput: function (e) {
    this.setData({
      keywords: e.detail.value
    })
  },  
  bindButtonTap: function() {
    this.setData({
      focus: true
    })
  },
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput: function(e) {
    var value = e.detail.value
    var pos = e.detail.cursor
    if(pos != -1){
      // 光标在中间
      var left = e.detail.value.slice(0,pos)
      // 计算光标的位置
      pos = left.replace(/11/g,'2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g,'2'),
      cursor: pos
    }
    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindHideKeyboard: function(e) {
    if (e.detail.value === "123") {
      //收起键盘
      wx.hideKeyboard()
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  searchid:function(){
    var that=this
    if (that.data.keywords==null||that.data.keywords.replace(/\s+/g, '').length==0)
      this.data.validation = '输入不能为空'
    else {
      this.data.validation = ''
<<<<<<< HEAD
      wx.request({
        url: 'https://www.yhmeng.top/search_article', //仅为示例，并非真实的接口地址
        data: {
          article_id: that.data.keywords
        },
        method: "POST",
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          that.setData({ 
            searchresult:res.data.result 
            });
        }
      })
=======
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址     
      data: {
        pageid: that.data.keywords
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        this.data.searchresult=res.data.searchresult
      }
    })
>>>>>>> 4e45650f5664cdf1ee7415a57fa21f3d9147a94c
    }
    
  },
  searchpersonid:function(){
    wx.navigateTo({
      url: '../search_user/search_user',
    })
    var that = this
    if (that.data.keywords == null ||that.data.keywords.replace(/\s+/g, '').length == 0)
      this.data.validation = '输入不能为空'
    else {
      that.data.validation = ''
      wx.request({
        url: 'https://www.yhmeng.top/search_user', //仅为示例，并非真实的接口地址
        data: {
          author_id: app.globalData.useropenid
        },
        method: "POST",
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
  }
})