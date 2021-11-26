<template>
  <div>
    <PeopleList v-if="isSearch" />
    <PlanetsList v-if="isSearch" />
    <StarshipsList v-if="isSearch" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PeopleList from '@/components/PeopleList';
import PlanetsList from '@/components/PlanetsList';
import StarshipsList from '@/components/StarshipsList';

export default {
  name: 'Home',
  components: { PeopleList, PlanetsList, StarshipsList },
  computed: {
    ...mapGetters({
      isSearch: 'search/getIsSearch',
    }),
  },
};
</script>

<style scoped lang="scss"></style>
