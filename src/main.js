import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from "vue-router";
import App from './components/body.vue'
import OnlineBody from './components/online-body.vue'
import OnlineMain from './components/online-main.vue'
import NewsDetail from './components/news-detail.vue'
import FormulaDetail from './components/formula-detail.vue'
import LocalBody from './components/local-body.vue'
import LocalMain from './components/local-main.vue'
import Add from './components/add.vue'

Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    column : "1"
  },
  mutations: {
    changeColumn (state,column) {
      state.column = column;
      console.log(state.column)
    }
  }
})

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      redirect: '/online'
    },
    {
      path: '/online',
      component: OnlineBody,
      children: [
        { 
          path: '', 
          component: OnlineMain
        },
        { 
          path: 'news-detal', 
          component: NewsDetail 
        },
        { 
          path: 'formula-detal', 
          component: FormulaDetail 
        },
      ]
    },
    {
      path: '/local',
      component: LocalBody,
      children: [
        { 
          path: '', 
          component: LocalMain
        },
        { 
          path: 'formula-detal', 
          component: FormulaDetail 
        },
        { 
          path: 'add', 
          name: 'add',
          component: Add 
        },
      ]
    }
  ]
})

const app = new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')