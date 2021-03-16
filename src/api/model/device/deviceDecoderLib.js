import {
    get,
    post,
    put,
    remove,
  } from '../../http'

  const decoderLib={}

  //新增
  decoderLib.Add=params=>{
	return post("/support/bizDeviceDecoderLib/add",params);
}

//修改
decoderLib.Update=params=>{
	return put("/support/bizDeviceDecoderLib/update",params);
}

//查询
decoderLib.Get=params=>{
	return get("/support/bizDeviceDecoderLib/get/"+params);
}

//分页查询
decoderLib.PageList=params=>{
    return post("/suport/bizDeviceDecoderLib/pageList",params);
}

//删除
decoderLib.Delete=params=>{
	return remove("/support/bizDeviceDecoderLib/delete/"+params);
}

export default decoderLib