<template>
  <div @click="InitClickCard()" :class="['card isAnimation']">
    <figure class="card-front"></figure>
    <figure class="card-back">
      <div :class="['card-back_content', this.classImage]"></div>
    </figure>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    classImage: String, // Colocar la clase de la imagen para la carta
  },
  data() {
    return {
      allPointsWinner: this.$store.state.numberTypeCard, // Los puntos necesarios para completar Memory Card
    }
  },
  computed: {
    ...mapState(['countClickCard', 'previousTarget', 'firstNameCard', 'secondNameCard', 'showModePlay', 'moventClickCard',
                      'namePlayerCard', 'numberTypeCard', 'pointsWinner'])
  },
    methods: {
    ...mapMutations(['MoreCountClick', 'MoventCard', 'PointsDoubleCard', 'MorePointsWinner']),
    InitClickCard() {
      const _this = this.$el; // this del elemento a dar click
      const varState = this.$store.state; // Variable para poner modificar el State en los compenentes

      if (this.countClickCard >= 2) return;

      this.MoreCountClick('++');

      if (_this === this.previousTarget) this.MoreCountClick('--');
      else {
        this.ValueCountClick();
        _this.classList.add('flipped');
      }

      varState.previousTarget = _this;
    },

    ValueCountClick() {
      const _this = this.$el; // this del elemento a dar click
      const varState = this.$store.state; // Variable para poner modificar el State en los compenentes

      if(this.countClickCard === 1) {
        this.ValidateModeSingle();

        varState.firstNameCard = _this;
      } else if (this.countClickCard === 2) {
        this.ValidateModeSingle();

        varState.secondNameCard = _this;
        
        this.ValueSimilarCard(this.firstNameCard, this.secondNameCard);
      }
    },
    ValueSimilarCard(first, second) {
      const varState = this.$store.state; // Variable para poner modificar el State en los compenentes

      if (first.dataset.card === second.dataset.card) {
        setTimeout(() => {
          this.PointsModeDouble();

          // Metodo de Validación para Verificar si ermino el juego
          this.ValidateWinner()

          first.classList.add('isDesactive');
          second.classList.add('isDesactive');

          this.MoreCountClick('0');

        }, 1000);
      } else {
        setTimeout(() => {
          this.NotPointsModeDouble(); 

          varState.previousTarget = null;

          first.classList.remove('flipped');
          second.classList.remove('flipped');

          this.MoreCountClick('0');
        }, 1000);
      }
      
    },
    ValidateModeSingle() {
      if (this.showModePlay === 'Single') this.MoventCard();
    },
    PointsModeDouble() {
      (this.namePlayerCard === 'One Player') ? this.PointsDoubleCard('One Player') : this.PointsDoubleCard('Two Player');
    },
    NotPointsModeDouble() {
      const varState = this.$store.state; // Variable para poner modificar el State en los compenentes

      (this.namePlayerCard === 'One Player') ? varState.namePlayerCard = 'Two Player' : varState.namePlayerCard = 'One Player';
    },
    ValidateWinner() {
      this.MorePointsWinner();

      if (this.pointsWinner === this.allPointsWinner) {
        alert('Juego Completado')
      }
    }
  }
}
</script>
