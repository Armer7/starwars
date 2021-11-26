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
import { mapGetters, mapActions } from 'vuex';
import FilmsList from '@/components/FilmsList.vue';
import Search from './components/Search';

export default {
  name: 'App',
  components: {
    Search,
    FilmsList,
  },
  watch: {
    isSearch: function () {
      this.isSearch && this.$route.path !== '/' && this.$router.push('/');
    },
  },
  computed: {
    ...mapGetters({
      search: 'search/getSearch',
      isSearch: 'search/getIsSearch',
    }),
  },
  methods: {
    ...mapActions({ changeSearch: 'search/changeSearch' }),
    onSearch(value) {
      this.changeSearch(value);
    },
  },
};
</script>

<style lang="scss">
@import './css/_normalize.scss';
@import './css/_style.scss';
@import './css/_main.scss';
</style>
