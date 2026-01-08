<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
   <Navbar></Navbar>
   <Whatsapp></Whatsapp>
  <router-view/>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}
</style>


<script>

import Navbar from '../src/components/Navbar.vue';
import Whatsapp from './components/Whatsapp.vue';


  export default {
components: {
  Navbar,
  Whatsapp
}
  }
</script>
