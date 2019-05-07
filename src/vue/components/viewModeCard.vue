<template>
  <div class="viewMode-container">
    <!-- Contenedor que muestra los moviemientos -->
    <div v-if="showModePlay === 'Single'" class="viewMode-content">
      <div class="viewMode-boxData">
        <div class="viewMode-boxData_count-1">{{ moventClickCard }}</div>
        <div class="viewMode-boxData_name">Movimientos</div>
      </div>
    </div>

    <!-- Contenedor que muestra los puntajes de los jugadores -->
    <div v-else-if="showModePlay === 'Double'" class="viewMode-content">
      <div class="viewMode-boxData">
        <div :class="['viewMode-boxData_count-1', { isActive : namePlayerCard === 'One Player'}]">{{ pointsOnePlayerCard }}</div>
        <div class="viewMode-boxData_name">Jugador 1</div>
      </div>
      <div class="viewMode-boxData">
        <div :class="['viewMode-boxData_count-2', { isActive : namePlayerCard === 'Two Player'}]">{{ pointsTwoPlayerCard }}</div>
        <div class="viewMode-boxData_name">Jugador 2</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['showModePlay', 'moventClickCard', 'namePlayerCard', 'pointsOnePlayerCard', 'pointsTwoPlayerCard'])
  }
}
</script>

