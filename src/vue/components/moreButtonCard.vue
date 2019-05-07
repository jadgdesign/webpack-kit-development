<template>
  <div class="moreButton-container">
    <div class="moreButton-help"></div>
    <div @click="resetGameCard()" class="moreButton-reset"></div>
  </div>
</template>

<script>
import { mxResetGameCard } from '../../js/mixins';

export default {
  mixins: [mxResetGameCard]
}
</script>
