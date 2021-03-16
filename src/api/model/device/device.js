
import {
    get,
    post,
    put,
    remove
} from '../../http'

const BizDeviceInfo={
    deviceAdd(params){
        return post('/support/bizDeviceInfo/add',params)
    },
    deviceGetData(params){
        return post('/support/bizDeviceInfo/pageList',params)
    },
    deviceEdit(params){
        return put('/support/bizDeviceInfo/update',params)
    },
    deviceRemoveOne(params){
        return remove('/support/bizDeviceInfo/delete/'+params)
    },
    deviceBatchDelete(params){
        //TODO此接口后台暂未自动生成
        return remove('/support/bizDeviceInfo/removes',params)
    }
}

export default BizDeviceInfo
