
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue'
require('./bootstrap');
//
// window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
import Example from './components/ExampleComponent.vue'
Vue.component('example-component', Example);
Vue.component('app', require('./components/app.vue'));

// const files = require.context('./', true, /\.vue$/i)
//
// //
// import VueRouter from 'vue-router'
// Vue.use(VueRouter);
// import axios from 'axios'
// const router = new VueRouter({
//   mode: 'history',
//   routes:[
//     {path: '/ggg',name:'catalogs', component: Example},
//     // {path: '', reditect:'/ggg'},
//   ],
// });

// files.keys().map(key => {
//     return Vue.component(_.last(key.split('/')).split('.')[0], files(key))
// })

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
  router
});
