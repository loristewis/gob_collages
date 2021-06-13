<template>
  <div class="bg-default">
    <Header/>

    <Intro/>

    <Part1/>
    <Part2/>

    <Tests/>
  </div>
</template>

<script>
import Vue from 'vue';
import {Header, Intro, Tests, Part1, Part2} from './partials';

export default Vue.extend({
  components: {Header, Intro, Tests, Part1, Part2},
});
</script>

<style lang="scss" src="./styles/main.scss"></style>
