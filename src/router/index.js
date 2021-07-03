import{ createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import About from "../components/About.vue";
import PostPage from "../views/PostPage.vue";
const routes= [
    {
        path: '/',
        name: Home,
        component: Home
    },
    {
        path: '/ab',
        name: About,
        component: About
    },
    {
        path:'/post/:id',
        name: PostPage,
        component: PostPage,
        props: true
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export  default router