<template>
  <section v-if="planetsUrls.length">
    <p class="title">Planets:</p>
    <div class="links">
      <a v-for="url in planetsUrls" :key="url">
        {{ url }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PlanetsLinks',
  props: ['planetsUrls'],
};
</script>
