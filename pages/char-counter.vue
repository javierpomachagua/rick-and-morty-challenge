<template>
  <div>
    <h1 class="text-white text-xl mb-2">
      Char counter <span class="text-sm">(tiempo {{ processTime }} ms)</span>
    </h1>
    <div class="grid grid-cols-1 gap-3 md:grid-cols-3 mb-6">
      <letter-card letter="L" :total="locationLetterRepetitions" description="Times that appears the letter in location names" />
      <letter-card letter="E" :total="episodeLetterRepetitions" description="Times that appears the letter in episodes names" />
      <letter-card letter="C" :total="characterLetterRepetitions" description="Times that appears the letter in characters names" />
    </div>
    <back-button />
  </div>
</template>

<script>
export default {
  async asyncData ({ $fetchCollection }) {
    const initTime = new Date()

    const [locationResults, characterResults, episodeResults] = await Promise.all([
      $fetchCollection('location'),
      $fetchCollection('character'),
      $fetchCollection('episode')
    ])

    const processTime = Math.abs(initTime - new Date())

    return { locationResults, episodeResults, characterResults, processTime }
  },
  computed: {
    locationLetterRepetitions () {
      return this.letterRepetitions(this.locationResults, 'l')
    },
    episodeLetterRepetitions () {
      return this.letterRepetitions(this.episodeResults, 'e')
    },
    characterLetterRepetitions () {
      return this.letterRepetitions(this.characterResults, 'e')
    }
  },
  methods: {
    letterRepetitions (list, letter) {
      return list.reduce((previous, current) => {
        return previous + this.totalRepetitionsByWord(current.name, letter)
      }, 0)
    },
    totalRepetitionsByWord (word, repetition) {
      return (word.toLowerCase().match(new RegExp(repetition, 'gi')) || []).length
    }
  }
}
</script>

<style>

</style>
