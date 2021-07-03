<template>
    <div class="font-poppins text-gray-800">
        <div class="">
        <Navbar />
    </div>
        <router-view />
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {Navbar}
}

</script>

<style>
#app {
    /*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*  -webkit-font-smoothing: antialiased;*/
    /*  -moz-osx-font-smoothing: grayscale;*/
    /*  text-align: center;*/
    /*  color: #2c3e50;*/
    /*  margin-top: 60px;*/
    color: rgb(26, 26, 26);
}
</style>
