<template>
  <div class="bg-white rounded-lg p-4 shadow-xl">
    <h1 class="text-lg font-bold">
      {{ episode.episode }} - {{ episode.name }}
    </h1>
    <h2 class="text-md text-gray-600">
      Locations
    </h2>
    <template v-for="(location, index) in locations">
      <div :key="index">
        {{ location }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    episode: {
      type: Object,
      required: true
    }
  },
  computed: {
    locations () {
      const locations = this.episode.characters.map(async (character) => {
        const characterFetched = await this.$axios.get(character)
        console.log('characterFetched', characterFetched.data.location.name)
        return characterFetched.data.location.name
      })

      console.log('locations', locations)

      return locations
    }
  }
}
</script>

<style>

</style>
