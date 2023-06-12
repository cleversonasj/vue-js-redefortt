<template>
  <div class="container">
    <div class="content">
      <div class="image-container">
        <figure>
          <img src="../assets/img/uberlandia.jpeg" alt="Imagem">
          <figcaption>Imagem retirada do site: https://www.uberlandia.mg.gov.br/</figcaption>
        </figure>
      </div>
      <div class="text-container">
        <h2>REDEFORTT, a marca da proteção</h2>
        <p>Nascida em Uberlândia/MG no ano de 1979, somos uma empresa especializada em oferecer redes de proteção confiáveis e duráveis para janelas, sacadas e piscinas. Entendemos a importância de preservar a tranquilidade e a segurança do seu lar ou estabelecimento, proporcionando um ambiente livre de riscos.</p>
        <p>Com anos de experiência no ramo, nos dedicamos a fornecer a mais alta qualidade de serviço da região. Nossas redes de proteção são fabricadas com materiais de excelência, garantindo resistência e durabilidade em todas as situações. Sabemos que cada cliente possui necessidades únicas, e é por isso que oferecemos soluções personalizadas que se integram perfeitamente à arquitetura do seu espaço, sem comprometer a estética.</p>
        <p>Ao escolher a REDEFORTT, você pode ter a certeza de contar com uma equipe de profissionais altamente qualificados e experientes, prontos para oferecer um atendimento excepcional. Além disso, nossa instalação é feita de forma minuciosa e cuidadosa, assegurando que cada rede de proteção seja fixada com precisão e confiabilidade.</p>
        <p>Sabemos que a segurança é uma prioridade, e é por isso que nos empenhamos em oferecer um serviço impecável. Não comprometemos quando se trata de proteger o que você ama. Sua tranquilidade e a segurança da sua família são nosso maior compromisso.</p>
        <p>Entre em contato conosco hoje mesmo e descubra por que a REDEFORTT é a escolha certa para as suas necessidades de redes de proteção. Confie em nós para manter seu lar ou estabelecimento seguro e protegido.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.content {
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  background-color: #f5f5f5;
  padding: 40px 20px;
}

.image-container {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.text-container {
  flex: 2;
  padding: 0 40px;
}

.text-container p {
  font-size: 16px;
  line-height: 1.5;
  color: #333333;
}

figcaption{
  font-size: 12px;
  color: #333333;
  text-align: center;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  .image-container {
    margin-bottom: 20px;
  }

  .text-container {
    padding: 0;
  } 

  .text-container h2 {
    font-size: 20px;
  }
}


</style>