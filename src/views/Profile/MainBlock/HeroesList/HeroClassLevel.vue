<template>
  <div class="hero-name-level">
    <span>{{ classToName(hero.classSlug) }}</span>
    <span>·</span>
    <span class="text-monospace font-weight-bold">{{ hero.level }}</span>
  </div>
</template>

<script>
import heroName from '@/mixins/heroName.js'

export default {
  name: 'HeroClassLevel',

  mixins: [heroName],

  props: {
    hero: {
      type: Object,
      required: true,
    },
  },
}
</script>
