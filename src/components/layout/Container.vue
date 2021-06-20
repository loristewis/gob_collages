<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style scoped lang="scss">
@import "src/styles/mixins";

.container {
  width: 90%;
  margin: auto;
  max-width: 980px;
  padding: 48px 0;

  > h2 {
    text-align: center;
    margin-bottom: 32px;
  }

  @include md {
    padding: 96px 0;

    > h2 {
      margin-bottom: 72px;
    }
  }
}

.collages-container {
  max-width: 1200px;
}
</style>
