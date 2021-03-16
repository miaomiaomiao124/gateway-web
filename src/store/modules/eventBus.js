const state = {
  eventBusList:[]
}

const actions = {
}

const mutations = {
  setData(state,data){
    if (state.eventBusList.length>50){
      state.eventBusList=[data]
    }else {
      state.eventBusList.push(data)

    }
    console.log(state.eventBusList.length,state.eventBusList)
  }
}

export default {
  state,
  mutations,
  actions
}
