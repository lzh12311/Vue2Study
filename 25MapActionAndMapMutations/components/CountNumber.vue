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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数+</button>
    <button @click="incrementWait">等一等再加</button>

  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
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
     // 生成了 计算属性  数组写法  对象写法
    ...mapState(['sum', 'school', 'subject']),

    // 
    ...mapGetters(['bigSum']),
    
  },

  //计算属性只能自己的使用 
  methods: {
    // increment() {
    //   this.$store.dispatch('add', this.n)
    // },
    // decrement() {
    //   this.$store.dispatch('decre', this.n)
    // },










  // increment() {
    //   this.$store.dispatch('add', this.n)
    // },

    //mapMutations 会生成这个， 并不会带着参数 n 
    // increment(value) {
    //   this.$store.dispatch('add', value)
    // },

    // 莫名其妙的生成了一个鼠标事件 
    // 所以在调用它生成的方法是，得传入参数。 并且， 这个方法适用于 commit联系mutations 的方法
    ...mapMutations({increment:'ADD',decrement:'DECRE'}),
     // 所以在调用它生成的方法是，得传入参数。 并且， 这个方法适用于 commit联系mutations 的方法 数组
    //  ...mapMutations(['ADD','DECRE']),
    ...mapActions({incrementOdd:'addOdd'}),
    /*************************************************************/ 
    // incrementOdd() {
    //   this.$store.dispatch('addOdd', this.n)
    // },
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
