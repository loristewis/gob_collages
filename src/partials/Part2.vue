<template>
  <div class="part2-container">
    <div class="bg-pale-pink secondary-yellow">
      <Container>
        <h2>{{ title }}</h2>
        <div class="video-grid">
          <Quote class="video-quote" :subtitles-src="subtitlesSrc" v-html="quote"></Quote>
          <Video video-src="https://bddi2022.gobelins-pedago.fr/collages/videos/2_elisa.mp4" color="pink"/>
        </div>
        <div class="stats-grid">
          <div class="default-box" v-for="item in statistics" :key="item.title">
            <p class="stats__title" v-html="item.title"></p>
            <p class="stats__source"><small>Source : <span v-html="item.source"/></small></p>
          </div>
          <div class="illu-svg"><img :src="femSymboleSrc"></div>
        </div>
      </Container>
    </div>
    <Mountain class="bg-pale-pink"/>
    <div class="bg-image" :style="bg_ligne">
      <Container class="collages-container">
        <div class="collages-grid">
          <figure class="photo-collage" v-for="item in collages" :key="item.src">
            <img :src="item.src"
                 :alt="item.alt">
            <figcaption v-if="item.caption" v-html="item.caption"></figcaption>
          </figure>
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
import Container from '../components/layout/Container'
import Video from '../components/Video'
import Definition from '../components/sections/Definition'
import Quote from '../components/lib/Quote'
import UnderlinedText from '../components/lib/UnderlinedText'
import Mountain from '../components/sections/Mountain'

import subtitles2 from '../assets/videos/2_elisa.vtt'

import femSymboleSrc from '../assets/illus/fem-symbole.svg'

import collage4 from '../assets/photos/collage4.jpg'
import collage5 from '../assets/photos/collage5.jpg'
import collage6 from '../assets/photos/collage6.jpg'
import ligne from '../assets/illus/ligne-2.svg'
import PhotosCollages from '../components/PhotosCollages'

export default {
  name: 'Part2',
  components: {Container, Video, Definition, Quote, UnderlinedText, Mountain, PhotosCollages},
  data() {
    return {
      title: 'Elisa et les collages',
      quote: 'Je voulais aider d’autres victimes de violences sexuelles et sexistes à <span class="underlined-text">s’identifier</span> et leur dire qu’elles ne sont pas seules',
      subtitlesSrc: subtitles2,
      statistics: [
        {
          title: 'En France,<br/><span class="stats__bigger">32% des femmes</span class="stats__bigger"><br/>ont déjà subi du harcèlement sexuel au travail.',
          source: '<a href="https://www.ifop.com/publication/les-francaises-face-au-harcelement-sexuel-au-travail-entre-meconnaissance-et-resignation/" target="_blank">enquête Ifop</a>, 2018'
        },
        {
          title: '<span class="stats__bigger">93 000 femmes</span class="stats__bigger"><br/>déclarent avoir été victimes de viol ou de tentative de viol chaque année en France.',
          source: '<a href="https://www.interieur.gouv.fr/Actualites/Infos-pratiques/Signalement-des-violences-sexuelles-et-sexistes/Violences-sexuelles-et-sexistes-les-chiffres-cles" target="_blank>ministère de l’Intérieur</a>'
        },
        {
          title: 'En 2019, dans le monde,<br/><span class="stats__bigger">1 femme sur 5</span class="stats__bigger"><br/>ayant entre 20 et 24 ans s’était mariée avant l’âge de 18 ans.',
          source: 'Nations unies, département des Affaires économiques et sociales, <a href="https://unstats.un.org/sdgs/report/2020/goal-05/" target="_blank">division des Statistiques</a>, 2020'
        }
      ],
      femSymboleSrc: femSymboleSrc,
      bg_ligne: `background-image: url(${ligne});`,
      collages: [
        {
          src: collage4,
          alt: ''
        },
        {
          src: collage5,
          alt: ''
        },
        {
          src: collage6,
          alt: ''
        }
      ]
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/styles/mixins";

.illu-svg {
  display: flex;
  justify-content: center;
  margin-top: -120px;

  > img {
    max-height: 224px;
  }
}

@include video-grid(3fr 5fr, 3fr 7fr);

@include collages-grid(1fr 1fr);

@include md {
  .collages-grid {
    figure:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
}
</style>

<style lang="scss">
@import "src/styles/mixins";

.part2-container {
  .stats-grid {
    margin-top: 80px;

    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 48px;
    grid-row-gap: 48px;

    @include md {
      grid-template-columns:  1fr 1fr;
    }

    > div {
      padding: 24px;

      .stats {
        &__title {
          --fluid-type-max: 1.7rem;
        }

        &__bigger {
          --fluid-type-min: 2.3rem;
          --fluid-type-max: 3.7rem;
          font-weight: 500;
          line-height: 1.2;
        }

        &__source {
        }
      }
    }
  }
}
</style>
