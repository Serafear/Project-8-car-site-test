<template>
  <div class="phone-page">
    <img class="phone-img" src="/src/assets/phone.png" />
    <section class="phone-section">
        <p class="small-pres">CONVENIENT INTERACTION</p>
        <h1 class="page-title">Modern App</h1>
        <p class="page-descr">We developed a simple and functionnal app.<br>
            Its is build in such a way as to simplify the problem<br>
            of the car selection and rental process. View<br> 
            the location, statement, and other information<br>
            about each of the vehicles in one click.<br>
        </p>
        <DownloadApp class="dwl-app"/>
    </section>
  </div>
</template>

<script>
import DownloadApp from '../components/small-components/DownloadApp.vue'
export default {
  name: "PhonePage",
  components: {
      DownloadApp,
  }
};
</script>

<style lang="postcss" scoped>
.phone-page {
    @apply
    flex gap-60 w-full justify-center
}
.phone-section {
    @apply
    flex flex-col w-4/12 gap-3 justify-center mb-10
}
.dwl-app {
    @apply
    w-44 items-center
}
.phone-img {
    @apply
    w-96
}
.small-pres{
    color: #a19ea1;
    @apply
    text-xs
}
.page-title {
    @apply
    text-4xl font-extrabold mb-5
}
.page-descr{
    @apply
    font-bold mb-5
}

</style>
