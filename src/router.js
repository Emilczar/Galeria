import Vue from 'vue'
import Router from 'vue-router'

import ListImg from './components/ListImg.vue'
import Favorite from './components/Favorite.vue'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '',
            name: 'home',
            component: ListImg,
            props: {
                value: 'zmienen testy'
            }
        },
        {
            path: '/ulubione',
            name: 'test',
            component: Favorite
        }
    ]
})