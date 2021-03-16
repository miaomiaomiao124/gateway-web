//这是公共的vuex方法，所有系统公共的状态都在这里管理
import util from '@/router/util.cookies'


export default {
    state: {
        // 产品列表
        unit: [],
        loginDate:false,
        app_id:util.get('app_id'),
        oemId:util.get('oemId')
    },
    mutations: {
        setproductunit: (state, vm ) => {
            vm.$api.product
                .sysDictType({
                    dicName: "单位"
                })
                .then(res => {
                    vm.$api.product
                        .sysDictItem({
                            dicId: res.records[0].dicId,
                            pageSize: 120
                        })
                        .then(ress => {
                            state.unit = ress.records
                        });
                });
        },
        LoginIdExpiredTrue(state){
            state.loginDate = true;
        },
        LoginIdExpiredFalse(state){
            state.loginDate = false;
        },
        changeAppId:(state,id)=>{
            state.app_id=id;
        },
        changeOemId:(state,id)=>{
            state.oemId=id;
        }
    },
    actions: {
        
    }
}