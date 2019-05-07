<template>
  <div class="container">
      <div class="intro-container">
        <!-- Contenedor de todas las cartas -->
        <memory-card />
      </div>
    </div>
</template>

<script>
import MemoryCard from './components/memoryCard.vue'

export default {
  components: {
    MemoryCard
  }
}
</script>
