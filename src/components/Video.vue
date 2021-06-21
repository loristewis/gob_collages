<template>
  <VideoPlayer :options="videoOptions" :poster-src="posterSrc" :key="videoSrc"/>
</template>

<script>
import VideoPlayer from './VideoPlayer';
import blue from '../assets/videos/miniatures-bleu.jpg'
import yellow from '../assets/videos/miniatures-jaune.jpg'
import pink from '../assets/videos/miniatures-rose.jpg'

export default {
  name: 'Video',
  components: {VideoPlayer},
  props: {
    videoSrc: {
      type: String,
      required: true
    },
    subtitlesSrc: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false
    }
  },
  computed: {
    posterSrc() {
      let posterSrc = blue
      if (this.color === "yellow") posterSrc = yellow
      if (this.color === "pink") posterSrc = pink

      return posterSrc
    }
  },
  data() {
    return {
      videoOptions: {
        autoplay: false,
        controls: true,
        fluid: true,
        preload: 'metadata',
        sources: [
          {
            src: this.videoSrc,
            type: 'video/mp4'
          }
        ],
        tracks: [
          {
            kind: 'captions',
            src: this.subtitlesSrc,
            srclang: 'fr',
            label: 'french',
            default: true
          },
        ],
        controlBar: {
          fullscreenToggle: false
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.video-horizontal-wrapper {
  display: flex;
}
</style>
