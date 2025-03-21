import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AllQuotes from './components/AllQuotes.vue';
import RandomQuote from './components/RandomQuote.vue';
import QuoteById from './components/QuoteById.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/quotes', component: AllQuotes },
  { path: '/random', component: RandomQuote },
  { path: '/quote/:id', component: QuoteById }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
