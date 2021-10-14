<template>
  <div class="home-page">
    <div class="content-holder">
      <Header />
      <PhonePage class="PhonePage"/>
      <a class="vec-ref" href="https://www.vecteezy.com/free-vector/car"
        >Car Vectors by Vecteezy</a
      >
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import PhonePage from "../components/PhonePage.vue";
export default {
  name: "Home",
  components: {
    Header,
    PhonePage
  },
  data() {
    return {
      
    }
  },
};
</script>

<style lang="postcss" scoped>
.home-page {
@apply
bg-gray-500 w-screen h-screen flex justify-center items-center
}
.content-holder {
  @apply
  bg-white w-9/12 h-4/5 border border-white rounded-2xl
}
.text-1 {
  @apply text-3xl text-black;
}
</style>
