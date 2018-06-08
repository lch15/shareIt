//app.js
App({
  data:{
    code:''
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
        this.data.code=res.code
        console.log(res.code)
      }
    })
    // 获取用户信息
    wx.getSetting({

      success: res => {
        if (res.authSetting['scope.userInfo']) {
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
                  js_code: this.data.code,
                  avatarUrl: this.globalData.userInfo.avatarUrl,
                  iv: this.globalData.userInfo.iv,
                  encryptedData: this.globalData.userInfo.encryptedData
                },
                method: 'POST',
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success: function (res) {
                  this.globalData.useropenid = res.data.open_id
                  console.log(res)
                }
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
                
              }
            },
            fail: function (res){
            console.log(1)
            console.log(res)
          }
          })
        }
      },
      fail: function(res) {
                      console.log(1)
        console.log(res)
      },
      complete:function(res){
        console.log(this.Data.userInfo)
      }
    })

   
  },
  globalData: {
    userInfo: [],
    useropenid:'lch1237666'
  }
})