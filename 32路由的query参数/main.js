import Vue from 'vue'
import App from './App.vue'

//引入
import VueRouter  from 'vue-router'

//引入路由器

import router from './router'
//引入一个文档之后，文档执行完之后，才会正常使用

Vue.config.productionTip = false
//使用vuex 才可以使用store 配置项
//不管import在哪里，都会优先执行 import
//

Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')

