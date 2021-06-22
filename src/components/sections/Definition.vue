<template>
  <div class="definition__container default-box">
    <h4 class="definition__title">{{ definition.title }}</h4>
    <p class="definition__content">{{ definition.content }}</p>
    <small class="definition__source" v-if="definition.source">Source : <span v-html="definition.source"></span></small>
  </div>
</template>

<script>
import definitions from '../../data/definitions.json'

export default {
  name: 'Quote',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    definition() {
      return definitions.find(el => el.title === this.title);
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../../styles/variables";
@import "./../../styles/mixins";

.definition {
  &__container {
    margin-top: 80px;
    padding: 32px 24px 24px;

    @include sm {
      padding: 48px 40px;
    }
  }

  &__title {
    position: absolute;
    transform: translate(-40px, -100%);
    padding: 4px 16px 0;
    background-color: var(--yellow);
    text-transform: uppercase;

    //--fluid-type-min: 1.5rem;
    --fluid-type-target: 2.5vw;
    --fluid-type-max: 2rem;

    @include sm {
      transform: translate(-64px, -130%);
    }
  }

  &__source {
    margin-top: 0;
    color: #6B6B6B;
  }
}
</style>
