<template>
  <div class="banner">
    <div class="fade-in-div" v-if="showDiv">
      <img src="../assets/img/logo_2.png" alt="Logo">
      <p>
      Proteja sua família com as melhores redes de proteção para piscinas, janelas,
      sacadas, escadas e muito mais. 
      </p>
      <p>
      Descubra a nossa variedade de soluções confiáveis e garanta tranquilidade em todos os
      momentos.
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "Banner",
  data() {
    return {
      showDiv: false

    };
  },
  mounted() {
    setTimeout(() => {
      this.showDiv = true;
    }, 1000);
  }
};

</script>

<style scoped>
.banner {
  background-image: url("../assets/img/main.png");
  height: 550px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.banner h1 {
  font-size: 40px;
  color: #ed1c24;
  margin-bottom: 20px;
}

.banner p {
  font-size: 16px;
  color: #333333;
  margin-bottom: 14px;
}

.fade-in-div {
  width: 450px;
  height: 250px;
  background-color: white;
  animation: fade-in 1s ease-out;
  padding: 30px;
  border-radius: 8px;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img{
  width: 120px;
}

@keyframes fade-in {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .banner {
    height: 500px;
  }

  .fade-in-div {
    width: 80%;
    height: 60%;
    padding: 10px;

  }

  .banner h1 {
    font-size: 30px;
  }

  .banner p {
    font-size: 16px;
  }
}
</style>