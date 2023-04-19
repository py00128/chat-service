import Vue from 'vue';
import Router from 'vue-router';

// Import components
//import Home from './components/Home.vue';
import HeaderInbox from './components/HeaderInbox.vue';
import HeaderChat from './components/HeaderChat.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    //{
      //path: '/',
      //name: 'home',
      //component: Home,
    //},
    {
      path: '/inbox',
      name: 'inbox',
      component: HeaderInbox,
    },
    {
      path: '/chat/:id',
      name: 'chat',
      component: HeaderChat,
    },
  ],
});
