// pages/my/my.js
var app = getApp();
const AUTH = require('../../utils/auth')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: ''
    })
  },
  onLoad: function() {

  },

  onShow: function() {
    var userInfo = wx.getStorageSync('tokenInfo');
    if (userInfo != undefined && userInfo != null && userInfo != '') {
      this.setData({
        userRole: userInfo.loginName
      })
    } else {
      this.setData({
        userRole: "请登录"
      })
    }
  },

  login:function() {
    var userRole = this.data.userRole;
    if(userRole == "请登录") {
      wx.navigateTo({
        url: '/pages/my/pages/login/login',
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '您确定要退出账号吗？',
        success(res) {
          if (res.confirm) {
            AUTH.exit();
          } else if (res.cancel) {
            
          }
        }
      })
    }
  },

  exit: function() {
    var _this = this;
    wx.showModal({
      title: '提示',
      content: '您确定要退出账号吗？',
      success(res) {
        if (res.confirm) {
          AUTH.exit();
          _this.onShow();
        } else if (res.cancel) {
        }
      }
    })
  }
})