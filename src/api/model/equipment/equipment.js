import {
    get,
    post,
    remove,
    put
} from '../../http'

const device = {};

//获取设备信息列表
device.DeviceInfoList = params=>{
    return post('/support/bizDeviceInfo/pageList',params);
}
device.DeviceInfoList3 = params=>{
    return post('/support/bizDeviceInfo/pageList3',params);
}
//批量添加设备
device.batchAdd = params =>{
    return post('/support/bizDeviceInfo/batch/add',params);
}

//切换设备属性来源（设备）
device.changeDevice = params=>{
    return post('/support/bizDeviceProperty/add',params)
}

//切换设备属性来源（产品）
device.changeProduct = params=>{
    return remove('/support/bizDeviceProperty/delete/'+params)
}
//重置设备地图
device.resetMap = params=>{
	return put('/support/bizDeviceInfo/map/reset',params)
}

//修改设备属性
device.deviceUpdate = params=>{
    return put('/support/bizDeviceProperty/update',params)
}

//设备属性列表
device.attrList = params=>{
    return post('/support/bizDeviceProperty/pageList',params)
}
//物理设备属性列表
device.phyAttrList = params=>{
    return post('/support/bizDeviceProperty/phyPageList',params)
}
//获取健康状态
device.getHealthStat = params=>{
  return post('/support/StatHealth/pageList',params)
}

//删除设备通道
device.ChannelDelete = params=>{
    return remove('/support/bizDeviceChannel/delete/'+params)
}

//修改设备通道
device.ChannelUpdate = params=>{
    return put('/support/bizDeviceChannel/update',params)
}

//添加设备通道
device.ChannelAdd = params=>{
    return post('/support/bizDeviceChannel/add',params)
}

//获取设备通道列表
device.ChannelList = params=>{
    return post('/support/bizDeviceChannel/pageList',params)
}

//删除设备
device.Delete = params=>{
    return remove('/support/bizDeviceInfo/delete/'+params)
}

//添加设备
device.Add = params=>{
    return post('/support/bizDeviceInfo/add',params)
}

//修改设备信息
device.Update = params=>{
    return put('/support/bizDeviceInfo/update',params)
}
//批量修改设备启用/禁用状态
device.BatchDisable = params =>{
    return put("/support/bizDeviceInfo/batch/initiate",params);
}
//批量修改设备部分信息
device.BatchUpdate = params =>{
    return put("/support/bizDeviceInfo/batch/info",params);
}
//批量删除设备
device.BatchDelete = params =>{
    return remove("/support/bizDeviceInfo/batch/delete",params);
}
//动态修改设备信息
device.dynamicUpdate = params =>{
    return put("/support/bizDeviceInfo/dynamicUpdate",params);
}

//获取设备详情
device.Info = params=>{
    return get('/support/bizDeviceInfo/get/'+params)
}

//查询设备影子
device.getShadow = params=>{
    return get('/shadow/shadow/get/'+params)
}

//修改设备影子
device.UpdateShadow = params=>{
    return put('/shadow/shadow/update/business',params)
}

//删除设备通道
device.DeleteVideoChannel = params=>{
    return remove('/stream/bizVideoChannelInfo/delete/'+params)
}

//获取设备视频列表
device.VideoList = params=>{
    return post('/stream/video/list',params)
}

//修改视频通道
device.UpdateVideoChannel = params=>{
    return put('/stream/bizVideoChannelInfo/update',params)
}

//添加视频通道
device.AddVideoChannel = params=>{
    return post('/stream/bizVideoChannelInfo/add',params)
}

//批量添加视频通道
device.AddBatchVideoChannel = params=>{
    return post('/stream/bizVideoChannelInfo/addBatch',params)
}

//添加设备标签
device.AddBatchTag = params=>{
    return post('/support/sysObjectTag/batchAdd',params)
}

//删除设备标签
device.deleteTag = params=>{
  return remove('/support/sysObjectTag/delete/'+params)
}

//获取设备标签列表
device.TagList = params=>{
    return post('/support/sysObjectTag/pageList',params)
}

//获取所有标签列表
device.TagInfoList = params=>{
  return post('/support/sysTagInfo/pageList',params)
}

//获取视频回放地址
device.getPlaybackUrl = params=>{
    return post('/stream/video/getPlaybackUrl',params)
}

//获取录像文件列表
device.getHistory = params=>{
    return post('/stream/video/getHistory',params)
}

//获取设备实时数据
device.shadowProp = params=>{
    return get('/shadow/prop/value/'+params)
}

//获取设备实时数据---会相对上面的接口多
device.shadowPropDetails = params=>{
  return get('/shadow/prop/detailValues/'+params)
}

//获取设备实时数据---会相对上面的接口多--发送get请求到设备
device.shadowPropDetailsRefresh = params=>{
  return get('/shadow/prop/propsRefresh/'+params)
}

//查询实时数据
device.shadowPropSerch = params=>{
  return post('/shadow/prop/search/values',params)
}

//网关设备下发配置
device.notice = params=>{
    return get('/support/bizDeviceChannel/notice/'+params)
}

//获取产品下的未绑定网关设备的设备
device.productDevice = params=>{
    return get('/support/bizDeviceInfo/device/'+params)
}

//解绑产品设备
device.unbindProductDevice = params=>{
    return post('/support/device/link/unbind',params)
}

//绑定产品设备
device.bindProductDevice = params=>{
    return post('/support/device/link/bind',params)
}

//调用设备服务
device.invokeService = params=>{
  return post('/manage/device/invokeService',params)
}

//调用设备服务
device.setProp = params=>{
  return post('/manage/device/setProp',params)
}

device.getlog = params=>{
  return post('/manage/deviceLog/pageList',params)
}

device.getdetailByList = params=>{
  return post('/support/bizDeviceInfo/detailsByList',params)
}


export default device
