<template>
  <div class="bg-white rounded-lg p-4 shadow-xl">
    <h1 class="text-lg font-bold">
      {{ episode.episode }} - {{ episode.name }}
    </h1>
    <h2 class="text-sm text-gray-600 mt-2">
      Locations ({{ episode.locations.length }})
    </h2>
    <template v-for="(location, index) in episode.locations">
      <div :key="index" class="text-sm">
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
  }
}
</script>

<style>

</style>
