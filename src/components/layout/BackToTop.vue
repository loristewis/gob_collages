<template>
  <button class="goTop" v-if="isVisible" @click="backToTop">
    <font-awesome-icon icon="angle-up" aria-hidden="true"/>
  </button>
</template>

<script>
import $ from 'jquery'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAngleUp)

export default {
  name: 'BackToTop',
  components: {FontAwesomeIcon},
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    initToTopButton: function() {
      $(document).bind('scroll', function() {
        let backToTopButton = $('.goTop');
        if ($(document).scrollTop() > 250) {
          backToTopButton.addClass('isVisible');
          this.isVisible = true;
        } else {
          backToTopButton.removeClass('isVisible');
          this.isVisible = false;
        }
      }.bind(this));
    },
    backToTop: function() {
      $('html,body').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing');
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.initToTopButton();
    });
  }
}
</script>

<style scoped lang="scss">
.goTop {
  background-color: rgb(1, 14, 27);
  background-color: rgba(1, 14, 27, .7);
  position: fixed;
  width: 45px;
  height: 45px;
  display: block;
  right: 0;
  bottom: 0;
  border: none;
  opacity: 0;
  z-index: -1;

  .svg-inline--fa {
    color: white;
    font-size: 22px;
  }

  &:hover {
    opacity: 1;
    background-color: rgb(1, 14, 27);
    background-color: rgba(1, 14, 27, .9);
  }
}

.isVisible {
  opacity: .8;
  z-index: 50;
  transition: all .4s ease-in;
}
</style>
