export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') == 0) {
                context.commit('ADD_PERSON', value)
            }
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.push(value)
        }
    },
    state: {
        personList: [{
            id: '001', name: '李四'
        }]
    },
    getters: {
        getFirstName(state) {
            return state.personList[state.personList.length-1].name
        },
    }
}