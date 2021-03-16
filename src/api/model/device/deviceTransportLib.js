import {
    get,
    post,
    put,
    remove,
  } from '../../http'

  const transport={}

  //新增
transport.Add=params=>{
	return post("/support/bizDeviceTransportLib/add",params);
}

//修改
transport.Update=params=>{
	return put("/support/bizDeviceTransportLib/update",params);
}

//查询
transport.Get=params=>{
	return get("/support/bizDeviceTransportLib/get/"+params);
}

//分页查询
transport.PageList=params=>{
    return post("/suport/bizDeviceTransportLib/pageList",params);
}

//删除
transport.Delete=params=>{
	return remove("/support/bizDeviceTransportLib/delete/"+params);
}

export default transport