<template>
  <div>
    <h1 class="text-white text-xl mb-2 mt-5">
      Episode locations
      <span class="text-sm">(tiempo {{ processTime }} ms)</span>
    </h1>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-3 mb-6">
      <template v-for="(episode, index) in episodesWithLocation">
        <episode :key="index" :episode="episode" />
      </template>
    </div>
    <back-button />
  </div>
</template>

<script>
export default {
  async asyncData ({ $fetchCollection, $onlyUnique }) {
    const initTime = new Date()
    const episodes = await $fetchCollection('episode')
    const characters = await $fetchCollection('character')

    const episodesWithLocation = episodes.map((episode) => {
      const locations = characters.filter((character) => {
        return episode.characters.includes(character.url)
      }).map((character) => {
        return character.location.name
      }).filter($onlyUnique)

      return { ...episode, locations }
    })

    const processTime = Math.abs(initTime - new Date())
    return { episodesWithLocation, processTime }
  }
  // ANOTHER SOLUTION USING PROMISES.ALL BUT SLOWER

  // async asyncData ({ $fetchCollection, $axios, $onlyUnique }) {
  //   const initTime = new Date()
  //   const episodes = await $fetchCollection('episode')

  //   const episodesWithLocationPromises = episodes.map(async (episode) => {
  //     const charactersList = await Promise.all(episode.characters.map(character => $axios.$get(character)))
  //     const locations = charactersList.map(character => character.location.name).filter($onlyUnique)
  //     return { ...episode, locations }
  //   })

  //   const episodesWithLocation = await Promise.all(episodesWithLocationPromises)

  //   const processTime = Math.abs(initTime - new Date())
  //   return { episodesWithLocation, processTime }
  // }
}
</script>

<style>

</style>
