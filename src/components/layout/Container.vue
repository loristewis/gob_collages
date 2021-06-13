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
  max-width: 1440px;
  padding: 64px 0;

  > h2 {
    text-align: center;
    margin-bottom: 64px;
  }

  @include lg {
    //padding: 96px 0;

    > h2 {
      //margin-bottom: 96px;
    }
  }
}
</style>
