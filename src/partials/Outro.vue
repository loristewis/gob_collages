<template>
  <div>
    <div class="bg-almost-black">
      <Container>
        <div class="outro">
          <h3>Remerciements</h3>
          <p>
            Nous tenons tout d’abord à remercier Elisa, du collectif “Les Grenades” pour la confiance, le temps et la sincérité qu’elle a bien voulu nous accorder.
            Surtout dans une période de crise sanitaire, où un entretien à distance était notre seule option.
          </p>
          <p>
            Merci également à toutes les personnes qui ont apporté des sources de documentation, notamment nos professeur.e.s Augustin Gimel, Sophie Quatre-Barbes, Pauline Gommy, Sarah Garcin, et Sylvie Masson, ainsi qu'Elsa Delmas.
          </p>
        </div>
      </Container>
    </div>
    <div class="bg-olive">
      <Container>
        <div class="outro">
          <div class="illu-svg"><img :src="peintureSrc" alt=""></div>
          <h4>Militer pour inspirer : Rencontre avec une colleuse (2021)</h4>
          <p>
            est un projet de longform-webdoc réalisé par Elie Nissen, Léa Kovarski, Némo Quehen et Anna Xiberras (design) et Loris Birkemeyer (développement), dans le cadre d’un projet étudiant à Gobelins, l’école de l’image. Son but est uniquement pédagogique et éducatif, et n’a nulle vocation commerciale ou publicitaire.
          </p>
        </div>
        <div class="illu-svg"><img :src="portableSrc" alt=""></div>
      </Container>
    </div>
  </div>
</template>

<script>
import Container from '../components/layout/Container';

import peintureSrc from '../assets/illus/peinture.svg'
import portableSrc from '../assets/illus/portable.svg'


export default {
  name: 'Intro',
  components: {Container},
  data() {
    return {
      peintureSrc: peintureSrc,
      portableSrc: portableSrc
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/mixins";

.illu-svg {
  display: none;

  @include lg {
    display: block;
    height: 0;
    //max-width: 100%;
  }

  > img {
    max-height: 90px;
  }

  &:first-child {
    text-align: left;

    > img {
      transform: translate(-150px, 40px);
    }
  }

  &:last-child {
    text-align: right;

    > img {
      transform: translate(120px, -100px);
    }
  }
}

/* Élément | http://localhost:8090/ */

div.bg-olive:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1) {
}

/* Élément | http://localhost:8090/ */

div.bg-olive:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) {
}

/* Élément | http://localhost:8090/ */

div.bg-olive:nth-child(2) > div:nth-child(1) > div:nth-child(2) {

}

/* Élément | http://localhost:8090/ */

div.bg-olive:nth-child(2) > div:nth-child(1) > div:nth-child(2) > img:nth-child(1) {
}

</style>
