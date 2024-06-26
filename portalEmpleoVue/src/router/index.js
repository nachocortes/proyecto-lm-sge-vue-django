import {createRouter, createWebHistory} from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import DepartamentoView from "@/views/DepartamentoView.vue";
import EmpleadoView from "@/views/EmpleadoView.vue";
<<<<<<< HEAD
import CalendarioView from "@/views/CalendarioView.vue";
import CalendarioGenerarView from "@/views/CalendarioGenerarView.vue";
import CalendarioEditarView from "@/views/CalendarioEditarView.vue";
import PermisosView from "@/views/PermisosView.vue";
import AusenciasView from "@/views/AusenciasView.vue";
import CalendarioVerView from "@/views/CalendarioVerView.vue";
=======
import CalendariosFormView from "@/views/CalendariosFormView.vue";
import CalendarioView from "@/views/CalendarioView.vue";
>>>>>>> master


const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/departamentos',
            name: 'departamentos',
            component: DepartamentoView
        },
        {
            path: '/empleados',
            name: 'empleados',
            component: EmpleadoView
        },
        {
            path: '/calendarios',
            name: 'calendarios',
<<<<<<< HEAD
            component: CalendarioView
        },
        {
            path: '/calendarioVer',
            name: 'calendarioVer',
            component: CalendarioVerView
        },
        {
            path: '/calendarioGenerar',
            name: 'calendario',
            component: CalendarioGenerarView
        },
        {
            path: '/calendarioEditar',
            name: 'calendarioEditar',
            component: CalendarioEditarView
        },
        {
            path: '/permisos',
            name: 'permisos',
            component: PermisosView
        },
        {
            path: '/ausencias',
            name: 'ausencias',
            component: AusenciasView
        },
        {
            path: '/calendarios/:id',
            name: 'CalendarioDetail',
            component: () => import('@/components/calendario/calendarioVer/CalendarioVer.vue')
        },
=======
            component: CalendariosFormView
        },
        {
            path: '/calendario',
            name: 'calendario',
            component: CalendarioView
        }
>>>>>>> master
    ]
});

export default router
