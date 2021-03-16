import {
  get,
  post,
  remove
} from '../../http'

const user = {}

//获取用户应用列表
user.appList = function () {
  return post("/admin/app/list");
}

user.appInfo = function (params) {
  return get("/admin/app/get/" + params);
}

//刷新token
user.refreshToken = function (params) {
  return post('support/account/refresh?refreshToken=' + params, { refreshToken: params })
}
//登出操作
user.logout = function (params) {
  let token = '';
  if (params) {
    token = params.replace("Bearer ", "");
  }
  return remove('/support/account/logout?access_token=' + token)
}

user.MuenList = function () {
  return get('/admin/user/info');
}

export default user

