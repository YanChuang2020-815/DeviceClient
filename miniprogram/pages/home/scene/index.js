// miniprogram/pages/home/scene/index.js
import {
  Common
} from '../../common/base_model';
var common = new Common();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    devices:[

    ],
    minusStatus:'disable'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const sceneId = options.sceneId
    console.log(sceneId)
    common.getAllDeviceByUserAndScene(sceneId, (res) => {
      console.log(res)
      let devices = [];
      let device = null;
      res.result.map(item => {
        if (item.type != "camera") {
          device = item;
          device.num = 30;
          devices.push(device);
        }
      })
      this.setData({
        devices:devices
      })
    })
  },

  //事件处理函数
  /*点击减号*/
  bindMinus: function(e) {
    const index = e.currentTarget.dataset.index;
    const devices = this.data.devices;
    let device = devices[index];
    var num = device.num;
    if (num>1) {
      num--;
    }
    var minusStatus = num>1 ? 'normal':'disable';
    this.setData({
      devices:devices.map((item, idx) => idx === index ? {...item, num: num} : item),
      minusStatus:minusStatus
    },function() {
      this.sendDeviceData(index)
    })
  },
  /*点击加号*/
  bindPlus: function(e) {
    const index = e.currentTarget.dataset.index;
    const devices = this.data.devices;
    let device = devices[index];
    var num = device.num;
    num++;
    var minusStatus = num > 1 ? 'normal' : 'disable';
    this.setData({
      devices:devices.map((item, idx) => idx === index ? {...item, num: num} : item),
      minusStatus: minusStatus
    },function() {
      this.sendDeviceData(index)
    })
  },
  /*输入框事件*/
  bindManual: function(e) {
    const devices = this.data.devices;
    const index = e.currentTarget.dataset.index;
    var num = e.detail.value;
    var minusStatus = num > 1 ? 'normal' : 'disable';
    this.setData({
      devices:devices.map((item, idx) => idx === index ? {...item, num: num} : item),
      minusStatus: minusStatus
    },function() {
      this.sendDeviceData(index)
    })
  },

  //发送设备数据
  sendDeviceData: function (index) {
    const device = this.data.devices[index];
    let deviceData = {
      deviceId: device.deviceId,
      name: device.name,
      deviceType: device.type,
      data:[
        {
          key: "value",
          ts: new Date(),
          value: device.num
        }
      ] 
    }
    common.pushDeviceData(deviceData, (res) => {
      console.log(res)
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

  }
})