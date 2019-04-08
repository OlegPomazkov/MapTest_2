import Vue from 'vue'
import Router from 'vue-router'
import DataComp from './pages/Data.vue'
import MapComp from './pages/Map.vue'
import DialogComponent from './components/DialogComponent.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: DataComp, 
    },
    {
      path: '/data',
      name: 'table',
      component: DataComp, 
      children: [
        { 
          name: 'dialog',
          path: ':id', 
          component: DialogComponent 
        },
      ]
    },
    {
      path: '/map',
      name: 'map',
      component: MapComp
    },
  ]
})
