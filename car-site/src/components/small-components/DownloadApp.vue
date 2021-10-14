<template>
<!--we can use router-link too-->
  <button class="dwl-button" @click="">
      <img class="img-apple" src="/src/assets/apple-brands.svg" />
    <a class="dwl-ref" href="#">Download App</a>
  </button>
</template>

<script>
export default {
  name: "DownloadApp",
};
</script>

<style lang="postcss" scoped>
.dwl-button {
  @apply bg-black text-white border border-black p-2 px-4 rounded-3xl
  flex flex-row gap-2
}
.img-apple {
    filter: invert(96%) sepia(0%) saturate(0%) hue-rotate(145deg) brightness(104%) contrast(105%);;
    @apply w-3
}
</style>
