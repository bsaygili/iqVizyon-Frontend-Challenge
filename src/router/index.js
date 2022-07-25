import { createRouter, createWebHistory } from "vue-router";
import MachineList from "../views/MachineList.vue";
import DashBoard from "../views/DashBoard.vue";

const routes = [
  {
    path: "/",
    name: "MachineList",
    component: MachineList,
  },
  {
    path: "/dashboard",
    name: "DashBoard",
    component: DashBoard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
