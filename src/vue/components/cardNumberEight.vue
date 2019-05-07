<template>
  <div class="memoryCard-content isCardEight">
    <Card-Element class-image="card-back_image-1" data-card="One" />
    <Card-Element class-image="card-back_image-2" data-card="Two" />
    <Card-Element class-image="card-back_image-3" data-card="Three" />
    <Card-Element class-image="card-back_image-4" data-card="Four" />

    <Card-Element class-image="card-back_image-1" data-card="One" />
    <Card-Element class-image="card-back_image-2" data-card="Two" />
    <Card-Element class-image="card-back_image-3" data-card="Three" />
    <Card-Element class-image="card-back_image-4" data-card="Four" />
  </div>
</template>

<script>
import CardElement from './cardElement.vue';
import { mxCreateBoard } from '../../js/mixins';

export default {
  mixins: [mxCreateBoard],
  components: {
    CardElement
  }
}
</script>
