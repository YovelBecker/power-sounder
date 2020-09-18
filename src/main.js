import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {capitalizeAll} from './filters';

import './styles/main.scss'


Vue.config.productionTip = false

Vue.filter('capitalizeAll', capitalizeAll);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
