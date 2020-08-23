<template>
  <div class="breadcrumbs-bar" v-show="showComponent">
    <b-breadcrumb :items="items" class="bg-transparent" />
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbBar',

  data () {
    return {
      items: [],
    }
  },

  created () {
    this.updateBreadcrumbs()
  },

  computed: {
    showComponent () {
      return this.$route.meta.showBreadcrumb
    },
  },

  watch: {
    $route () {
      this.items = []
      this.updateBreadcrumbs()
    },
  },

  methods: {
    updateBreadcrumbs () {
      switch (this.$route.name) {
        case 'Profile':
          this.profileCase()
          break

        case 'Hero':
          this.heroCase()
          break

        default:
          this.homeCase()
          break
      }
    },

    homeCase () {
      this.items.push({ text: 'Home', to: { name: 'Home' } })
    },

    profileCase () {
      this.homeCase()
      const { battleTag, region } = this.$route.params
      this.items.push({ text: battleTag, to: { name: 'Profile', params: { region, battleTag } } })
    },

    heroCase () {
      this.profileCase()
      const { battleTag, region, heroId } = this.$route.params
      this.items.push({
        text: heroId.toString(),
        to: {
          name: 'Profile',
          params: { region, battleTag, heroId },
        },
      })
    },
  },
}
</script>
