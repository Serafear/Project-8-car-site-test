import Home from "./pages/Home.vue";
import HelloWorld from "./components/HelloWorld.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    component: Home,
    path: "/",
  },
  {
      name: "helloWorld",
      component: HelloWorld,
      path: "/helloworld"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
