<template>
  <span class="framed-text">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'FramedText'
}
</script>

<style scoped lang="scss">
.framed-text {
  background-color: black;
  color: white;
  padding: 0.5rem 0.5rem 0;
  box-decoration-break: clone;
  font-family: var(--font-title);
}
</style>
