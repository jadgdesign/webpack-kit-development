<template>
  <div class="memoryCard-container">
    <!-- Muestra la vista en movimiento ó punto para los jugadores --> 
    <ViewModeCard />

    <!-- Contenedores de las cartas -->
    <CardNumberEight v-if="numberTypeCard === 4 && activateCardNumber" />
    <CardNumberTwelve v-else-if="numberTypeCard === 6 && activateCardNumber" />

    <!-- Muestras los modos del juego -->
    <ModePlayCard />

    <!-- Muestras las cantidades de cartas del juego -->
    <TypeCardNumber />

    <!-- Contenedor de los Botones Ayuda y Reset -->
    <MoreButtonCard />
    </div>
</template>

<script>
import { mapState } from 'vuex';

import ViewModeCard from './viewModeCard.vue';
import CardNumberEight from './cardNumberEight.vue'
import CardNumberTwelve from './cardNumberTwelve.vue'
import ModePlayCard from './modePlayCard.vue'
import TypeCardNumber from './typeCardNumber.vue'
import MoreButtonCard from './moreButtonCard.vue'

export default {
  components: {
    ViewModeCard,
    CardNumberEight,
    CardNumberTwelve,
    ModePlayCard,
    TypeCardNumber,
    MoreButtonCard
  },
  computed: {
    ...mapState(['numberTypeCard', 'activateCardNumber'])
  }
}
</script>
