<template>
  <div class="memoryCard-content isCardTwelve">
    <Card-Element class-image="card-back_image-1" data-card="One" />
    <Card-Element class-image="card-back_image-2" data-card="Two" />
    <Card-Element class-image="card-back_image-3" data-card="Three" />
    <Card-Element class-image="card-back_image-4" data-card="Four" />
    <Card-Element class-image="card-back_image-5" data-card="Five" />
    <Card-Element class-image="card-back_image-6" data-card="Six" />

    <Card-Element class-image="card-back_image-1" data-card="One" />
    <Card-Element class-image="card-back_image-2" data-card="Two" />
    <Card-Element class-image="card-back_image-3" data-card="Three" />
    <Card-Element class-image="card-back_image-4" data-card="Four" />
    <Card-Element class-image="card-back_image-5" data-card="Five" />
    <Card-Element class-image="card-back_image-6" data-card="Six" />
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
