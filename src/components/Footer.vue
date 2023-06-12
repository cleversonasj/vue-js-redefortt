<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="../assets/img/logo.png" alt="Logo">
        </div>
        <div class="footer-description">
          <p>A marca da proteção!</p>
          <p>Proteção confiável para janelas, sacadas e piscinas. Sua segurança em primeiro lugar!</p>
        </div>
      </div>
      <div class="footer-info">
        <p><b>&copy; 2023 REDEFORTT</b></p>
        <p>Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">

export default {
  name: 'Footer',
  components: {
    
  },
};


</script>

<style scoped>

.footer {
  background-color: #0c2a46;
  color: #CCCCCC;
  padding: 40px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  margin-bottom: 40px;
}

.footer-logo img {
  max-width: 100px;
}

.footer-description {
  max-width: 400px;
  margin: 0 auto;
}

.footer-info p {
  margin: 5px 0;
}
</style>