import Vue from 'vue'
import App from './App.vue'
import mdiVue from 'mdi-vue'
import * as mdijs from '@mdi/js'
import movable from 'v-movable'
import axios from 'axios'

Vue.use(mdiVue, {
  icons: mdijs
}) 

Vue.prototype.$http = axios

Vue.use(movable);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
