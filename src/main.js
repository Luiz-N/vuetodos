// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// Is this the right way to do this? Doesn't feel like it
import '../node_modules/todomvc-common/base.css'
import '../node_modules/todomvc-app-css/index.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
