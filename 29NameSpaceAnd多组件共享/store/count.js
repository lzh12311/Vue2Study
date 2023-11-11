export default{
    namespaced: true,
    actions: {
        add(context, value) {
            console.log('add')

            context.commit('ADD', value)
        },
        // 模块化编码 
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
    },
    mutations: {
        ADD(state, value) {
            console.log('add')
            state.sum += value
        },
        DECRE(state, value) {
            console.log('decre')
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: 'xjtlu',
        subject: 'compute',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}