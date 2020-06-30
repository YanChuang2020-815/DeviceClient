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
}

export {
  Common
}