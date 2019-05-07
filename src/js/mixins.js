import { mapState, mapMutations } from 'vuex'

export const mxCreateBoard = {
  mounted() {
    this.ShuffleCards();
  },
  computed: {
    ...mapState(['numberTypeCard'])
  },
  methods: {
    ShuffleCards() {
      const nbTypeCard = this.numberTypeCard * 2;
      const arrCard = Array.from(Array(nbTypeCard), (_, x) => x + 1);
      const cards = document.querySelectorAll('.memoryCard-content .card');

      // Crear una ramdon de un array
      function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }

      const ramdonArrCard = shuffle(arrCard);

      cards.forEach((card, index) => {
        card.style.order = ramdonArrCard[index];
        card.classList.add('isDelay-' + ramdonArrCard[index]);
      });

    }
  }
};

export const mxResetGameCard = {
  methods: {
    ...mapMutations(['ResetValueStore']),
    resetGameCard() {
      const varState = this.$store.state;
      // Reseat de Valores del Memory Card
      this.ResetValueStore();

      varState.activateCardNumber = false;

      setTimeout(() => {
        varState.activateCardNumber = true;
      }, 0);

    }
  }
};