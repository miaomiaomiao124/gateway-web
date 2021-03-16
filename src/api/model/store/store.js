import {
  get,
  post,
  remove,
  put,
  getFile
} from '../../http'

/**
 * store接口
 */
const store = {
  // 属性历史记录
  getPropData (params) {
    return post("/store/historyData/getPropData", params);
  },
  //服务调用日志记录
  getInvokeServiceLog (params) {
    return post("/store/invokeServiceLog/pageList", params);
  },
  //设备上下线记录
  getDeviceOnline (params) {
    return post("/store/deviceOnline/pageList", params);
  },
  //属性设置记录日志
  getPropertyLog (params) {
    return post("/store/setPropertiesReport/pageList", params);
  },
  //设备事件日志记录
  getEventLog (params) {
    return post("/store/eventLog/pageList", params);
  },
  //设备通信日志记录
  getCommLog (params) {
    return post("/store/historyCommLog/pageList", params);
  },
  //设备历史数据图表
  chart (params) {
    return post("/store/historyData/chart", params);
  },
  //设备历史数据环比分析
  ringDatio (params) {
    return post("/store/historyData/chart", params);
  },
  //设备历史数据同比分析
  yearOnYear (params) {
    return post("/store/historyData/lastYear", params);
  },
  historyExcel (params) {
    return getFile("/store/historyDataReport/export/excel" + params);
  },
   //设备连接记录
   getConnectLog(params){
  	return post("/store/deviceConnect/pageList", params);
  }
}

export default store