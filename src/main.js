import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";
import About from "./components/About";
import Detail from "./components/Detail";

Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
    router: new VueRouter({
        routes: [
            {path: "", component: HelloWorld},
            {path: "/About", component: About},
            {path: "/Detail/:id?", component: Detail},
        ]
    }),
    render: h => h(App),
}).$mount('#app')
