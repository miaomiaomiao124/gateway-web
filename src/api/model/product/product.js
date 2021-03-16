import {
    get,
    post,
    remove,
    put
} from '../../http'
//删除产品
const ProductInfo = {};


// 按deviceKey获取产品信息
ProductInfo.getConfigTem = function(params){
    return get("/support/bizProductInfo/getConfigTem/"+params);
} 

//添加产品模板配置
ProductInfo.configTem = function (params) {
    return put('/support/bizProductInfo/configTem', params);
}

// 批量修改属性验证模式
ProductInfo.bacthUpdateProperty=(params)=>{
    return post("/support/bizProductProperty/batchUpdateVerifyMode",params);
}

// 批量修改服务验证模式
ProductInfo.bacthUpdateService=(params)=>{
    return post("/support/bizProductService/batchUpdateVerifyMode",params);
}

ProductInfo.Delete = function (params) {
    return remove ("/support/bizProductInfo/delete/" + params);
}

//添加产品
ProductInfo.Add = function (params) {
    return post('/support/bizProductInfo/add', params);
}

//获取产品列表
ProductInfo.ProductInfoList = function (params) {
    return post('/support/bizProductInfo/pageList', params);
}

//获取产品信息
ProductInfo.Get = function(params){
    return get("/support/bizProductInfo/get/"+params);
} 

//获取产品类型
ProductInfo.TypeList = function (params) {
    return post('/support/bizProductType/pageList', params);
}

//根据主键、类型获取物理模型
ProductInfo.GetModel = function (params) {
    return get(`/support/bizProductInfo/get/model?productKey=${params}&type=0`);
}

//产品属性操作
ProductInfo.attrDelete = params=>{
    return remove('/support/bizProductProperty/delete/'+params);
}

//产品属性列表
ProductInfo.attrList = params=>{
    return post('/support/bizProductProperty/pageList',params);
}

//修改产品属性
ProductInfo.attrUpdate = params=>{
    return put('/support/bizProductProperty/update',params);
}

//新增产品属性
ProductInfo.attrAdd = params=>{
    return post('/support/bizProductProperty/add',params);
}

//产品属性位置切换
ProductInfo.attrOrderIndex = params=>{
    return post("/support/bizProductProperty/change/orderIndex",params);
}

//产品单位
ProductInfo.sysDictType = params=>{
    return post("/support/sysDictType/pageList",params);
}

//产品单位
ProductInfo.sysDictItem = params=>{
    return post("/support/sysDictItem/pageList",params);
}

//删除产品事件
ProductInfo.eventDelete = params=>{
    return remove("/support/bizProductEvent/delete/"+params);
}

//修改产品事件
ProductInfo.eventUpdate = params=>{
    return put("/support/bizProductEvent/params/update",params);
}

//添加产品事件
ProductInfo.eventAdd = params=>{
    return post("/support/bizProductEvent/params/add",params);
}

//获取产品事件参数
ProductInfo.eventParams = params=>{
    return get("/support/bizProductEvent/get/params/"+params);
}

//获取产品事件列表
ProductInfo.eventList = params=>{
    return post("/support/bizProductEvent/pageList",params);
}

//重置ProductSecret
ProductInfo.resetSecret = params=>{
    return get("/support/bizProductInfo/resetSecret/"+params);
}

//修改产品信息
ProductInfo.infoUpdate = params=>{
    return put("/support/bizProductInfo/update",params);
}

//获取产品详情
ProductInfo.details = params=>{
    return get("/support/bizProductInfo/get/"+params);
}

//删除产品服务
ProductInfo.severDelete = params=>{
    return remove("/support/bizProductService/delete/"+params);
}

//修改产品服务
ProductInfo.severUpdate = params=>{
    return put("/support/bizProductService/params/update",params);
}

//添加产品事件
ProductInfo.severAdd = params=>{
    return post("/support/bizProductService/params/add",params);
}

//获取产品服务参数
ProductInfo.serviceParams = params=>{
    return get("/support/bizProductService/get/params/"+params);
}

//获取产品服务列表
ProductInfo.severList = params=>{
    return post("/support/bizProductService/pageList",params);
}

//获取产品服务列表
ProductInfo.severListWithParams = params=>{
  return post("/support/bizProductService/select/serviceParams",params);
}


//删除产品固件
ProductInfo.upgradeDelete = params=>{
    return remove("/support/bizProductFirmwareInfo/delete/"+params);
}

//固件添加设备
ProductInfo.upgradeAddDevice = params=>{
    return post("/support/bizDeviceInfo/ota/update",params);
}

