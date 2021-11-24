<template>
  <div class="errorMessage">
    {{ err }}
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: ['err'],
};
</script>

<style lang="scss">
.errorMessage {
  color: #f00;
  font-size: 16px;
}
</style>
