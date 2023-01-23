import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Articles from "../views/Articles.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Ajout_article from "../views/Ajout_article.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/articles",
    name: "Articles",
    component: Articles,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/ajout_article",
    name: "Ajout_article",
    component: Ajout_article,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
