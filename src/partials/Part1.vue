<template>
  <div>
    <div class="bg-olive secondary-pink">
      <Container>
        <h2>{{ title }}</h2>
        <div class="video-grid">
          <VideoPlayer :options="videoOptions"/>
          <Quote class="video-quote" v-html="quote"></Quote>
        </div>
        <Definition title="Inclusivité"></Definition>
      </Container>
    </div>
    <Mountain class="bg-olive"/>
    <div class="full-screen"></div>
  </div>
</template>

<script>
import Container from '../components/layout/Container';
import VideoPlayer from '../components/VideoPlayer';
import Definition from '../components/sections/Definition';

import videoSrc from '../assets/presentations.mp4';
import Quote from '../components/lib/Quote';
import UnderlinedText from '../components/lib/UnderlinedText';
import Mountain from '../components/sections/Mountain';

export default {
  name: 'Part1',
  components: {Container, VideoPlayer, Definition, Quote, UnderlinedText, Mountain},
  data() {
    return {
      title: 'Les Grenades',
      quote: 'Les grenades c’est <span class="underlined-text">symbolique</span>, parce que ça représente l’arme, et les pépins qui sont à l’intérieur, ce sont les militantes',
      videoOptions: {
        autoplay: true,
        controls: true,
        fluid: true,
        sources: [
          {
            src: videoSrc,
            type: 'video/mp4'
          }
        ],
        controlBar: {
          fullscreenToggle: false
        }
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/styles/mixins";

.container {
  max-width: 980px;
}

.video-grid {
  display: grid;
  grid-column-gap: 72px;
  grid-row-gap: 48px;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  align-items: center;

  @include md {
    grid-template-columns: 5fr 3fr;
  }

  //@include md {
  //  grid-column-gap: 96px;
  //  grid-template-columns: 6fr 3fr;
  //}

  @include xl {
    grid-column-gap: 128px;
    grid-template-columns: 7fr 3fr;
  }
}

.video-quote {
  font-family: var(--font-title);

  --fluid-type-min: 1.4rem;
  --fluid-type-target: 1.1vw;
  --fluid-type-max: 2.5rem;
}
</style>
