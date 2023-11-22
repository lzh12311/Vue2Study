import Vue from 'vue'
import App from './App.vue'

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'


import { Button, Select, Row, DatePicker } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.config.productionTip = false
// Vue.use(ElementUI)


new Vue({
  el: '#app',

  render: h => h(App),

}).$mount('#app')

