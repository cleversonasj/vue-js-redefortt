<template>
  <div class="contact-container">
    <div class="contact-image">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7548.2864848613945!2d-48.26037860460222!3d-18.92505277899472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a4456dc6de0f4d%3A0x28de28c3479d8128!2sJardim%20Finotti%20I%20-%20Santa%20M%C3%B4nica%2C%20Uberl%C3%A2ndia%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1686457186525!5m2!1spt-BR!2sbr"
        width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="contact-info">
      <div class="info-content">
        <h2>REDEFORTT LTDA</h2>
        <p>Localizada no endereço Rua Saturnino Pedro dos Santos 81, Jardim Finotti I, em Uberlândia/MG, estamos prontos para atendê-lo. Solicite o seu orçamento.</p>
        <h2>CONTATOS E REDES SOCIAIS</h2>
        <div class="social-icons">
          <a href="https://www.instagram.com/redefortt" target="_blank" class="social-icon">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>
          <a href="https://www.facebook.com/RedeforttLtda" target="_blank" class="social-icon">
            <font-awesome-icon icon="fa-brands fa-facebook" />
          </a>
          <a href="https://wa.me/5534991502273" target="_blank" class="social-icon">
            <font-awesome-icon :icon="['fab', 'whatsapp']" />
          </a>
          <a href="mailto:cleverson1963@hotmail.com" class="social-icon">
            <font-awesome-icon icon="fa-solid fa-envelope" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'ContactSection',
};
</script>

<style scoped>
iframe {
  width: 100%;
  max-height: 450px;
}

.contact-container {
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  padding: 20px;
}

.contact-image {
  height: 500px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-image img {
  width: 100%;
}

.contact-info {
  height: 500px;
  width: 30%;
  padding-left: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact-info h2 {
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  color: #ed1c24;
}

.contact-info p {
  margin-bottom: 10px;
  text-align: justify;
  font-size: 14px;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icons .social-icon {
  background-color: #003366;
  color: #fff;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  transition: all 0.3s ease;
}


.social-icons .social-icon:hover {
  background-color: #ed1c24;
  transform: scale(1.1);
}

@media (max-width: 768px) {

  iframe {
    width: 100%;
    max-height: 300px;
  }
  .contact-container {
    flex-direction: column;
  }

  .contact-image {
    width: 100%;
    height: 300px;
  }

  .contact-info {
    width: 100%;
    height: 300px;
    padding: 0;
  }
}


</style>
