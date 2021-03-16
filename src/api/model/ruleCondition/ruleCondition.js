import {
    get,
    post,
    remove,
    put,
  } from '../../http'


const RuleCondition={}

//删除告警规则条件
RuleCondition.Delete=function(params){
	return remove("/push/bizNoticeRuleCondition/delete/" + params);
}

//获取告警字典列表
RuleCondition.List=function(params){
  params.dicCode='alarm_level'
	return post("/support/sysDictItem/page", params);
}

//修改告警规则条件
RuleCondition.Update=function(params){
	return 	put("/push/bizNoticeRuleCondition/update", params);
}

//添加告警规则条件
RuleCondition.Add=function(params){
	return post("/push/bizNoticeRuleCondition/add", params);
}

//获取标签列表
RuleCondition.PageList=function(params){
	return post("/support/sysObjectTag/pageList", params);
}

//获取分组列表
RuleCondition.GroupLists=function(params){
	return post("/support/bizGroupInfo/groups", params);
}

//获取设备列表
RuleCondition.DeviceList=function(params){
	return post("/support/bizDeviceInfo/pageList", params);
}

//获取产品类型列表
RuleCondition.ProductType=function(params){
	return post("/support/bizProductType/pageList",params);
}

RuleCondition.RuleList=function(params){
	return post("/push/bizNoticeRuleCondition/pageList",params);
}


export default RuleCondition
