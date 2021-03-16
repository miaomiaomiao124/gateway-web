import {
  get,
  post,
  remove,
  put
} from '../../http'

const grouping = {};

//批量分组添加
grouping.batchAddGroup = (id,params)=>{
  return put('/support/bizGroupInfo/batchUpdate/'+id,params)
}

//修改分组信息
grouping.update = params=>{
  return put('/support/bizGroupInfo/update',params)
}

//批量分组移除
grouping.batchDelete = (id,params)=>{
  return put('/support/bizGroupInfo/batchDelete/'+id,params)
}
//批量修改
grouping.batchModify = (params)=>{
  return put('/support/bizGroupInfo/batch',params);
}
//复制分组
grouping.copyGroup= (params) =>{
  return post('/support/bizGroupInfo/copy/'+params);
}

//添加分组
grouping.Add =params=>{
  return post('/support/bizGroupInfo/add',params)
}

//删除分组
grouping.Delete = params=>{
  return remove('/support/bizGroupInfo/delete/'+params)
}

//获取应用下所有分组
grouping.groups = params=>{
  return post('/support/bizGroupInfo/groups',params)
}

//获得某分组下设备列表及子分组下的设备列表
grouping.productDevice = params=>{
  return post('/support/bizDeviceInfo/device',params)
}

//获得某分组下设备列表及子分组下的设备列表--根据deviceKey分页
grouping.productDeviceAutoPage = params=>{
  return post('/support/bizDeviceInfo/deviceAutoPage',params)
}


export default grouping
