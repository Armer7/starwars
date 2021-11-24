<template>
  <section v-if="peopleUrls.length">
    <p class="title">{{ title }}:</p>
    <div class="links">
      <a v-for="url in peopleUrls" :key="url">
        {{ url }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PeopleLinks',
  props: ['peopleUrls', 'title'],
};
</script>
