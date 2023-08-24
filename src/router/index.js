import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Results",
    path: "/results",
    component: () => import("../views/Results.vue"),
  },
  {
    name: "Recipe",
    path: "/recipe/:id",
    component: () => import("../views/Recipe.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
