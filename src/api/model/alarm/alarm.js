import {
  get,
  post,
  remove,
  put
} from '../../http'

/**
 * alarm接口
 */
const alarm = {
  // 条件查询告警
  pageList(params){
    return post('/alarm/record/pageList',params);
  },
  // 查询告警
  getAlarm(params){
    return get('/alarm/record/'+params);
  },
  // 告警确认
  alarmConfirm(params){
    return put("/alarm/record",params);
  },
  // 告警趋势
  trend(params) {
    return get("/alarm/statAlarm/trend", params);
  },
  // 统计实时告警
  stat(params) {
    return post("/alarm/record/stat", params);
  },
  //获取实时告警数据
  getAlarmData(params){
    return post("/alarm/record/pageList", params);
  },

  getHistoryData(params) {
    return post('/store/alarmLog/getAlarmLog',params)
  },

  getReportByProp(params) {
    return post('/store/alarmLog/reportByProp',params)
  }
}

export default alarm
