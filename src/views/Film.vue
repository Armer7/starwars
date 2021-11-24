<template>
  <main>
    <Loader v-if="isLoading" />
    <ErrorMessage v-else-if="isError" :err="error"> </ErrorMessage>
    <article v-else>
      <section class="heading">{{ film.title }}</section>
      <SectionItem title="Release date" :data="film.release_date" />
      <SectionItem title="Episode" :data="film.episode_id" />
      <SectionItem title="Producer" :data="film.producer" />
      <SectionItem title="Director" :data="film.director" />
      <SectionItem title="Opening crawl" :data="film.opening_crawl" />
      <PeopleLinks :peopleUrls="film.characters" title="People" />
      <PlanetsLinks :planetsUrls="film.planets" />
      <StarshipsLinks :starshipsUrls="film.starships" />
    </article>
    <div></div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SectionItem from '@/components/SectionItem.vue';
import PeopleLinks from '@/components/PeopleLinks.vue';
import PlanetsLinks from '@/components/PlanetsLinks.vue';
import StarshipsLinks from '@/components/StarshipsLinks.vue';
import Loader from '@/components/Loader.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

export default {
  name: 'Vehicle',
  props: ['id'],
  components: {
    SectionItem,
    PeopleLinks,
    PlanetsLinks,
    StarshipsLinks,
    Loader,
    ErrorMessage,
  },
  created() {
    this.requestFilm(this.id);
  },
  computed: {
    ...mapGetters({
      film: 'film/getFilm',
      isLoading: 'film/getIsLoading',
      isError: 'film/getIsError',
      error: 'film/getError',
    }),
  },
  methods: {
    ...mapActions({ requestFilm: 'film/requestFilm' }),
  },
  watch: {
    '$route.params.id': function () {
      this.requestFilm(this.id);
    },
  },
};
</script>
