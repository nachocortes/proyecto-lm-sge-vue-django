<script setup>
import Login from "@/components/Login.vue";
import {useAuthStore} from "@/stores/auth.js";

const auth = useAuthStore();
</script>

<template>
<<<<<<< HEAD
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary pt-2 px-2">
=======
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-2 px-2">
>>>>>>> master
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">
                <i class="bi bi-house me-2"></i>
                <span>Home</span>
            </RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
<<<<<<< HEAD
=======
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
>>>>>>> master
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/calendarios">
                            <i class="bi bi-building me-2"></i>
                            <span>calendarios</span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
<<<<<<< HEAD
=======
                        <RouterLink class="nav-link" to="/calendario">
                            <i class="bi bi-building me-2"></i>
                            <span>calendario</span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/habilidades">
                            <i class="bi bi-hand-thumbs-up me-2"></i>
                            <span>Vacaciones</span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
>>>>>>> master
                        <RouterLink class="nav-link" to="/departamentos">
                            <i class="bi bi-hand-thumbs-up me-2"></i>
                            <span>departamentos</span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/empleados">
                            <i class="bi bi-hand-thumbs-up me-2"></i>
                            <span>empleados</span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
<<<<<<< HEAD
                        <RouterLink class="nav-link" to="/ausencias">
                            <i class="bi bi-person me-2"></i>
                            <span>Ausencias</span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/permisos">
                            <i class="bi bi-person me-2"></i>
                            <span>Permisos</span>
                        </RouterLink>
                    </li>

                </ul>
                <RouterLink class="navbar-brand text-light" to="/">
                    <span class="display-5 px-3">{{}}</span>
=======
                        <RouterLink class="nav-link" to="/habilidades">
                            <i class="bi bi-hand-thumbs-up me-2"></i>
                            <span>habilidades</span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/empleados">
                            <i class="bi bi-person me-2"></i>
                            <span>Ausencias</span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#" tabindex="-1">Festivos</a>
                    </li>
                </ul>
                <RouterLink class="navbar-brand text-light" to="/">
                    <span class="display-5 px-3">Vue</span>
>>>>>>> master
                </RouterLink>
                <button class="navbar-toggler border-0 text-light" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Navegación">
                    <i class="bi bi-list"></i>
                </button>
                <div class="collapse navbar-collapse mx-3" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto"></ul>
                    <ul class="navbar-nav ms-auto">
                        <Login/>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
</style>
