import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";
import About from "./components/About";
import Detail from "./components/Detail";
import AboutUs from "./components/AboutUs";
import AboutYou from "./components/AboutYou";
import Test2 from "./components/Test2";

Vue.use(VueRouter);

export default new Vue({
    router: new VueRouter({
        routes: [
            {path: "", component: HelloWorld},
            {
                path: "/About", name: "Test", component: About, children: [
                    {
                        path: "Us", components: {
                            Test1: AboutUs,
                            Test2: Test2,
                        }
                    },
                    {
                        path: "You", components: {
                            Test1: AboutYou,
                            Test2: Test2,
                        }
                    },
                ]
            },
            {path: "/Detail/:id?", component: Detail, name: "Item"},
        ]
    }),
    render: h => h(App),
}).$mount('#app')

