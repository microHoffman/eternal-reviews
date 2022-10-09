import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/pages/Home.vue";
import SingleProject from "@/pages/SingleProject.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/project/:id",
    name: "single-project",
    component: SingleProject,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
