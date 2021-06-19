<template>
  <div class="bg-almost-black full-screen">
    <Container>
      <div class="intro">
        <p>
          
          Depuis août 2019, les slogans féministes viennent couvrir les murs des villes. Lettres noires sur feuilles A4,
          ces collages ont pour but de sensibiliser les passant·e·s aux violences sexuelles et sexistes, tout en permettant
          aux femmes de se réapproprier l’espace public.
        </p>
        <p>
          Avec le temps, le mouvement a gagné en ampleur, rassemblant de nombreux·ses militant·e·s pour défendre des
          causes de plus en plus variées.
        </p>
        <p>
          Mais qui sont ces militant·e·s ? Nous avons rencontré Elisa, co-fondatrice du collectif féministe et inclusif
          Les Grenades, qui a accepté de répondre à nos questions sur son militantisme et le mouvement des collages.
        </p>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '../components/layout/Container';

export default {
  name: 'Intro',
  components: {Container}
}
</script>

<style scoped lang="scss">
.intro {
  p {
    max-width: 60ch;
    margin: 28px auto;
    line-height: 150%;

    --fluid-type-min: 1rem;
    --fluid-type-target: 1.8vw;
    --fluid-type-max: 1.8rem;
  }
}
</style>
