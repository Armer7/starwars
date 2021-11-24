<template>
  <section v-if="starshipsUrls.length">
    <p class="title">Starships:</p>
    <div class="links">
      <a v-for="url in starshipsUrls" :key="url">
        {{ url }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StarshipsLinks',
  props: ['starshipsUrls'],
};
</script>
