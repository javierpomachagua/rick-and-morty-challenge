<template>
  <div class="bg-white rounded-lg p-4 shadow-xl">
    <div class="flex items-center mb-2">
      <h1
        class="rounded-md bg-green-200 font-regular text-gray-700 px-6 py-4 text-2xl flex flex-col items-center"
      >
        {{ letter }}
        <span class="text-sm text-gray-600">letter</span>
      </h1>
      <span class="text-3xl font-bold ml-4">{{ total }}</span>
    </div>
    <span class="text-sm text-gray-600 italic">{{ description }} </span>
  </div>
</template>

<script>
export default {
  props: {
    letter: {
      type: String,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
