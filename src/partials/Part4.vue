<template>
  <div>
    <div class="bg-olive secondary-pink">
      <Container>
        <h2>{{ title }}</h2>
        <div class="video-grid">
          <Video video-src="https://bddi2022.gobelins-pedago.fr/collages/videos/4_communication.mp4" :subtitles-src="subtitlesSrc" color="yellow"/>
          <Quote class="video-quote" v-html="quote"></Quote>
        </div>
        <div class="more default-box">
          <h3>{{ more.title }}</h3>
          <div class="pancarte"><img :src="pancarteSrc"></div>
          <div v-html="more.content"></div>
          <div class="more__photos">
            <figure class="photo-more" v-for="item in more.photos" :key="item.src">
              <img :src="item.src"
                   :alt="item.alt">
              <figcaption v-if="item.caption" v-html="item.caption"></figcaption>
            </figure>
          </div>
        </div>
      </Container>
      <div class="illu-svg"><img class="illu-svg__sparkles" :src="starSrc" alt=""><img class="illu-svg__phone" :src="phoneSrc" alt=""></div>
    </div>
    <Mountain class="bg-olive"/>
    <PhotosCollages display="D" ligne="4" :photos="collages"/>
  </div>
</template>

<script>
import Container from '../components/layout/Container'
import Video from '../components/Video'
import Quote from '../components/lib/Quote'
import Mountain from '../components/sections/Mountain'
import PhotosCollages from '../components/PhotosCollages'

import subtitles4 from '../assets/videos/4_communication.vtt'

import metoo from '../assets/photos/metoo.jpg'
import occupy from '../assets/photos/occupy.jpg'
import pancarteSrc from '../assets/illus/pancarte.svg'
import phoneSrc from '../assets/illus/portable.svg'
import starSrc from '../assets/illus/etoile.svg'

import collage9 from '../assets/photos/collage9.jpg'
import collage10 from '../assets/photos/collage10.jpg'

export default {
  name: 'Part4',
  components: {Container, Video, Quote, Mountain, PhotosCollages},
  data() {
    return {
      title: 'La communication au sein du collectif et sur les réseaux sociaux',
      quote: 'Avoir une présence sur les réseaux sociaux, c’est vraiment une autre <span class="underlined-text">arme</span>, en plus',
      subtitlesSrc: subtitles4,
      pancarteSrc: pancarteSrc,
      starSrc: starSrc,
      phoneSrc: phoneSrc,
      more: {
        title: 'Réseaux sociaux et militantisme',
        content:
            '<p>On peut reconnaître des précurseurs à l’activisme par le biais des réseaux sociaux avec l’art hacktiviste, notamment le mouvement Fluxus dans les années 1960-1970, qui révèle déjà, à l’aide de plateformes informatiques de masse, l’intérêt de ce type de support pour contourner les médias et les chemins de diffusions classiques (ici, les musées) afin de promouvoir des idées militantes.</p>' +
            '<p>Cependant l’utilisation efficace et à grande échelle des réseaux sociaux dans des buts d’activisme social, quels qu’en soient les sujets, est relativement récente : on peut observer une explosion du cyber-activisme à l’aide des réseaux sociaux à partir du début des années 2010, en corrélation avec l’utilisation exponentielle de ces mêmes réseaux par la population.</p>' +
            '<p>Deux exemples : le mouvement de protestation sociale anticapitaliste Occupy en 2011, s’inspirant des méthodes d’organisation sur les réseaux du Printemps arabe, et la campagne de presse controversée Kony 2012, relayés massivement sur les réseaux sociaux, dans un cas aidant à la coordination des protestations dans plusieurs pays, dans l’autre, dans le but de faire arrêter et juger Joseph Kony, le chef de la rébellion ougandaise de l\'Armée de résistance du Seigneur.</p>' +
            '<p>Dix ans plus tard, les réseaux sociaux ont une force de frappe plus puissante que jamais à toutes les échelles, du mouvement des Gilets Jaunes aux hashtags à l’origine de protestations tels que #MeToo, #BalanceTonPorc et #BlackLivesMatter.</p>',
        photos: [
          {
            src: metoo,
            alt: '',
            caption: '<a href="https://hanslucas.com/dmeyer/photo/19746" target="_blank>Denis Meyer / Hans Lucas</a>'
          },
          {
            src: occupy,
            alt: '',
            caption: '<a href="https://commons.wikimedia.org/wiki/File:Day_14_Occupy_Wall_Street_September_30_2011_Shankbone_49.JPG" target="_blank>David Shankbone</a>'
          }
        ]
      },
      collages: [
        {
          src: collage9,
          alt: ''
        },
        {
          src: collage10,
          alt: ''
        }
      ]
    }
  }
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

.more {
  margin: 88px 0 0px;
  padding: 48px 24px;

  @include sm {
    padding: 48px;
  }

  .pancarte {
    display: none;

    @include lg {
      display: block;
      height: 0;

      > img {
        height: 200px;
        transform: translate(-248px) rotate(15deg);
      }
    }
  }

  &__photos {
    display: grid;
    margin-top: 48px;
    align-items: center;
    grid-template-columns: 1fr;
    grid-gap: 48px;

    figure {
      margin: 0;

      img {
        max-width: 100%;
      }

      figcaption,
      figcaption a {
        color: var(--dark-blue);
        text-align: center;
      }
    }

    @include md {
      grid-template-columns: 1fr 2fr;
    }

    @include lg {
      height: 88px;

      figure {
        &:first-child {
          transform: translateX(-72px);
        }

        &:last-child {
          transform: translateX(72px);
        }
      }
    }

    @include xl {
      figure {
        &:first-child {
          transform: translateX(-128px);
        }

        &:last-child {
          transform: translateX(128px);
        }
      }
    }
  }
}

.illu-svg {
  position: relative;
  z-index: 20;
  text-align: center;
  transform: translate(-50px, -110px);

  @include lg {
    text-align: right;
    transform: translate(-50px, 160px);

  }

  &__sparkles {
    width: 25px;
    transform:translateY(45px);

    @include sm {
      width: 50px;
      transform:translateY(0);
    }
  }

  &__phone {
    width: 75px;
    transform:translate(45px, 90px) rotate(-26deg);

    @include sm {
      width: 150px;
    }
  }
}

.bg-image {
  padding-top: 500px;

  @include lg {
    padding-top: 650px;
  }

  @include xl {
    padding-top: 600px;
  }

  @include xxl {
    padding-top: 500px;
  }
}
</style>
