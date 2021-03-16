export default ({ app, $axios }, inject) => {
  inject('fetchCollection', async (collection) => {
    const collectionData = await $axios.$get(
      `https://rickandmortyapi.com/api/${collection}`
    )
    const collectionPromises = [
      ...range(1, collectionData.info.pages)
    ].map(page =>
      $axios.$get(`https://rickandmortyapi.com/api/${collection}?page=${page}`)
    )
    const collections = await Promise.all(collectionPromises)
    return collections.reduce(
      (previous, current) => previous.concat(current.results),
      []
    )
  })
}

function range (start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i)
}
