import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter); //Vue 내에서 router를 사용하겠다.

const router = new VueRouter({
    mode : "history",
    routes : [
        {path : "/", component : Home},
        {path : "/about", component : About},
    ]
})

export default router;