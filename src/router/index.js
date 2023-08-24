import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/results",
    component: () => import("../views/Results.vue"),
  },
  {
    path: "/recipe",
    component: () => import("../views/Recipe.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
