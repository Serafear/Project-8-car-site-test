<template>
  <div class="header">
    <div class="logo-div">
      <img class="logo-img" src="/src/assets/auto_car-06.jpg" />
      <p class="logo-name">Unique</p>
    </div>
    <div class="nav-menu">
      <ul class="ul-menu">
        <li><router-link to="#">About Us</router-link></li>
        <li><router-link to="#">Cars</router-link></li>
        <li><router-link to="#">Futures</router-link></li>
        <li><router-link to="#">Help</router-link></li>
        <li class="download">
          <DownloadApp />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DownloadApp from "./small-components/DownloadApp.vue";
export default {
  name: "Header",
  components: {
    DownloadApp,
  },
};
</script>

<style lang="postcss" scoped>
.header {
  @apply flex flex-row gap-5
  justify-center;
}
.logo-div {
  @apply flex flex-row justify-center items-center
      w-52;
}
.logo-img {
  @apply w-40;
}
.logo-name {
  @apply font-bold font-mono text-xl mt-4;
}
.nav-menu {
  @apply w-2/3;
}
.ul-menu {
  @apply flex flex-row gap-6 w-full h-full justify-end items-center;
}
li {
  @apply mt-4 mr-4 font-semibold text-sm;
}
.vec-ref {
  @apply text-sm;
}
</style>
