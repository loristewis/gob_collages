<template>
  <div>
    <div class="despentes">
      <Container>
        <figure class="photo-collage">
          <img :src="collageSrc"
               :alt="collageAlt">
          <figcaption v-html="collageCaption"></figcaption>
        </figure>
      </Container>
    </div>
    <div class="bg-almost-black full-screen">
      <Container>
        <div class="intro">
          <p>Depuis août 2019, les slogans féministes viennent couvrir les murs des villes. Lettres noires sur feuilles
            A4, ces collages ont pour but de sensibiliser les passant·e·s aux violences sexuelles et sexistes, tout en
            permettant aux femmes de se réapproprier l’espace public.</p>
          <p>Avec le temps, le mouvement a gagné en ampleur, rassemblant de nombreux·ses militant·e·s pour défendre des
            causes de plus en plus variées.</p>
        </div>
      </Container>
    </div>
    <div class="secondary-pink full-screen">
      <Container>
        <div class="intro video-grid">
          <div>
            <p>Mais qui sont ces militant·e·s ?</p>
            <p>Nous avons rencontré <span class="underlined-text">Elisa</span>, co-fondatrice du collectif féministe et
              inclusif <span class="underlined-text">Les Grenades</span>, qui a accepté de répondre à nos questions sur
              le mouvement des collages et sur son militantisme.</p>
          </div>
          <img class="elisa" :src="elisaSrc" alt="">
        </div>
        <div class="socials">
          <a href="https://www.instagram.com/collectif.les.grenades/" target="_blank"><img :src="instaSrc" alt=""></a>
          <a href="https://twitter.com/LesGrenades_" target="_blank"><img :src="twitterSrc" alt=""></a>
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
import Container from '../components/layout/Container'

import elisaSrc from '../assets/illus/portrait.svg'
import twitterSrc from '../assets/illus/twitter.png'
import instaSrc from '../assets/illus/insta.png'
import collageSrc from '../assets/photos/despentes.png'

export default {
  name: 'Intro',
  components: {Container},
  data() {
    return {
      elisaSrc: elisaSrc,
      twitterSrc: twitterSrc,
      instaSrc: instaSrc,
      collageSrc: collageSrc,
      collageAlt: 'Le viol c’est la guerre civile, l’organisation politiqu par laquelle un sexe déclare à l’autre : « Je prends tous les droits sur toi, je te force à te sentir inférieure, coupable et dégradée. » - V. Despentes',
      collageCaption: '<a href="https://www.instagram.com/p/CDynBl6lDfu/" target="_blank">@gigi_boumboum / Les Grenades</a>'
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/mixins";

@include video-grid();

.despentes {
  > .container {
    padding-top: 0;
  }
}

.intro {
  p {
    max-width: 60ch;
    margin: 28px auto;
    line-height: 150%;

    --fluid-type-min: 1rem;
    --fluid-type-target: 1.8vw;
    --fluid-type-max: 1.8rem;

    order: 2;
  }

  .elisa {
    max-width: 220px;
    order: 1;
    margin: auto;
  }

  @include md {
    p {
      order: 1;
    }

    .elisa {
      order: 2;
    }
  }
}

.socials {
  max-width: max-content;
  margin: 32px auto auto;
  display: flex;

  a:first-child {
    margin-right: 24px;
  }

  @include md {
    margin: auto;
    position: relative;
    bottom: -20vh;
  }

  a img {
    width: 55px;
    transition: transform 300ms ease-out;

    &:hover {
      transform: scale(1.05);
    }
  }
}

</style>
