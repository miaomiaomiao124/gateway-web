
//state:     存放所有变量
//mutations  存放同步读取、修改state的的方法
//action     存放异步读取、修改state的的方法

export default {
    state: {
        // 产品列表
        List:[],
      },
      mutations:{
          setProductList:(state,{vm,data})=>{
            // vm.$api.product.List(data).then(res=>{
            //     return res;
            // }).catch(err=>{
            //     vm.$message.error(`1123`);
            // })
          }
      },
      actions:{
        // setProductList:(state,{vm,data})=>{
        //     return new Promise((resolve, reject)=>{
        //         vm.$api.product.List(data).then(res=>{
                    
        //             resolve(res)
        //         }).catch(err=>{
        //             vm.$message.error(`1123`);
        //             reject();
        //         })
        //     })
            
        //   }
      }
}