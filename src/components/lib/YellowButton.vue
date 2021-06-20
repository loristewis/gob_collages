<template>
  <a class="default-box bg-yellow" :href="href" target="_blank">
    {{ title }}
  </a>
</template>

<script>
export default {
  name: 'YellowButton',
  props: {
    title: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
a {
  display: block;
  padding: 16px 24px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  font-size: 1.667rem;
  color: var(--black);
}
</style>
