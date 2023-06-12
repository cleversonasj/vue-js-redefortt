<template>
  <div class="home">
    <Banner />
    <Informacoes />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Banner from '../components/Banner.vue'
import Informacoes from '../components/Informacoes.vue'


export default defineComponent({
  name: 'HomeView',
  components: {
    Banner,
    Informacoes
  },
});
</script>

<style scoped>




</style>
