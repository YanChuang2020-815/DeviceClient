import {
  Base
} from '../common/base.js'

class Common extends Base {
  constructor() {
    super()
  }

  // <---------------------用户相关api------------------>
  //根据Id查询用户信息
  getUacUserById(param, callback) {
    var params = {
      url: '/uac/user/getUacUserById/' + param.userId,
      //data: param,
      method: 'POST',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(params);
  }

  // <---------------------rdc相关api------------------>
  //获取用户下的全部场景
  getAllScene(callback) {
    var params = {
      url: '/rdc/rdcScene/getAllScene',
      method: 'GET',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(params);
  }

  //获取场景下的全部设备
  getAllDeviceByUserAndScene(sceneId, callback) {
    var params = {
      url: '/rdc/rdcDevice/getAllDeviceByUserAndScene/' + sceneId,
      method: 'GET',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(params);
  }

  //发送设备数据
  pushDeviceData(params, callback) {
    var params = {
      url: '/rdc/rdcDevice/pushDeviceData',
      method: 'POST',
      data: params,
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(params);
  }
}

export {
  Common
}