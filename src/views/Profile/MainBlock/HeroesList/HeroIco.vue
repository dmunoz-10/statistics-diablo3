<template>
  <div class="hero-ico d-flex align-items-center hover-cursor-pointer" @click="goToHero(hero.id)">
    <span class="hero-image border" :class="heroClassImg" />
    <span class="hero-name ml-2 font-weight-bold" :class="{ 'text-danger': hero.hardcore }">
      {{ hero.name }}
    </span>
    <img v-if="hero.seasonal" src="@/assets/img/leaf.png" alt="seasonal_leaf" width="12px">
  </div>
</template>

<script>
import goToHero from '@/mixins/goToHero'

export default {
  name: 'HeroIco',

  props: {
    hero: {
      required: true,
      type: Object,
    },
  },

  computed: {
    heroClassImg () {
      const gender = this.hero.gender === 1 ? 'female' : 'male'
      const hardcore = this.hero.hardcore ? 'border-danger' : ''

      return `hero-${this.hero.classSlug} ${gender} ${hardcore}`
    },
  },

  mixins: [goToHero],
}
</script>

<style lang="stylus">
.hero-ico
  vertical-align middle

  .hero-image
    width 30px
    height 26px
    display inline-block
    background-size 210%

  .hero-name
    height 24px
    display inline-block
</style>
