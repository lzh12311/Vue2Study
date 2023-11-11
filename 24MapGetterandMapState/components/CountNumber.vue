<template>
  <div>
    <h1>当前求和为: {{ sum}}</h1>
    <h2>当前求和de 10为: {{ bigSum }}</h2>
    <h2>subject :{{ subject }}</h2>
    <h2>school: {{school }}</h2>

    <select v-model.number="n">
      <option :value='1'>1</option>
      <option :value='2'>2</option>
      <option :value='3'>3</option>

    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数+</button>
    <button @click="incrementWait">等一等再加</button>

  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: 'CountNumber',
  data() {
    return {
      n: 1,//用户选择
      //当前值

    }
  },
  computed:{
    // 生成了 计算属性  但是时 vuex bindings  对象写法
    // ...mapState({sum:'sum',school:'school',name:'name'}),
      /**
       * 出现了大量冗余的代码  return 了相似的东西
       * 
       * 
       */
    
       //靠程序员自己去写计算属性
    // sum(){
    //   return this.$store.state.sum
    // },
    
    // school(){
    //   return this.$store.state.school
    // },
    // name(){
    //   return this.$store.state.name
    // },


     // 生成了 计算属性  数组写法  对象写法
    ...mapState(['sum', 'school', 'subject']),

    // 
    ...mapGetters(['bigSum']),
    
  },

  //计算属性只能自己的使用 
  methods: {
    increment() {
      this.$store.dispatch('add', this.n)
    },
    decrement() {
      this.$store.dispatch('decre', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('addOdd', this.n)
    },
    incrementWait() {

    },

  },
  mounted(){
   const x = mapState({sum: 'sum',school:'school',name:'name'})
   console.log(x)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
button {
  margin-left: 5px;
}
</style>
