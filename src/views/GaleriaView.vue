<template>
  <div class="main">
    <div class="carousel-container">
      <h2>{{ images[currentIndex].titulo }}</h2>
      <img @mouseover=showDatail @mouseout="hideDetail" id="images" :src="images[currentIndex].imagem"
        :alt="`Imagem ${currentIndex + 1}`" />
      <p>{{ images[currentIndex].descricao }}</p>
    </div>
    <div class="controls">
      <button @click="previousImage">
        <svg xmlns="http://www.w3.org/2000/svg" height="3em"
          viewBox="0 0 448 512">
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </button>
      <button @click="nextImage">
        <svg xmlns="http://www.w3.org/2000/svg" height="3em"
          viewBox="0 0 448 512">
          <path
            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          imagem: require("../assets/img/piscinas_1.jpg"),
          descricao: "Diversão segura e tranquilidade para aproveitar o momento.",
          titulo: "Piscinas"
        },
        {
          imagem: require("../assets/img/passarelas_1.jpg"),
          descricao: "Passarelas protegem e conectam espaços com confiança.",
          titulo: "Passarela"
        },
        {
          imagem: require("../assets/img/escadas_1.jpg"),
          descricao: "Proteção em escadas para cuidar da sua família e Pets.",
          titulo: "Escadas"
        },
        {
          imagem: require("../assets/img/janelas_1.jpg"),
          descricao: "Proteja os seus Pets e familiares sem comprometer a circulação de ar.",
          titulo: "Janelas"
        },
        {
          imagem: require("../assets/img/sacadas_1.jpg"),
          descricao: "Proteja sua sacada com redes de segurança confiáveis.",
          titulo: "Sacadas"
        },
        {
          imagem: require("../assets/img/sacadas_2.jpg"),
          descricao: "Proteja sua sacada com redes de segurança confiáveis.",
          titulo: "Sacadas"
        },
        {
          imagem: require("../assets/img/sacadas_3.jpg"),
          descricao: "Proteja sua sacada com redes de segurança confiáveis.",
          titulo: "Sacadas"
        },
        {
          imagem: require("../assets/img/sacadas_4.jpg"),
          descricao: "Proteja sua sacada com redes de segurança confiáveis.",
          titulo: "Sacadas"
        },
        {
          imagem: require("../assets/img/sacadas_5.jpg"),
          descricao: "Proteja sua sacada com redes de segurança confiáveis.",
          titulo: "Sacadas"
        },
        {
          imagem: require("../assets/img/sacadas_6.jpg"),
          descricao: "Proteja sua sacada com redes de segurança confiáveis.",
          titulo: "Sacadas"
        },
        {
          imagem: require("../assets/img/sacadas_7.jpg"),
          descricao: "Proteja sua sacada com redes de segurança confiáveis.",
          titulo: "Sacadas"
        },
        {
          imagem: require("../assets/img/sacadas_8.jpg"),
          descricao: "Proteja sua sacada com redes de segurança confiáveis.",
          titulo: "Sacadas"
        },
        {
          imagem: require("../assets/img/sacadas_9.jpg"),
          descricao: "Proteja sua sacada com redes de segurança confiáveis.",
          titulo: "Sacadas"
        },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    previousImage() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }
  }
};
</script>

<style scoped>

.main {
  height: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 30px;

}

img {
  height: 620px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.carousel-container {
  width: 620px;
  height: 780px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  margin-bottom: 1rem;
}

.controls {
  text-align: center;
  margin-top: 1rem;
}

button {
  margin: 0 0.5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

h2 {
  font-weight: bold;
  color: #f00;
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin: 20px;
}

@media screen and (max-width: 768px) {
  .main {
    flex-direction: column;
  }

  .carousel-container {
    width: 100%;
    height: 85%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  img {
    height: 70%;
    width: 100%;
  }
}</style>
