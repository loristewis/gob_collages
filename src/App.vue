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
// import {Header, Intro, Part1, Part2, Part3, Part4, Part5, Part6, Part7, Part8, Outro} from './partials';
const Header = () => import('./partials/Header')
const Intro = () => import('./partials/Intro')
const Part1 = () => import('./partials/Part1')
const Part2 = () => import('./partials/Part2')
const Part3 = () => import('./partials/Part3')
const Part4 = () => import('./partials/Part4')
const Part5 = () => import('./partials/Part5')
const Part6 = () => import('./partials/Part6')
const Part7 = () => import('./partials/Part7')
const Part8 = () => import('./partials/Part8')
const Outro = () => import('./partials/Outro')

export default Vue.extend({
  components: {Header, Intro, Part1, Part2, Part3, Part4, Part5, Part6, Part7, Part8, Outro},
});
</script>

<style lang="scss" src="./styles/main.scss"></style>
