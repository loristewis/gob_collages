<template>
  <div>
    <div class="bg-pale-blue secondary-yellow">
      <Container>
        <h2>{{ title }}</h2>
        <div class="video-grid">
          <Video video-src="https://bddi2022.gobelins-pedago.fr/collages/videos/3_collectif.mp4" :subtitles-src="subtitlesSrc" color="blue"/>
          <Quote class="video-quote" v-html="quote"></Quote>
          <div class="more__container">
            <p class="more__title">En savoir plus sur :</p>
            <div class="more__grid">
              <YellowButton
                  class="more__item"
                  v-for="item in more"
                  :key="item.title"
                  :href="item.url"
                  :title="item.title"
              />
            </div>
          </div>
        </div>
      </Container>
      <div class="illu-svg"><img :src="poingSrc"></div>
    </div>
    <Mountain class="bg-pale-blue"/>
    <PhotosCollages display="C" ligne="3" :photos="collages" />
  </div>
</template>

<script>
import Container from '../components/layout/Container'
import Video from '../components/Video'
import Definition from '../components/sections/Definition'
import Quote from '../components/lib/Quote'
import UnderlinedText from '../components/lib/UnderlinedText'
import Mountain from '../components/sections/Mountain'
import YellowButton from '../components/lib/YellowButton'

import subtitles3 from '../assets/videos/3_collectif.vtt'

import poingSrc from '../assets/illus/poing.svg'
import collage7 from '../assets/photos/collage7.jpg'
import collage8 from '../assets/photos/collage8.jpg'
import PhotosCollages from '../components/PhotosCollages'

export default {
  name: 'Part3',
  components: {Container, Video, Definition, Quote, UnderlinedText, Mountain, PhotosCollages, YellowButton},
  data() {
    return {
      title: 'L’histoire du collectif et son organisation',
      quote: 'Nos collages, généralement, sont très <span class="underlined-text">ciblés</span>. Sur une personne, un agresseur ou une cause en particulier',
      subtitlesSrc: subtitles3,
      more: [
        {
          title: 'L’affaire Maxime Cochard',
          url: 'https://tetu.com/2021/01/22/le-pcf-demande-a-lelu-parisien-maxime-cochard-de-se-mettre-en-retrait-apres-des-accusations-dagression-sexuelle/'
        },
        {
          title: 'L’affaire Christophe Girard',
          url: 'https://www.liberation.fr/politique/a-paris-nouvelle-manif-feministe-contre-le-retour-de-christophe-girard-20210202_RQZ6CCSETBGIHENJWSSMVT6UDY/'
        },
        {
          title: 'L’affaire Gabriel Matzneff',
          url: 'https://www.liberation.fr/checknews/2020/07/28/quels-sont-les-liens-entre-matzneff-et-girard-qui-vient-de-demissionner-de-la-mairie-de-paris_1795327/'
        }
      ],
      poingSrc: poingSrc,
      collages: [
        {
          src: collage7,
          alt: ''
        },
        {
          src: collage8,
          alt: ''
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/mixins";

.container {
  max-width: 1200px;
}

@include video-grid(1fr, 1fr);


.video-grid {
  text-align: center;
}

.more {
  &__title {
    text-transform: uppercase;
  }

  &__grid {
    display: grid;
    grid-gap: 32px;
    grid-template-columns: 1fr;
    align-items: center;

    @include md {
      grid-template-columns: 1fr 1fr;
    }

    @include lg {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}

.illu-svg {
  position: relative;
  z-index: 20;
  text-align: center;

  @include sm {
    height: 0;
  }

  > img {
    height: 150px;

    @include sm {
      transform: translateY(-10%);
      height: 200px;
    }
  }
}

.bg-image {
  padding-top: 550px;
}
</style>
