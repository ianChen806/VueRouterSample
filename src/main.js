import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";
import About from "./components/About";
import Detail from "./components/Detail";
import AboutUs from "./components/AboutUs";
import AboutYou from "./components/AboutYou";

Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
    router: new VueRouter({
        routes: [
            {path: "", component: HelloWorld},
            {
                path: "/About", component: About, children: [
                    {path: "Us", component: AboutUs},
                    {path: "You", component: AboutYou},
                ]
            },
            {path: "/Detail/:id?", component: Detail},
        ]
    }),
    render: h => h(App),
}).$mount('#app')
