<template>
  <div class="container">
    <p class="title">Planets:</p>
    <div>
      <Loader v-if="isLoading" />
      <ErrorMessage v-if="isError" :err="error"></ErrorMessage>
      <p
        v-if="!isLoading && !isError && !planets[page].length"
        class="noResults"
      >
        No results
      </p>
      <div v-if="!isLoading" class="ItemList">
        <LinkItem
          v-for="planet in planets[page]"
          :key="planet.id"
          routeName="planets"
          :id="planet.id"
          :title="planet.name"
          :subtitle="planet.terrain"
        />
      </div>
    </div>
    <Pagination
      v-if="!isLoading"
      :page="page"
      :numberOfPages="planets.numberOfPages"
      @changePage="changePage"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import LinkItem from './LinkItem';
import Pagination from './Pagination';

export default {
  name: 'FilmsList',
  components: { LinkItem, Loader, ErrorMessage, Pagination },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    ...mapGetters({
      planets: 'planets/getPlanets',
      isLoading: 'planets/getIsLoading',
      isError: 'planets/getIsError',
      error: 'planets/getError',
    }),
  },
  methods: {
    ...mapActions({ requestPlanets: 'planets/requestPlanets' }),
    changePage(value) {
      this.page = value;
    },
  },
  watch: {
    page: function () {
      this.requestPlanets(this.page);
    },
  },
};
</script>
<style scoped lang="scss">
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  padding: 5px;
  margin: 5px;
  margin-bottom: 15px;
  height: max-content;
}
.ItemList {
  display: flex;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  height: max-content;
}
.noResults {
  padding-left: 5px;
  font-size: 20px;
}
</style>