//添加产品固件
ProductInfo.upgradeAdd = params=>{
    return post("/support/bizProductFirmwareInfo/add",params);
}

//固件升级列表
ProductInfo.upgradeList = params=>{
    return post("/support/bizProductFirmwareInfo/pageList",params);
}

//固件统计列表
ProductInfo.upgradeCountList = params=>{
  return get("/support/bizDeviceInfo/ota/statistics/"+params);
}

//查询用户关联应用下所有设备
ProductInfo.getAllproductByUser = params=>{
    return post("/support/bizProductInfo/getAllproductByUser/"+params.userId+"?appId="+params.appId+"&productName="+params.productName+"&appName="+params.appName);
  }
  
  //复制设备
  ProductInfo.copyProduct = params=>{
    return post("/support/bizProductInfo/copyProduct",params);
  }




//看情况去除重复的


ProductInfo.pupgradeDelete=(params)=>{
    return remove("/support/bizParameters/delete/"+params);
}

ProductInfo.bpupgradeDelete=(params)=>{
    return remove("/support/bizParameters/deleteBatch/"+params);
}

ProductInfo.parGet=(params)=>{
    return post('/support/bizParameters/pageList',params);
}

// 批量新增参数定义
ProductInfo.parAddBatch=(params)=>{
    return post("/support/bizParameters/addBatch", params);
}

// 批量修改参数定义
ProductInfo.parUpdateBatch=(params)=>{
    return put("/support/bizParameters/updateBatch", params);
}

// 新增产品模板事件
ProductInfo.etAdd=(params)=>{
    return post("/support/bizProductEventTemplate/add", params);
}
// 修改产品模板事件
ProductInfo.etUpdate=(params)=>{
    return put("/support/bizProductEventTemplate/update", params);
}
// 删除产品模板事件
ProductInfo.etDelete=(params)=>{
    return remove("/support/bizProductEventTemplate/delete/"+params);
}
// 分页查询产品模板事件
ProductInfo.etPageList = (params) => {
    return post("/support/bizProductEventTemplate/pageList", params);
}

// 新增产品模板服务
ProductInfo.stAdd=(params)=>{
    return post("/support/bizProductServiceTemplate/add", params);
}
// 批量修改服务验证模式
ProductInfo.bacthstUpdate = (params) => {
    return post("/support/bizProductServiceTemplate/batchUpdateVerifyMode", params);
}
// 修改产品模板服务
ProductInfo.stUpdate=(params)=>{
    return put("/support/bizProductServiceTemplate/update", params);
}
// 删除产品模板服务
ProductInfo.stDelete=(params)=>{
    return remove("/support/bizProductServiceTemplate/delete/"+params);
}
// 分页查询产品模板服务
ProductInfo.stPageList = (params) => {
    return post("/support/bizProductServiceTemplate/pageList", params);
}

// 新增产品模板属性
ProductInfo.ptAdd=(params)=>{
    return post("/support/bizProductPropertyTemplate/add", params);
}
// 批量修改属性验证模式
ProductInfo.bacthptUpdate = (params) => {
    return post("/support/bizProductPropertyTemplate/batchUpdateVerifyMode", params);
}
// 修改产品模板属性
ProductInfo.ptUpdate=(params)=>{
    return put("/support/bizProductPropertyTemplate/update", params);
}
// 批量修改产品属性显示顺序
ProductInfo.orderIndex=(params)=>{
    return post("/support/bizProductPropertyTemplate/change/orderIndex", params);
}
// 删除产品模板属性
ProductInfo.ptDelete=(params)=>{
    return remove("/support/bizProductPropertyTemplate/delete/"+params);
}
// 分页查询产品模板属性
ProductInfo.ptPageList = (params) => {
    return post("/support/bizProductPropertyTemplate/pageList", params);
}

// 新增产品类型
ProductInfo.typeAdd=(params)=>{
    return post("/support/bizProductType/add", params);
}
// 修改产品类型
ProductInfo.typeUpdate=(params)=>{
    return put("/support/bizProductType/update", params);
}
// 删除产品类型
ProductInfo.typeDelete=(params)=>{
    return remove("/support/bizProductType/delete/"+params);
}
// 获取产品类型树
ProductInfo.getTypeTree = (params) => {
    return get("/support/bizProductType/getTypeTree", params);
}
// 分页查询产品类型
ProductInfo.typePageList = (params) => {
    return post("/support/bizProductType/pageList", params);
}

export default ProductInfo
