<template>
  <div class="full-screen">
    <Container>
      <div class="header">
        <h1 v-html="title"></h1>
        <p v-html="subtitle"></p>
        <div class="grenade">
          <img :src="grenadeSrc">
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Quote from '../components/lib/Quote'
import Container from '../components/layout/Container'
const grenadeSrc = () => import('../assets/illus/grenade.svg')

export default {
  name: 'Header',
  components: {Container, Quote},
  data: function () {
    return {
      title: 'Militer pour inspirer',
      subtitle: 'Rencontre avec une colleuse',
      grenadeSrc: grenadeSrc
    }
  },
}
</script>

<style scoped lang="scss">
@import "../styles/mixins";

.header {
  height: 100%;
  width: 100%;

  @include sm {
    padding-bottom: 64px;
    border-bottom: 4px solid black;
  }
}

h1 {
  position: relative;
  z-index: 10;

  .quote {
    margin: 16px 48px 64px;

    @include md {
      margin: 64px 48px 96px;
    }
  }
}

p {
  position: relative;
  z-index: 10;
  text-transform: uppercase;
  font-weight: 600;

  --fluid-type-target: 2.5vw;
  --fluid-type-max: 2.6rem;
}

.grenade {
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: flex-end;

  > img {
    max-height: 45vh;

    @include md {
      margin-top: -144px;
    }
  }
}

</style>
