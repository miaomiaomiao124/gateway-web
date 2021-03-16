/* eslint-disable */ // 禁用语法检测


import {
    get,
    post,
    put,
    remove
  } from '../../http'

  const BizEnergyLine={
      addDeviceToLine(params){
          return post('support/bizEnergyRela/insertDevicesToLine',params)
      },
      removeDeviceToLine(params){
          return remove('support/bizEnergyRela/removeDevicesToLine',params)
      },
      Lineadd(params){
        return post('support/bizEnergyLine/add',params)
      },
       getLineData(params){
        return post('support/bizEnergyLine/pageList',params)
      },
      Lineedit(params){
        return put('support/bizEnergyLine/update',params)
      },
      LineremoveOne(params){
        return remove('support/bizEnergyLine/delete/'+params)
      },
      LinebatchDelete(params){
      //TODO此接口后台暂未自动生成
        return remove('support/bizEnergyLine/removes',params)
      }
  }

export default BizEnergyLine
