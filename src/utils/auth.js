import Cookies from 'js-cookie'

const TokenKey = 'token'

export function getToken () {
  var tokenn = Cookies.get((process.env.VUE_APP_TYPE || 'auth') + TokenKey);
  // console.log('auth.js:在cookies里获取token->',tokenn);
  return tokenn;
}

export function setToken (token) {
  return Cookies.set((process.env.VUE_APP_TYPE || 'auth') + TokenKey, token);
}

export function removeToken () {
  // console.error(removeToken.caller.toString()+",正在触发删除token操作");
  // alert(removeToken.caller.toString()+",正在触发删除token操作");
  console.log("移除token");
  return Cookies.remove((process.env.VUE_APP_TYPE || 'auth') + TokenKey)
}

const AppId = 'app_id'

export function getAppId () {
  return Cookies.get(AppId);
}

export function setAppId (appId) {
  return Cookies.set(AppId, appId)
}

export function removeAppId () {
  return Cookies.remove(AppId)
}


export function roundNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}