<template>
  <div class="videobox-container">
    <video ref="videoPlayer" class="video-player video-js vjs-default-skin" :poster="posterSrc"></video>
  </div>
</template>

<script>
import videojs from 'video.js';

export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    posterSrc: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.player = videojs(
        this.$refs.videoPlayer,
        this.options,
        function onPlayerReady() {
          console.log('onPlayerReady', this);
        }
    )
    let tracks = this.player.textTracks()

    for (let i = 0; i < tracks.length; i++) {
      let track = tracks[i]
      if (track.kind === "captions") {
        console.log(track.src) // Never called
        track.mode = "showing"
      }
    }
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style lang="scss">
.videobox-container {
  max-width: 600px;
  width: 100%;
  margin: auto;
}

// The color of icons, text, and the big play button border.
// Try changing to #0f0
$primary-foreground-color: #fff; // #fff default

// The default color of control backgrounds is mostly black but with a little
// bit of blue so it can still be seen on all-black video frames, which are common.
// Try changing to #900
$primary-background-color: #2B333F; // #2B333F default
$button-color: #E9E641;

.video-player {
  &.video-js {
    /* The base font size controls the size of everything, not just text.
     All dimensions use em-based sizes so that the scale along with the font size.
     Try increasing it to 15px and see what happens. */
    font-size: 10px;

    /* The main font color changes the ICON COLORS as well as the text */
    color: $primary-foreground-color;

    /* The "Big Play Button" is the play button that shows before the video plays.
   To center it set the align values to center and middle. The typical location
   of the button is the center, but there is trend towards moving it to a corner
   where it gets out of the way of valuable content in the poster image.*/
    .vjs-big-play-button {
      font-size: 3em;
      $big-play-width: 2em;
      $big-play-height: 2em;

      line-height: $big-play-height;
      height: $big-play-height;
      width: $big-play-width;

      border: none;
      border-radius: 50%;

      /* Align center */
      left: 50%;
      top: 50%;
      margin-left: -($big-play-width / 2);
      margin-top: -($big-play-height / 2);

      background-color: rgba($button-color, 0.7);
    }

    &:hover {
      .vjs-big-play-button {
        background-color: rgba($button-color, 0.8);
      }
    }

    .vjs-control-bar,
    .vjs-menu-button .vjs-menu-content {
      background-color: rgba($primary-background-color, 0.7);
    }

    /* Slider - used for Volume bar and Progress bar */
    $slider-bg-color: lighten($primary-background-color, 33%);
    .vjs-slider {
      background-color: $slider-bg-color;
      background-color: rgba($slider-bg-color, 0.5);
    }

    /* The slider bar color is used for the progress bar and the volume bar
     (the first two can be removed after a fix that's coming) */
    .vjs-volume-level,
    .vjs-play-progress,
    .vjs-slider-bar {
      background: $primary-foreground-color;
    }

    /* The main progress bar also has a bar that shows how much has been loaded. */
    .vjs-load-progress {
      background: rgba($slider-bg-color, 0.5);
    }

    /* The load progress bar also has internal divs that represent
     smaller disconnected loaded time ranges */
    .vjs-load-progress div {
      background: rgba($slider-bg-color, 0.75);
    }
  }
}
</style>
