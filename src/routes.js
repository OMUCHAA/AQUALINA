import { createWebHashHistory, createRouter } from "vue-router";
import About from "./components/pages/About.vue";
import Home from "./components/pages/Home.vue";
import Blog from "./components/pages/Blog.vue";
import Contact from "./components/pages/Contact.vue";
import Faqs from "./components/pages/Faqs.vue";
import Order from "./components/pages/Order.vue";
import Products from "./components/pages/Products.vue";

const routes = [
  { component: Home, name: "Home", path: "/" },
  { component: About, name: "About", path: "/about" },
  { component: Blog, name: "Blog", path: "/blog" },
  { component: Contact, name: "Contact", path: "/contact" },
  { component: Faqs, name: "Faqs", path: "/faqs" },
  { component: Order, name: "Order", path: "/order" },
  { component: Products, name: "Products", path: "/products" },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
