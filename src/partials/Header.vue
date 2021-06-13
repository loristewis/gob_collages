<template>
  <div class="bg-almost-white full-screen">
    <div class="header-container">
      <div class="header">
        <h1>
          <Quote>{{ title }}</Quote>
        </h1>
        <p v-html="subtitle"></p>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from '../components/lib/Quote';
import Container from '../components/layout/Container';

export default {
  name: 'Header',
  components: {Container, Quote},
  data: function () {
    return {
      title: 'Le but, c’est vraiment de cibler des endroits symboliques, et de les tapisser',
      subtitle: 'Entretien avec Eliza, du collectif des <strong>Grenades</strong>'
    }
  },
}
</script>

<style scoped lang="scss">
@import "../styles/mixins";

.header-container {
  width: 100%;
  margin: auto;

  @include sm {
    width: 90%;
  }
}

.header {
  height: 100%;
  width: 100%;
  //margin-bottom: 64px;

  @include sm {
    padding-bottom: 64px;
    border-bottom: 4px solid black;
  }
}

h1 {
  text-transform: lowercase;
  max-width: 18ch;
  margin: auto;

  .quote {
    margin: 16px 48px 64px;

    @include md {
      margin: 64px 48px 96px;
    }
  }
}

p {
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  //font-size: 2rem;
  margin: auto 5%;

  @include sm {
    margin: auto;
  }

  --fluid-type-target: 2.5vw;
  --fluid-type-max: 2.6rem;
}

</style>
