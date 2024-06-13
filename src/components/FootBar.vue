<script setup>
import { RouterLink } from "vue-router";

function scrollToTop() {
  scrollTo(0, 0)
}
</script>


<template>
  <div class="container-fluid  bg-secondary">

    <div class="row text-light text-center py-5 g-2">
      <div class="col-12 fs-3 fw-bold">KYLE PEPPERSACK</div>
      <div class="col-12 fs-4 fw-semibold">Are You Ready to Work with Me?</div>
      <div class="col-12 fs-4 fw-semibold pb-3">Don't be Shy, Say Hello!</div>
      <div class="col-12 col-sm-5 mx-auto text-center text-sm-end">kylepeppersack@hotmail.com</div>
      <div class="col-1 d-none d-sm-block"> | </div>
      <div class="col-12 col-sm-5 mx-auto text-center text-sm-start">775 - 304 - 6480</div>
    </div>

    <div class="row flex-grow-1 justify-content-center align-items-center pt-2 pb-3 border-top border-light mx-3">

      <div class="col-6 col-sm-6">
        <RouterLink :to="{ name: 'Home' }" class="btn btn-secondary">Home</RouterLink>
        <RouterLink :to="{ name: 'About' }" class="btn btn-secondary">About</RouterLink>
        <RouterLink :to="{ name: 'Contact' }" class="btn btn-secondary">Contact</RouterLink>
      </div>

      <div class="col-6 col-sm-6 text-end">
        <i class="mdi mdi-linkedin btn fs-3 text-light"></i>
        <i class="mdi mdi-github btn fs-3 text-light"></i>
        <i @click="scrollToTop()" class="mdi mdi-arrow-up btn fs-3 text-light"></i>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  min-height: 96px;
  margin-top: 32px;
}
</style>