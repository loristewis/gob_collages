<template>
  <div class="bg-image" :style="bg_ligne">
    <Container class="collages-container">
      <div class="collages-grid" :class="display">
        <figure class="photo-collage" v-for="item in photos" :key="item.src">
          <img :src="item.src"
               :alt="item.alt">
          <figcaption v-if="item.caption" v-html="item.caption"></figcaption>
        </figure>
        <slot></slot>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from './layout/Container';
import ligne1 from '../assets/illus/ligne-1.svg';
import ligne2 from '../assets/illus/ligne-2.svg';
import ligne3 from '../assets/illus/ligne-3.svg';
import ligne4 from '../assets/illus/ligne-4.svg';

export default {
  name: 'PhotosCollages',
  components: {Container},
  props: {
    display: {
      type: String,
      required: true
    },
    ligne: {
      type: String,
      required: true
    },
    photos: {
      type: Array,
      required: true
    }
  },
  computed: {
    bg_ligne() {
      let ligneSrc;

      if (this.ligne === '1') ligneSrc = ligne1
      if (this.ligne === '2') ligneSrc = ligne2
      if (this.ligne === '3') ligneSrc = ligne3
      if (this.ligne === '4') ligneSrc = ligne4

      return `background-image: url(${ligneSrc});`
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/mixins";

.collages-container {
  .collages-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 48px;
  }

  @include md {
    .A {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .B,
    .C {
      grid-template-columns: 1fr 1fr;
    }

    .B {
      figure:first-child {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }

    .D {
      grid-template-columns: 2fr 1fr;
    }

    .E {
      grid-template-columns: 1fr 2fr;
    }
  }
}
</style>
