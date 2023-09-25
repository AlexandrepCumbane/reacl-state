import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PropertiesView from "../views/PropertiesView.vue";
import PropertyView from "../views/PropertyView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/properties",
        name: "properties",
        component: PropertiesView,
    },
    {
        path: "/properties/:id",
        name: "property",
        component: PropertyView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
