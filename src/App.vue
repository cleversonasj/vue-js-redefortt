<template>
  <Navbar />
  <router-view/>
  <Footer />
  <a href="https://wa.me/5534991502273" target="_blank" class="whatsapp_fixed"><img src="./assets/img/whatsapp.png" alt="WhatsApp"></a>
</template>

<script lang="ts">

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  },
};

</script>

<style>

body{
  font-family: Roboto, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #0c2a46;
}

.whatsapp_fixed{
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  transition: all 0.3s;
}

.whatsapp_fixed img{
  width: 60px;
}

.whatsapp_fixed:hover{
  transform: scale(1.1);
}



</style>
