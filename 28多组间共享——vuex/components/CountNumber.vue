<template>
  <div>
    <h1>当前求和为: {{ sum }}</h1>
    <h2>当前求和de 10为: {{ bigSum }}</h2>
    <h2>subject :{{ subject }}</h2>
    <h2>school: {{ school }}</h2>

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
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'CountNumber',
  data() {
    return {
      n: 1,//用户选择
      //当前值

    }
  },
  computed: {
   
    ...mapState(['sum', 'school', 'subject']),

 
    ...mapGetters(['bigSum']),

  },
  methods: {
    ...mapMutations({ increment: 'ADD', decrement: 'DECRE' }),

    ...mapActions({ incrementOdd: 'addOdd' }),

    incrementWait() {
    },
  },
  mounted() {
    const x = mapState({ sum: 'sum', school: 'school', name: 'name' })
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
