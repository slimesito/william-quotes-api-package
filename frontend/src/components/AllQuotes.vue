<script setup>
import { ref, onMounted } from 'vue';

const quotes = ref([]);

onMounted(async () => {
    const response = await fetch('https://dummyjson.com/quotes');
    const data = await response.json();
    quotes.value = data.quotes;
});
</script>

<template>
  <div>
    <h2>Todas las Citas</h2>
    <ul>
      <li v-for="quote in quotes" :key="quote.id">
        "{{ quote.quote }}" - {{ quote.author }}
      </li>
    </ul>
  </div>
</template>