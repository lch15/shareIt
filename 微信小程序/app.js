//app.js
App({
  data:{
    
  },
  deletebyid:function(id){
    wx.request({
      url: 'https://www.yhmeng.top/delete_article', //仅为示例，并非真实的接口地址
      data: {
        article_id: id
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        return true
      }
    })
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        this.globalData.code=res.code
      }
    })
    // 获取用户信息
    wx.getSetting({

      success: res => {
        if (res.authSetting['scope.userInfo']) {
          var that=this
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res.userInfo)
              wx.request({
                url: 'https://www.yhmeng.top/insert_user', //仅为示例，并非真实的接口地址
                data: {
                  nickname: this.globalData.userInfo.nickName,
                  js_code: this.globalData.code,
                  avatarUrl: this.globalData.userInfo.avatarUrl,
                },
                method: 'POST',
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success: function (res) {
                  that.globalData.useropenid = res.data.result.open_id
                  
                }
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
                wx.switchTab({
                  url: '/pages/newshare/newshare'
                })
              }
             
              console.log(111111)
            }
          })
        }
      }
    })

   
  },
  globalData: {
    userInfo: null,
    useropenid:null,
    code: ''
  }
})