<template>
  <blockquote class="quote">
    <slot></slot>
  </blockquote>
</template>

<script>
export default {
  name: 'Quote',
}
</script>

<style scoped lang="scss">
.quote {
  margin: 0 auto;
  quotes: "“" "„";
  max-width: 40ch;

  &::before {
    content: open-quote;
    position: absolute;
    transform: translate(-130%);
  }

  &::after {
    content: close-quote;
    position: absolute;
    transform: translate(30%);
  }
}
</style>
