import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import PropertiesView from "../views/PropertiesView.vue";
import PropertyView from "../views/PropertyView.vue"; // 
import ModePropertyView from "@/components/ModePropertyView.vue";
import ShowProperty from "@/components/ShowProperty.vue";

const routes = [
    { path: "/", name: "home", component: HomeView },
    { path: "/login", name: "login", component: LoginView },
    { path: "/properties", name: "properties", component: PropertiesView },
    {
        path: "/property",
        component: PropertyView,
        children: [
            {
                path: ":id",
                name: "detalhes",
                component: ShowProperty,
            },
            {
                path: ":id/editar",
                component: ModePropertyView,
            },
            {
                path: "nova",
                name: "nova",
                component: ModePropertyView,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
