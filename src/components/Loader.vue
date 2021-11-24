<template>
  <div :class="[isSmall ? 'small' : 'large']">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: ['isSmall'],
};
</script>

<style lang="scss">
.large {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .loader {
    border: 5px solid;
  }
}

.small {
  width: 16px;
  height: 16px;
  margin: 5px;
  .loader {
    border: 2px solid;
  }
}
.large,
.small {
  .loader {
    border-top-color: white;
    border-right-color: black;
    border-bottom-color: white;
    border-left-color: black;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    animation: spin 1s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
