<template>
  <div>
    <div class="bg-pale-pink secondary-yellow">
      <Container>
        <h2>{{ title }}</h2>
        <div class="gribouilli"><img :src="gribouilliSrc"></div>
        <div class="video-grid">
          <Quote class="video-quote" v-html="quote"></Quote>
          <Video video-src="https://bddi2022.gobelins-pedago.fr/collages/videos/5_conflits.mp4" :subtitles-src="subtitlesSrc" color="pink"/>
        </div>
        <Definition title="Abolo"></Definition>
        <div class="virtuels">
          <YellowButton
              title="Voir le compte Insta de Collages Féminicides Paris"
              href="https://www.instagram.com/collages_feminicides_paris/"
          />
          <div class="illu-svg"><img :src="flecheSrc"></div>
          <div class="profile"><img :src="profilSrc"></div>
        </div>
      </Container>
    </div>
    <Mountain class="bg-pale-pink"/>
    <PhotosCollages display="A" ligne="1" :photos="collages"/>
  </div>
</template>

<script>
import Container from '../components/layout/Container';
import Video from '../components/Video';
import Quote from '../components/lib/Quote';
import Mountain from '../components/sections/Mountain';
import Definition from '../components/sections/Definition';
import YellowButton from '../components/lib/YellowButton';
import PhotosCollages from '../components/PhotosCollages';

import subtitles5 from '../assets/videos/5_conflits.vtt';
import gribouilliSrc from '../assets/illus/gribouilli.svg'

import flecheSrc from '../assets/illus/fleche-2.svg';
import profilSrc from '../assets/insta.png';

import collage11 from '../assets/photos/collage11.jpg';
import collage12 from '../assets/photos/collage12.jpg';
import collage13 from '../assets/photos/collage13.jpg';

export default {
  name: 'Part5',
  components: {Container, Video, Quote, Mountain, Definition, YellowButton, PhotosCollages},
  data() {
    return {
      title: 'Les conflits',
      quote: 'À partir du moment où des militantes au sein du même collectif n’ont plus les mêmes <span class="underlined-text">valeurs</span>, le collectif se dissout',
      subtitlesSrc: subtitles5,
      flecheSrc: flecheSrc,
      profilSrc: profilSrc,
      gribouilliSrc: gribouilliSrc,
      collages: [
        {
          src: collage11,
          alt: ''
        },
        {
          src: collage12,
          alt: ''
        },
        {
          src: collage13,
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

.gribouilli {
  display: none;

  @include md {
    display: block;
    height: 0;
    text-align: right;

    > img {
      max-width: 150px;
      transform: translate(60px, -80px);
    }
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
      top: 32px;
      margin-left: 48px;
      max-width: 100%;
    }
  }

  .profile {
    margin-top: 48px;

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
