import Vue from 'vue'
import App from './App.vue'


import VueResource from 'vue-resource'
//引入一个文档之后，文档执行完之后，才会正常使用
import store from './store'
Vue.config.productionTip = false
//使用vuex 才可以使用store 配置项
//不管import在哪里，都会优先执行 import
//

Vue.use(VueResource)
new Vue({
  render: h => h(App),
  store
}).$mount('#app')

