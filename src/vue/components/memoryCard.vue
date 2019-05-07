<template>
  <div class="memoryCard-container">
    <h1>{{ msg }}</h1>
    <!-- Muestra la vista en movimiento ó punto para los jugadores --> 
    <!-- <ViewModeCard /> -->
    {{ numberTypeCard }}
    <!-- Contenedores de las cartas -->
    <!-- <CardNumber-Eight v-if="numberTypeCard === 4 && activateCardNumber" /> -->
    <!-- <CardNumber-Twelve v-else-if="numberTypeCard === 6 && activateCardNumber" /> -->

    <!-- Muestras los modos del juego -->
    <!-- <ModePlayCard /> -->

    <!-- Muestras las cantidades de cartas del juego -->
    <!-- <TypeCardNumber /> -->

    <!-- Contenedor de los Botones Ayuda y Reset -->
    <!-- <MoreButtonCard /> -->
    </div>
</template>

<script>
import Vuex from 'vuex'
import store from '../../js/tools/store'

// import ViewModeCard from './viewModeCard.vue'

export default {
  store,
  components: {
    // ViewModeCard
  },
  data () {
    return {
      msg: 'Hello world!'
    }
  },
  computed: {
    ...Vuex.mapState(['numberTypeCard', 'activateCardNumber'])
  }
}
</script>
