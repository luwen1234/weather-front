import VueRouter from 'vue-router';
import Vue from "vue";
import Login from "@/views/login";

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '',
        component: Login
    }
];
export default new VueRouter({
    routes: routes,
    mode: 'history',
    base: '/'
})
