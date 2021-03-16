<template>
  <div>
    <h1 class="text-white text-xl mb-2 mt-5">
      Episode locations <span class="text-sm">(tiempo {{ processTime }} ms)</span>
    </h1>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-3 mb-6">
      <template v-for="(episode, index) in episodes.results">
        <episode :key="index" :episode="episode" />
      </template>
    </div>
    <back-button />
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const initTime = new Date()
    const episodes = await $axios.$get('https://rickandmortyapi.com/api/episode')
    const processTime = Math.abs(initTime - new Date())
    return { episodes, processTime }
  }
}
</script>

<style>

</style>
