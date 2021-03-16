import {
  get,
  post,
  put,
  remove,
  getFile
} from '../../http'

const webComponent = {
  // 标记全部已读
  readAllMessage (params) {
    return post("/support/webMsgReadLog/addAll", params)
  },

  // 获取点击菜单排行榜
  getMenuRank (userId) {
    return get("/support/clickMenu/get/" + userId);
  },
  // 更新点击菜单排行榜
  updateMenuRank (params) {
    return post("/support/clickMenu", params);
  },

  //通过IP获取地址
  // getAdreesByIp (ip) {
  // return jsonP(ip)
  // },
  // 刷新Token
  refreshToken (params) {
    return post('/support/account/refresh?refreshToken=' + params);
  },
  // mqtt远程配置
  mqttConfig () {
    return get("/support/webScoketMqtt/config");
  },
  // 取消订阅
  unSubscribeTopic (params) {
    return remove('/support/topic', params);
  },
  // 订阅主题
  subscribeTopic (params) {
    return post('/support/topic', params);
  },
  // 消息确定
  messageConfirm (params) {
    return put('/support/webSysEventMessage?msgId=' + params);
  },
  messageConfirmByAlarmId (params) {
    return post('/support/webSysEventMessage/messageConfirmByAlarmId?alarmId=' + params)
  },
  // 标记已读(按msgId)
  readMessage (params) {
    return post("/support/webMsgReadLog/bacthAdd?msgIds=" + params)
  },
  // 标记已读(按createId)
  readMessage2 (params) {
    return post("/support/webMsgReadLog?createId=" + params)
  },
  // 消息查询(多条件可分页)
  messagePageList (params) {
    return post("/support/webSysEventMessage/pageList", params);
  },
  // 忘记密码(校检手机号)
  forgotPassword (params) {
    return post('/support/account/forgotPassword', params);
  },
  // 是否输入验证码
  yzm (params) {
    return get('/support/account/yzm/' + params);
  },
  // 短信登陆
  smsLogin (params) {
    return post('/support/account/sms/login', params);
  },
  // 验证码登陆
  yzmLogin (params) {
    return post('/support/account/yzm/login', params);
    //return post('/support/account/login', params);
  },
  // 报表导出excel
  historyExcel (params) {
    return getFile("/support/historyDataReport/export/excel" + params);
  },
  // 获取登录用户在线客户端列表
  onlineList () {
    return get("/support/user/online");
  }
}

export default webComponent
