<template>
  <div class="bg-default">
    <Header/>

    <Intro/>

    <Part1/>
    <Part2/>
    <Part3/>
    <Part4/>
    <Part5/>
    <Part6/>
    <Part7/>
    <Part8/>

    <Outro/>
  </div>
</template>

<script>
import Vue from 'vue';
import {Header, Intro, Part1, Part2, Part3, Part4, Part5, Part6, Part7, Part8, Outro} from './partials';

export default Vue.extend({
  components: {Header, Intro, Part1, Part2, Part3, Part4, Part5, Part6, Part7, Part8, Outro},
});
</script>

<style lang="scss" src="./styles/main.scss"></style>
