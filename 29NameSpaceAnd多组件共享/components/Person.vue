<template>
    <div>
        <h1>人员列表</h1>
        <input type="text" placeholder="请输入" v-model="name">
        <h3 style="color: red">求和组件值为: {{ sum }}</h3>
        <h3>列表中都i一个人的名字;{{ firstPersonName }}</h3>
        <button @click="add">添加</button>
        <button @click="addWang">添加王兴的人</button>

        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>
<script>
import { nanoid } from 'nanoid'
import { mapState } from 'vuex';
export default {
    name: 'Person',
    data() {
        return {
            name: ''
        }
    },
    computed: {

        personList() {
            return this.$store.state.personAbout.personList
        },
        sum() {
            return this.$store.state.countAbout.sum
        },
        firstPersonName() {
            return this.$store.getters['personAbout/getFirstName']

            // ...mapState(['personList']),
            // ...mapState({personList:'personList'})
        },
    },
    methods: {
        add() {
            const personObj = { id: nanoid(), name: this.name }
            console.log(personObj)
            this.$store.commit('personAbout/ADD_PERSON', personObj)
            this.name = ''
        },
        addWang() {
            if (this.name == '王') {
                const personObj = { id: nanoid(), name: this.name }
                this.$store.dispatch('personAbout/addPersonWang', personObj)
                this.name = ''
            }
            else alert(123)
        },
    },

}
</script>