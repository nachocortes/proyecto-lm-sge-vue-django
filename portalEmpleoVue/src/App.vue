<script setup>
import NavBar from "@/components/NavBar.vue";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/Footer.vue";
</script>

<template id="fondo1">
    <NavBar/>
<<<<<<< HEAD
    <div class="container1" id="container1">
    <div class="container-fluid" id="contenido">
        <div class="row" id="fondo">
            <div class="col-auto">
                <Menu class="mt-3 ms-1"/>
            </div>
            <div class="col my3">
                <RouterView/>
=======
    <div class="container-fluid" id="fondo1">
        <div class="row" id="fondo">
            <div class="col-auto">
                <Menu class="my-3 ms-1"/>
            </div>
            <div class="col">
                <RouterView class="my3"/>
>>>>>>> master
            </div>
        </div>
    </div>
    </div>
    <Footer/>

</template>

<<<<<<< HEAD
<style>
.container1 {
    background-color: #edebe8;
}

=======
<style scoped>
#fondo1 {
    background-color: #f7f2ee;
    margin: 0;
}

#fondo {
    background-color: #f7f2ee;
    height: 100%;
    margin: 0;
}
>>>>>>> master
</style>
