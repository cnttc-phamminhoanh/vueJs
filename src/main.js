import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
// import Home from './components/Home.vue'
// import HelloWorld from './components/HelloWorld.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

// Vue.component('home-component', Home);

// Vue.component('hello-component', HelloWorld);

const router = new VueRouter({
  routes
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
