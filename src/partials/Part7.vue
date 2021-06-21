<template>
  <div>
    <div class="bg-olive secondary-yellow">
      <Container>
        <h2>{{ title }}</h2>
        <div class="video-grid">
          <Quote class="video-quote" v-html="quote"></Quote>
          <Video video-src="https://bddi2022.gobelins-pedago.fr/collages/videos/7_protection_infos.mp4" :subtitles-src="subtitlesSrc" color="yellow"/>
        </div>
        <div class="virtuels">
          <div class="brief"><img :src="briefSrc"></div>
          <div class="illu-svg"><img :src="flecheSrc"></div>
          <YellowButton
              title="Voir le brief légal de Collages Féminicides Paris"
              href="https://www.instagram.com/stories/highlights/17856058733064839/"
          />
        </div>
      </Container>
    </div>
    <Mountain class="bg-olive"/>
    <PhotosCollages display="C" ligne="3" :photos="collages" />
  </div>
</template>

<script>
import Container from '../components/layout/Container';
import Video from '../components/Video';
import Quote from '../components/lib/Quote';
import Mountain from '../components/sections/Mountain';
import YellowButton from '../components/lib/YellowButton';
import PhotosCollages from '../components/PhotosCollages';

import subtitles7 from '../assets/videos/7_protection_infos.vtt';

const flecheSrc = () => import('../assets/illus/fleche-1.svg')
const briefSrc = () => import('../assets/illus/collages-feminicides-portable.png')

const collage17 = () => import('../assets/photos/collage17.jpg')
const collage18 = () => import('../assets/photos/collage18.jpg')

export default {
  name: 'Part7',
  components: {Container, Video, Quote, Mountain, YellowButton, PhotosCollages},
  data() {
    return {
      title: 'Coller en sécurité',
      quote: 'Judiciairement parlant tu risques juste si on te prend en <span class="underlined-text">plein collage</span>, que t’as le pinceau sur le mur',
      subtitlesSrc: subtitles7,
      flecheSrc: flecheSrc,
      briefSrc: briefSrc,
      collages: [
        {
          src: collage17,
          alt: ''
        },
        {
          src: collage18,
          alt: ''
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/mixins";

@include video-grid(3fr 5fr, 3fr 7fr);

.virtuels {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 64px;
  justify-content: space-evenly;

  @include md {
    flex-direction: row;
  }

  .brief {
      margin-bottom: 48px;

    @include md {
      margin-bottom: 0;
    }

    > img {
      max-width: 250px;
    }
  }

  .illu-svg {
    display: none;

    @include lg {
      display: block;
      transform: scaleX(-1) translateY(20px) rotate(30deg);
      margin-right: 48px;
      max-width: 100%;
    }
  }

  a {
    max-width: 24ch;
  }
}
</style>
