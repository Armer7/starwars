<template>
  <div class="filmList">
    <Loader v-if="isLoading" />
    <ErrorMessage v-if="isError" :err="error"> </ErrorMessage>
    <p v-if="!films.length && !isError && !isLoading" class="noResults">
      No results
    </p>
    <LinkItem
      v-for="film in films"
      :key="film.id"
      routeName="film"
      :id="film.id"
      :title="film.title"
      :subtitle="film.release_date"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import LinkItem from './LinkItem';

export default {
  name: 'FilmsList',
  components: { LinkItem, Loader, ErrorMessage },
  created() {
    this.requestFilms();
  },
  computed: {
    ...mapGetters({
      films: 'films/getFilms',
      isLoading: 'films/getIsLoading',
      isError: 'films/getIsError',
      error: 'films/getError',
    }),
  },
  methods: {
    ...mapActions({ requestFilms: 'films/requestFilms' }),
  },
};
</script>
<style scoped lang="scss">
.filmList {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  height: max-content;
}
.noResults {
  padding-left: 5px;
  font-size: 20px;
}
</style>
