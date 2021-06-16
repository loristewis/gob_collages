<template>
  <div>
    <div class="bg-pale-pink secondary-yellow">
      <Container>
        <h2>{{ title }}</h2>
        <div class="video-grid">
          <Quote class="video-quote" v-html="quote"></Quote>
          <VideoPlayer :options="videoOptions"/>
        </div>
        <div class="stats-grid">
          <div class="default-box"></div>
          <div class="default-box"></div>
          <div class="default-box"></div>
        </div>
      </Container>
    </div>
    <Mountain class="bg-pale-pink"/>
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
  name: 'Part2',
  components: {Container, VideoPlayer, Definition, Quote, UnderlinedText, Mountain},
  data() {
    return {
      title: 'Eliza et les collages',
      quote: 'Je voulais aider d’autres victimes de violences sexuelles et sexistes à <span class="underlined-text">s’identifier</span> et leur dire qu’elles ne sont pas seules',
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

.mountain-background {
  fill: var(--pale-pink)
}

.stats-grid {
  margin-top: 80px;

  display: grid;
  grid-column-gap: 64px;
  grid-row-gap: 48px;
  grid-template-areas:
      "first second"
      "third third";

  .default-box {
    height: 200px;

    &:first-child {
      grid-area: first;
    }

    &:nth-child(2) {
      grid-area: second;
    }

    &:nth-child(3) {
      grid-area: third;
    }
  }
}

.video-grid {
  display: grid;
  grid-column-gap: 72px;
  grid-row-gap: 48px;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  align-items: center;

  @include md {
    grid-template-columns: 3fr 5fr;
  }

  //@include md {
  //  grid-column-gap: 96px;
  //  grid-template-columns: 3fr 6fr;
  //}

  @include xl {
    grid-column-gap: 128px;
    grid-template-columns: 3fr 7fr;
  }
}

.video-quote {
  font-family: var(--font-title);

  --fluid-type-min: 1.4rem;
  --fluid-type-target: 1.1vw;
  --fluid-type-max: 2.5rem;
}
</style>
