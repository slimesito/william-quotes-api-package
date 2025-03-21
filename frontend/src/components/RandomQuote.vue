<script setup>
import { ref, onMounted } from 'vue';

const quote = ref(null);

async function fetchQuote() {
    const response = await fetch('https://dummyjson.com/quotes/random');
    quote.value = await response.json();
}

onMounted(fetchQuote);
</script>

<template>
  <div>
    <h2>Cita Aleatoria</h2>
    <p v-if="quote">"{{ quote.quote }}" - {{ quote.author }}</p>
    <div>
      <button @click="fetchQuote">Obtener otra</button>
    </div>
  </div>
</template>

<style scoped>
div {
  padding-top: 10px;
}
button {
  padding: 5px 10px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
  border-width: 2px;
  border-color: transparent;
  color: hsla(160, 100%, 37%, 1);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
button:hover {
  border-color: hsla(160, 100%, 37%, 1);
}
</style>