<template>
  <div class="typeCard-container">
    <div @click="resetGameCard(), $store.state.numberTypeCard = 4" :class="['typeCard-button_8', { isActive : numberTypeCard === 4}]"></div>
    <div @click="resetGameCard(), $store.state.numberTypeCard = 6" :class="['typeCard-button_12', { isActive : numberTypeCard === 6}]"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mxResetGameCard } from '../../js/mixins';

export default {
  mixins: [mxResetGameCard],
  computed: {
    ...mapState(['numberTypeCard'])
  }
}
</script>
