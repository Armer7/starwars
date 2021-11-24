<template>
  <div id="app">
    <FilmsList />
    <main class="main">
      <Search @search="onSearch" />
      <router-view />
    </main>
  </div>
</template>

<script>
import FilmsList from '@/components/FilmsList.vue';
import Search from './components/Search';

export default {
  name: 'App',
  components: {
    Search,
    FilmsList,
  },
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss">
@import './css/_normalize.scss';
@import './css/_style.scss';
@import './css/_main.scss';
</style>
