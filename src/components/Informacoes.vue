<template>
  <main>
    <div class="duvidas">
      <img src="https://rastronosso.com.br/wp-content/uploads/2020/01/perguntas-frequentes-png-4.png" alt="">
    </div>
    <div class="faq">
      <div class="faq-item" v-for="pergunta in perguntas" :key="pergunta.id">
        <div class="faq-question" @click="pergunta.showAnswer = !pergunta.showAnswer">
          <h3>{{ pergunta.pergunta }}</h3>
        </div>
        <div class="faq-answer" v-show="pergunta.showAnswer">
          <p>{{ pergunta.resposta }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Informacoes",
  data() {
    return {
      perguntas: [
        {
          id: 1,
          pergunta: "Quais são as formas de pagamento?",
          resposta: "Aceitamos pagamento em dinheiro (à vista com desconto). Também aceitamos pagamentos em cartões de crédito e débito, transferência bancária e PIX. Consulte-nos para mais informações.",
          showAnswer: false
        },
        {
          id: 2,
          pergunta: "O que são redes de proteção?",
          resposta: "Redes de proteção são estruturas feitas de fios resistentes que são instaladas em janelas, sacadas, piscinas, entre outros, para evitar quedas acidentais.",
          showAnswer: false
        },
        {
          id: 3,
          pergunta: "Por que devo instalar redes de proteção em minha residência?",
          resposta: "A instalação de redes de proteção é importante para garantir a segurança de crianças, animais de estimação e evitar acidentes causados por quedas.",
          showAnswer: false
        },
        {
          id: 4,
          pergunta: "Como as redes de proteção funcionam?",
          resposta: "As redes de proteção atuam como uma barreira física, impedindo a passagem de pessoas ou objetos que possam cair.",
          showAnswer: false
        },
        {
          id: 5,
          pergunta: "Quais são os benefícios de usar redes de proteção?",
          resposta: "Os principais benefícios incluem prevenção de acidentes, segurança para crianças e animais de estimação, manutenção da privacidade e tranquilidade para desfrutar de ambientes abertos.",
          showAnswer: false
        },
        {
          id: 6,
          pergunta: "Como escolher o tamanho correto da rede de proteção?",
          resposta: "É necessário medir as dimensões do local onde será instalada a rede e escolher uma opção que se ajuste adequadamente.",
          showAnswer: false
        },
        {
          id: 7,
          pergunta: "As redes de proteção são seguras para crianças e animais de estimação?",
          resposta: "Sim, as redes de proteção são projetadas para suportar peso e são seguras para crianças e animais de estimação.",
          showAnswer: false
        },
        {
          id: 8,
          pergunta: "É possível ver através das redes de proteção?",
          resposta: "Sim, as redes de proteção possuem tramas que permitem uma excelente visibilidade.",
          showAnswer: false
        },
        {
          id: 9,
          pergunta: "As redes de proteção têm prazo de validade?",
          resposta: "Sim, as redes de proteção possuem um período de vida útil, que varia de acordo com o material e as condições de uso. As redes REDEFORTT possuem alta durabilidade e resistência e possuem proteção contra raios UV, o que aumenta a vida útil do produto.",
          showAnswer: false
        }
      ]
    };
  },
  methods: {
    toggleAnswer() {
      console.log(this.perguntas)
    }
  }
};
</script>


<style>

main {
  width: 100%;
  min-height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.duvidas {
  width: 50%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.duvidas img{
  width: 30%;
  min-width: 200px;
  object-fit: cover;
  object-position: center;
}


.faq {
  width: 50%;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 10px 0;
}

.faq-item {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.faq-question {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #f0f0f0;
  border-radius: 5px;
}

.faq-question h3 {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  padding: 0 10px;
  text-align: center;
}

.faq-answer {
  width: 90%;
  padding: 10px 0;
  background-color: #ffffff;
  border-radius: 5px;
  transition: height 0.3s ease;
  overflow: hidden;
}

.faq-answer p {
  padding: 0px 10px;
  margin: 0;
  font-size: 14px;
  color: #555;
}

.faq-toggle {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #333;
  transition: transform 0.3s ease;
}

.faq-toggle:hover {
  transform: scale(1.1);
}

.fa-chevron-up,
.fa-chevron-down {
  transition: transform 0.3s ease;
}

.fa-chevron-up {
  transform: rotate(180deg);
}

.fa-chevron-down {
  transform: rotate(0);
}

@media (max-width: 768px) {
  main {
    flex-direction: column;
  }

  .duvidas {
    width: 100%;
    height: 300px;
  }

  .faq-question {
    padding: 0 10px;
    text-align: center;
  }

  .duvidas img {
    width: 30%;
    min-width: 200px;
    margin-bottom: 40px;
  }


  .faq {
    width: 100%;
  }
}

</style>
