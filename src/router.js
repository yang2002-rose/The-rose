import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/kuaijiecaidan',
      name: 'kuaijiecaidan',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/kuaijiecaidan/index.vue')
    },
    {
      path: '/xiugaimima',
      name: 'xiugaimima',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/xiugaimima/index.vue')
    },
    {
      path: '/qingjiashenqing',
      name: 'qingjiashenqing',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/qingjiashenqing/index.vue')
    },
    {
      path: '/kehuliebiao',
      name: 'kehuliebiao',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/kehuliebiao/index.vue')
    },
    {
      path: '/xiaoshouxiansuo',
      name: 'xiaoshouxiansuo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/xiaoshouxiansuo/index.vue')
    }
  ]
})




// import Vue from 'vue'
// import Router from 'vue-router'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Login',
//       component: () => import( './views/Login')
//     },
//     {
//       path: '/kuaijiecaidan',
//       name: 'kuaijiecaidan',
//       component: () => import( './views/kuaijiecaidan')
//     }
//   ]
// })
