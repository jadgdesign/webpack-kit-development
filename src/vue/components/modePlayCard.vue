<template>
  <div class="modePlay-container">
    <div @click="resetGameCard(), $store.state.showModePlay = 'Single'" :class="['modePlay-button_single', { isActive :  showModePlay === 'Single' }]"></div>
    <div @click="resetGameCard(), $store.state.showModePlay = 'Double'" :class="['modePlay-button_double', { isActive :  showModePlay === 'Double' }]"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mxResetGameCard } from '../../js/mixins';

export default {
  mixins: [mxResetGameCard],
  computed: {
    ...mapState(['showModePlay'])
  },
}
</script>
