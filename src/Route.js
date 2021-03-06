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
        mode: "history",
        routes: [
            {path: "", component: HelloWorld, name: "Home"},
            {
                path: "/About", alias: "/MyInfo", name: "Test", component: About, children: [
                    {
                        path: "Us", alias: ["i", "my", "me", "we"], components: {
                            default: AboutUs,
                            Test2: Test2,
                        }
                    },
                    {path: "You", component: AboutYou},
                ]
            },
            {
                path: "/Detail/:id?",
                component: Detail,
                name: "Item",
                props: (route) => {
                    return {
                        id: route.query.id
                    }
                }
            },
            {path: "*", redirect: "/About"},
        ]
    }),
    render: h => h(App),
}).$mount('#app')

