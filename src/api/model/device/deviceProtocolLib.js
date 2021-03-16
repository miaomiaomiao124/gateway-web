import {
  get,
  post,
  put,
  remove,
} from '../../http'

const protocol = {}

//新增
protocol.Add = params => {
  return post("/support/bizDeviceProtocolLib/add", params);
}

//修改
protocol.Update = params => {
  return put("/support/bizDeviceProtocolLib/update", params);
}

//查询
protocol.Get = params => {
  return get("/support/bizDeviceProtocolLib/get/" + params);
}

//分页查询
protocol.PageList = params => {
  return post("/support/bizDeviceProtocolLib/pageList", params);
}

//删除
protocol.Delete = params => {
  return remove("/support/bizDeviceProtocolLib/delete/" + params);
}

export default protocol
