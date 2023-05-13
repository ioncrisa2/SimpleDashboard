import {createRouter,createWebHistory} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:'/',name:'/dashboard',component: () => import('./views/dashboard.vue')},
        {path:'/login',name:'/login',component: () => import('./views/Login/login.vue')},

    ]
});

export default router;