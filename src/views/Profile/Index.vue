<template>
  <div class="profile-view">
    <BaseLoading v-if="isLoading" />

    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData" />
      <ArtisansBlock :artisans-data="artisansData" />
    </template>
  </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading'
import MainBlock from './MainBlock/Index'
import ArtisansBlock from './ArtisansBlock/Index'

import { getApiAccount } from '@/api/search'
import setError from '@/mixins/setError'

export default {
  name: 'ProfileView',

  components: {
    BaseLoading,
    MainBlock,
    ArtisansBlock,
  },

  mixins: [
    setError,
  ],

  data () {
    return {
      profileData: null,
      isLoading: false,
    }
  },

  created () {
    this.isLoading = true
    const { region, battleTag: account } = this.$route.params
    this.fetchData(region, account)
  },

  computed: {
    artisansData () {
      return {
        blacksmith: this.profileData.blacksmith,
        blacksmithHardcore: this.profileData.blacksmithHardcore,
        jeweler: this.profileData.jeweler,
        jewelerHardcore: this.profileData.jewelerHardcore,
        mystic: this.profileData.mystic,
        mysticHardcore: this.profileData.mysticHardcore,
      }
    },
  },

  methods: {
    fetchData (region, account) {
      getApiAccount({ region, account })
        .then(({ data }) => (this.profileData = data))
        .catch((err) => {
          this.profileData = null

          const errObj = {
            routeParams: this.$route.params,
            message: err.message,
          }

          if (err.response) {
            errObj.data = err.response.data
            errObj.status = err.response.status
          }

          this.setApiErr(errObj)
          this.$router.push({ name: 'Error' })
        })
        .finally(() => (this.isLoading = false))
    },
  },
}
</script>
