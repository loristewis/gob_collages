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
  transition: all 300ms ease-out;

  &:hover {
    background-color: #F7F457;
    box-shadow: 0 5px 27px rgba(186, 184, 56, 0.45);
    transform: scale(1.01);
  }

  &:active {
    background-color: #D7D43A;
    box-shadow: 0 5px 27px rgba(186, 184, 56, 0.45);
    transform: scale(1.05);
  }
}
</style>
