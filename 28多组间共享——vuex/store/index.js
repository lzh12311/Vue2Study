//该文件用于创建核心概念  store 
import Vue from 'vue'
Vue.use(Vuex)

import Vuex from 'vuex'
// actions 对象，响应组件中的动作
const actions = {
    add(context, value) {
        console.log('add')

        context.commit('ADD', value)
    },
    decre(context, value) {
        console.log('decre')
        context.commit('DECRE', value)
    },
    addOdd(context, value) {
        if (context.state.sum % 2) {
            //为什么不直接使用 加法呢  还需要创建一个 commit 继续运行
            //因为 会有一些devpool 来帮助我们 
            context.commit('ADD', value)
        }
    },

}
///为什么使用？    条理化， 解耦复用   

//mutation 对象， 操作数据（state）
const mutations = {
    ADD(state, value) {
        console.log('add')
        state.sum += value
    },
    DECRE(state, value) {
        console.log('decre')
        state.sum -= value
    },
    ADD_PERSON(state, value){
        state.personList.push(value)
    }
}

//state 对象， 存储数据 
const state = {

    //数据源  类似于data 
    sum: 0,
    school: 'xjtlu',
    subject : 'compute',
    personList:[{
        id:'001',name:'李四'
    }]
}

//用于将getters 对state中的数据进行加工
const getters = {
// 类似于computed 
    bigSum(state) {
        return state.sum * 10
    }
}
// 创建并导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})




