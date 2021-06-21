<template>
  <div class="part6-container">
    <div class="bg-pale-blue secondary-yellow">
      <Container>
        <h2>{{ title }}</h2>
        <div class="sparkle"><img :src="sparkleSrc" alt=""></div>
        <div class="video-grid">
          <Video video-src="https://bddi2022.gobelins-pedago.fr/collages/videos/6_obstacles.mp4" :subtitles-src="subtitlesSrc" color="blue"/>
          <Quote class="video-quote" v-html="quote"></Quote>
          <div class="more__container">
            <p class="more__title">En savoir plus sur :</p>
            <YellowButton
                class="more__item"
                v-for="item in more"
                :key="item.title"
                :href="item.url"
                :title="item.title"
            />
          </div>
        </div>
        <div class="fire"><img :src="fireSrc" alt=""></div>
      </Container>
    </div>
    <Mountain class="bg-pale-blue"/>
    <PhotosCollages display="B" ligne="2" :photos="collages"/>
  </div>
</template>

<script>
import Container from '../components/layout/Container';
import Video from '../components/Video';
import Quote from '../components/lib/Quote';
import Mountain from '../components/sections/Mountain';
import YellowButton from '../components/lib/YellowButton';
import PhotosCollages from '../components/PhotosCollages';

const subtitles6 = () => import('../assets/videos/6_obstacles.vtt')

const collage14 = () => import('../assets/photos/collage14.jpg')
const collage15 = () => import('../assets/photos/collage15.jpg')
const collage16 = () => import('../assets/photos/collage16.jpg')

const sparkleSrc = () => import('../assets/illus/etincelle.svg')
const fireSrc = () => import('../assets/illus/flamme.svg')

export default {
  name: 'Part6',
  components: {Container, Video, Quote, Mountain, YellowButton, PhotosCollages},
  data() {
    return {
      title: 'Obstacles et oppositions',
      quote: 'Je connais des militantes qui se sont fait envoyer des <span class="underlined-text">bouteilles de verre</span> sur la tête, c’est pas très agréable...',
      subtitlesSrc: subtitles6,
      sparkleSrc: sparkleSrc,
      fireSrc: fireSrc,
      more: [
        {
          title: 'L’affaire Julie',
          url: 'https://www.humanite.fr/affaire-julie-la-cour-de-cassation-rejette-la-requalification-des-faits-en-viols-701609'
        }
      ],
      collages: [
        {
          src: collage14,
          alt: ''
        },
        {
          src: collage15,
          alt: ''
        },
        {
          src: collage16,
          alt: ''
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/mixins";

@include video-grid(1fr, 1fr);

.video-grid {
  text-align: center;
}

.sparkle,
.fire {
  display: none;

  @include md {
    display: block;
    position: relative;
    height: 0;
  }
}

@include md {
  .sparkle {
    > img {
      height: 50px;
      transform: translateX(10px);

      @include lg {
        transform: translateX(40px);
      }
    }
  }

  .fire {
    > img {
      position: absolute;
      right: 0;
      height: 150px;
      transform: translate(0px, -100px);
    }
  }
}

.more {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include sm {
      > a {
        width: 350px;
      }
    }
  }

  &__title {
    text-transform: uppercase;
  }
}
</style>
