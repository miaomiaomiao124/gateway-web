import {
	get,
	post,
	remove,
	put,
} from '../../http'


const SubList = {}
//获取字典类型列表
SubList.TypeList = function (params) {
	return post("/sysDictType/type", params);
}
//分页获取字典类型列表
SubList.pageList = function (params) {
	return post("/sysDictType/pageList", params);
}
//新增字典类型
SubList.addType = function (params) {
	return post("/sysDictType/add", params);
}
//修改字典类型
SubList.modifyType = function (params) {
	return put("/support/sysDictType/update", params);
}
//删除字典类型
SubList.deleteType = function (params) {
	return remove("/support/sysDictType/delete/" + params);
}

//获取字典项列表
SubList.dictList = function (params) {
	return post("/support/sysDictItem/page", params);
}

// 通过字典类型查找字典
SubList.find = function (params) {
	return get("/admin/dict/type/" + params);
}
//删除字典项
SubList.Delete = function (params) {
	return remove("/support/sysDictItem/delete/" + params);
}

//添加字典项
SubList.Add = function (params) {
	return post("/support/sysDictItem/add", params)
}

//修改字典项
SubList.Update = function (params) {
	return put("/support/sysDictItem/update", params);
}





export default SubList
