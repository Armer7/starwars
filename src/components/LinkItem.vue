<template>
  <router-link :to="route" class="item">
    <p class="title">{{ title }}</p>
    <p class="subtitle">{{ subtitle }}</p>
  </router-link>
</template>

<script>
export default {
  name: 'LinkItem',
  props: ['routeName', 'title', 'subtitle', 'id'],
  computed: {
    route() {
      return `/${this.routeName}/${this.id}`;
    },
  },
};
</script>

<style lang="scss">
.item {
  padding: 5px 5px;
  border-radius: 6px;
  margin: 5px;
  background-color: gray;
  font-weight: bold;

  .title {
    padding-bottom: 2px;
    font-size: 16px;
    color: white;
  }

  .subtitle {
    padding-left: 4px;
    font-size: 14px;
  }

  &:hover {
    background-color: darkgray;
  }
}
</style>
