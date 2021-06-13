<template>
  <span class="underlined-text" :style="style">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'UnderlinedText',
  props: {
    color: {
      type: String,
      default: "rgba(252, 134, 212, 0.4)"
    }
  },
  computed: {
    style() {
      return `background-image: linear-gradient(120deg, ${this.color}, ${this.color})`
    }
  }
}
</script>

<style scoped lang="scss">
/*.underlined-text {
  padding: 0 0 0 0.5rem;
  margin: 0 0 0 -0.5rem;
  box-decoration-break: clone;

  background-size: calc(100% - 0.4rem) 40%;
  background-position: 10% 88%;

  background-repeat: no-repeat;
  //transition: background-size 0.25s ease-in, padding 0.3s ease-in, margin 0.3s ease-in;
  transition: background-size 0.4s ease-in, padding 0.6s ease-in, margin 0.6s ease-in;

  !*&:hover {
    padding: 0 0.2rem;
    margin: 0 -0.2rem;

    background-size: 100% 88%;
  }*!

  @at-root {
    *:hover > .underlined-text {
      padding: 0 0.2rem;
      margin: 0 -0.2rem;

      background-size: 100% 88%;
    }
  }
}*/
</style>
