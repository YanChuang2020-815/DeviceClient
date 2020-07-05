// miniprogram/pages/my/index.js
import {
  Common
} from '../common/base_model';
var common = new Common();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  //选中场景
  select: function (e) {
    console.log(e.currentTarget.dataset.flag)
    let scene = e.currentTarget.dataset.flag
    wx.navigateTo({
      url: '/pages/home/scene/index?sceneId=' + scene.id,
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
    var userInfo = wx.getStorageSync('tokenInfo');
    if (userInfo == undefined || userInfo == null || userInfo == '') {
      wx.navigateTo({
        url: '/pages/my/pages/login/login',
      })
    } else {
      common.getAllScene(res => {
        console.log(res.result);
        this.setData({
          items: res.result
        })
      })
    }
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

  }
})