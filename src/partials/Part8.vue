<template>
  <div>
    <div class="bg-pale-pink secondary-pink">
      <Container>
        <h2>{{ title }}</h2>
        <div class="video-grid">
          <Video video-src="https://bddi2022.gobelins-pedago.fr/collages/videos/8_crise_sanitaire.mp4" :subtitles-src="subtitlesSrc" color="pink"/>
          <Quote class="video-quote" v-html="quote"></Quote>
        </div>
        <div class="virtuels">
          <YellowButton
              title="Découvrir le concept des collages virtuels"
              href="https://collagesvirtuels.fr/album-confinement1"
          />
          <div class="illu-svg"><img :src="flecheSrc"></div>
          <div class="virtuel"><img :src="virtuelScr"></div>
        </div>
      </Container>
    </div>
    <Mountain class="bg-pale-pink"/>
    <PhotosCollages display="E" ligne="4" :photos="collages">
      <div class="transcription__container">
        <YellowButton class="transcription__button" title="Retrouver la transcription complète de l’entretien"/>
      </div>
    </PhotosCollages>
  </div>
</template>

<script>
import Container from '../components/layout/Container';
import Video from '../components/Video';
import Quote from '../components/lib/Quote';
import Mountain from '../components/sections/Mountain';
import PhotosCollages from '../components/PhotosCollages';
import YellowButton from '../components/lib/YellowButton';

import subtitles8 from '../assets/videos/8_crise_sanitaire.vtt'

import flecheSrc from '../assets/illus/fleche-1.svg';
import virtuelScr from '../assets/photos/collage_virtuel.png';

import collageElisa from '../assets/photos/collageelisa.jpg'

export default {
  name: 'Part8',
  components: {Container, Video, Quote, Mountain, PhotosCollages, YellowButton},
  data() {
    return {
      title: 'L’impact de la crise sanitaire',
      quote: 'On a forcément dû <span class="underlined-text">s’adapter</span> et renforcer notre présence sur les réseaux sociaux',
      subtitlesSrc: subtitles8,
      flecheSrc: flecheSrc,
      virtuelScr: virtuelScr,
      collages: [
        {
          src: collageElisa,
          alt: '',
          caption: '<a href="https://www.instagram.com/p/CMURMVYggNG/" target="_blank">@julietteprotest / Les Grenades</a>'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/mixins";

@include video-grid();

.transcription {
  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__button {
    max-width: 350px;
  }
}

.virtuels {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 64px;
  justify-content: space-evenly;

  @include md {
    flex-direction: row;
  }

  a {
    max-width: 24ch;
  }

  .illu-svg {
    display: none;

    @include lg {
      display: block;
      position: relative;
      top: -40px;
      margin-left: 48px;
      max-width: 100%;
    }
  }

  .virtuel {
    margin-top: 48px;
    transform: rotate(5deg);

    @include md {
      margin-top: 0;
      margin-left: 48px;
    }

    > img {
      max-width: 226px;
    }
  }
}
</style>
