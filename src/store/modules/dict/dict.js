const state = {
  CommonTypes: ['deviceStatus', 'deviceCommMode', 'AccReaderType', 'AccEventLevel', 'AccVerifymode', 'doorSensorStatus', 'nodeType','repairType','faultType'
  ,'depts','assetType','oldType'
  ],
  dict: {
    deviceStatus: [],
    deviceCommMode: [],
    AccReaderType: [],
    AccEventLevel: [],
    AccVerifymode: [],
    doorSensorStatus: [],
    //门禁产品类型
    accProductType: '',
    nodeType: [],
    repairType:[],
    faultType:[],
    depts:[],
    assetType:[],
    oldType:[],
  }
}

const mutations = {
  dictInit: (state, vm) => {
    state.CommonTypes.forEach(item => {
      console.log("加0载字典" + item)
      vm.$api.dictList({ dicCode: item }).then(res => {
        let options = []
        if (res.records.length == 0) {
          console.log('字典' + item + '为空')
          vm.$message.warning("字典" + item + '未找到')
        }
        for (let i = 0; i < res.records.length; i++) {
          let item = res.records[i]
          options.push({
            label: item.itemName,
            value: item.itemValue
          })
        }
        state.dict[item] = options
        vm.$EventBus.$emit("dictFinish", {
          name: item,
          data: options
        })
      }).catch(erro => {
        console.log('加载字典' + item + '出错', erro)
      })
    })
    //获取特殊产品类型
    // vm.$api.sublist.List({ dicCode: "productType" }).then(res => {
    //   let ok = true
    //   for (let i = 0; i < res.records.length; i++) {
    //     let item = res.records[i]
    //     if (item.itemValue == 'accDevice') {
    //       ok = false
    //       let a = JSON.parse(item.extProperty)
    //       state.dict.accProductType = a[0].value
    //       vm.$EventBus.$emit("dictFinish", {
    //         name: item,
    //         data: a[0].value
    //       })
    //     }
    //   }
    //   if (ok) {
    //     this.$message.success("未找到门禁设备特殊产品类型对应的字典项")
    //   }
    // })
  },
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
