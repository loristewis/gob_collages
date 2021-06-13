<template>
  <div class="bg-default">
    <Container>
      <h1>
        <FramedText>{{ name }}</FramedText>
      </h1>
      <p>
        <FramedText>{{ name }}</FramedText>
      </p>
      <p>
        “là un
        <UnderlinedText
            color="rgba(252, 134, 212, 0.4)"
        >
          extrait marquant
        </UnderlinedText>
        de la vidéo”, ou peut-être un titre de partie
      </p>
      <p>
        Vestibulum ac purus rutrum, suscipit dui cursus, imperdiet libero. Phasellus pellentesque lorem interdum
        ultricies
        aliquet. Sed mollis, leo dignissim vehicula bibendum, metus quam consectetur libero, eu viverra nisi lacus vel
        arcu. Morbi euismod nibh vel elit ultricies, sit amet varius lacus molestie. Nunc vulputate tellus eget mi
        commodo, ut facilisis massa convallis. Phasellus efficitur nunc in elit rutrum pharetra. Nulla posuere, augue
        vel
        viverra vehicula, ante ligula porta sapien, et accumsan tortor risus eget dui. Donec ut dignissim lorem. Fusce
        sagittis volutpat ipsum eu venenatis.
        <UnderlinedText>Vestibulum sed turpis leo. Donec pulvinar leo non ullamcorper tincidunt. Nam enim magna,
          sollicitudin ut nisi vitae, facilisis gravida eros.
        </UnderlinedText>
        Aliquam hendrerit nunc sit amet odio tincidunt, sed gravida diam sollicitudin. Pellentesque non quam et erat
        pulvinar volutpat.
      </p>
      <h2>
        “là un
        <UnderlinedText>extrait marquant</UnderlinedText>
        de la vidéo”, ou peut-être un titre de partie
      </h2>
      <h1>
        “là un
        <UnderlinedText>extrait marquant</UnderlinedText>
        de la vidéo”, ou peut-être un titre de partie
      </h1>
      <!--      <video controls>-->
      <!--        <source src="./../assets/presentations.mp4" type="video/mp4">-->
      <!--        Votre navigateur ne supporte pas la balise vidéo.-->
      <!--      </video>-->
    </Container>
  </div>
</template>

<script>
import FramedText from '../components/lib/FramedText';
import UnderlinedText from '../components/lib/UnderlinedText';
import Container from '../components/layout/Container';
import Definition from '../components/sections/Definition';
import VideoPlayer from '../components/VideoPlayer';

import videoSrc from './../assets/presentations.mp4';

export default {
  name: 'Tests',
  components: {
    Container,
    FramedText,
    UnderlinedText,
    Definition,
    VideoPlayer
  },
  data() {
    return {
      name: "Test de titre comme ça sur deux lignes"
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  //color: var(--primary-color);
  //background-color: var(--bg-color);
}
</style>
