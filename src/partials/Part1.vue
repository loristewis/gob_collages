<template>
  <div>
    <div class="bg-olive secondary-pink">
      <Container>
        <h2>{{ title }}</h2>
        <div class="video-grid">
          <Video video-src="https://bddi2022.gobelins-pedago.fr/collages/videos/1_presentations.mp4" :subtitles-src="subtitlesSrc" color="yellow"/>
          <Quote class="video-quote" v-html="quote"></Quote>
        </div>
        <Definition title="Inclusivité"></Definition>
      </Container>
      <div class="illu-svg"><img :src="peintureSrc" alt=""></div>
    </div>
    <Mountain class="bg-olive"/>
    <PhotosCollages display="A" ligne="1" :photos="collages" />
  </div>
</template>

<script>
import Container from '../components/layout/Container';
import Video from '../components/Video';
import Definition from '../components/sections/Definition';
import Quote from '../components/lib/Quote';
import UnderlinedText from '../components/lib/UnderlinedText';
import Mountain from '../components/sections/Mountain';

import subtitles1 from '../assets/videos/1_presentations.vtt';

import peintureSrc from '../assets/illus/peinture.svg';
import collage1 from '../assets/photos/collage1.jpg';
import collage2 from '../assets/photos/collage2.jpg';
import collage3 from '../assets/photos/collage3.jpg';
import PhotosCollages from '../components/PhotosCollages';

export default {
  name: 'Part1',
  components: {Container, Video, Definition, Quote, UnderlinedText, Mountain, PhotosCollages},
  data() {
    return {
      title: 'Le collectif Les Grenades',
      quote: 'Les grenades c’est <span class="underlined-text">symbolique</span>, parce que ça représente l’arme, et les pépins qui sont à l’intérieur, ce sont les militantes',
      subtitlesSrc: subtitles1,
      peintureSrc: peintureSrc,
      collages: [
        {
          src: collage1,
          alt: ''
        },
        {
          src: collage2,
          alt: ''
        },
        {
          src: collage3,
          alt: ''
        }
      ]
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/styles/mixins";

@include video-grid();

.video-quote {
  font-family: var(--font-title);

  --fluid-type-min: 1.4rem;
  --fluid-type-target: 1.1vw;
  --fluid-type-max: 2.5rem;
}

.illu-svg {
  position: relative;
  z-index: 20;
  text-align: center;

  @include sm {
    height: 0;
    text-align: right;
  }

  > img {
    max-height: 200px;
    transform: translate(16px, -10%);

    @include sm {
      transform: translate(-72px, -10%);
    }
  }
}

.bg-image {
  padding-top: 550px;
}
</style>
