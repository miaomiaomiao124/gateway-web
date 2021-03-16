export default {
    state: {
        // 产品列表
        unit: [],
    },
    mutations: {
        setproductunit: (state, vm) => {
            vm.$api.product
                .sysDictType({
                    dicName: "单位"
                })
                .then(res => {
                    console.log('--------------进入获取单位');
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
    },
    actions: {

    }
}