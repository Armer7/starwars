<template>
  <label class="search">
    <input type="text" v-model="search" placeholder="Search" @input="onInput" />
    <img src="../assets/search.png" alt="search" />
  </label>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Search',
  data() {
    return {
      timeout: null,
      search: '',
    };
  },
  watch: {
    '$route.path': function () {
      if (this.$route.path !== '/') {
        this.changeSearch('');
        this.search = '';
      }
    },
  },
  methods: {
    ...mapActions({ changeSearch: 'search/changeSearch' }),

    onInput() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.$emit('search', this.search);
      }, 500);
    },
  },
};
</script>

<style lang="scss">
.search {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  padding: 6px 10px;
  border-radius: 6px;
  margin-bottom: 20px;
  border-color: $text;
  background-color: $item;

  input {
    flex: 1;
    font-size: 16px;
    color: $text;

    &::placeholder {
      color: $link;
      opacity: 1;
    }
  }

  img {
    width: 16px;
    height: 16px;
    margin: auto 0 auto 6px;
  }
}
</style>
