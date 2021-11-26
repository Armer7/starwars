<template>
  <div class="pagination">
    <div>
      <button :disabled="prevDisabled" @click="prevPage">Prev</button>
      <button :disabled="nextDisabled" @click="nextPage">Next</button>
    </div>
    <p>
      <span>Page {{ page }}</span>
      <span v-if="numberOfPages">/{{ numberOfPages }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['numberOfPages', 'page'],
  computed: {
    prevDisabled() {
      return this.page === 1;
    },
    nextDisabled() {
      return this.page === this.numberOfPages;
    },
  },
  methods: {
    prevPage() {
      this.$emit('changePage', this.page - 1);
    },
    nextPage() {
      this.$emit('changePage', this.page + 1);
    },
  },
};
</script>

<style lang="scss">
.pagination {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  margin-top: auto;

  div {
    display: flex;
    margin-bottom: 5px;

    button {
      width: 80px;
      height: 35px;
      margin: 0 10px;
      border-radius: 5px;
      background-color: $item;

      &[disabled] {
        opacity: 0.3;
        background-color: $item;
        cursor: initial;
      }

      &:active,
      &:hover {
        background-color: $item-opacity;
      }
    }
  }
}
</style>
