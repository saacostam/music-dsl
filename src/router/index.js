import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Documentation from "../views/Documentation.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/documentation",
    name: "documentation",
    component: Documentation,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
