<script setup>
import { RouterLink } from "vue-router";

function scrollToTop() {
  scrollTo(0, 0)
}
</script>


<template>
  <div class="container-fluid  bg-secondary">

    <div class="row text-light text-center py-5 g-2">
      <!-- <div class="col-12 fs-3 fw-bold">KYLE PEPPERSACK</div> -->
      <div class="col-12 fs-4 fw-semibold">Are You Ready to Work with Me?</div>
      <div class="col-12 fs-4 fw-semibold pb-3">Don't be Shy, Say Hello!</div>
      <div class="col-12 col-sm-5 mx-auto text-center text-sm-end ">
        <a href="mailto:kylepeppersack@hotmail.com" class="selectable rounded-1 text-light p-1">
          kylepeppersack@hotmail.com
        </a>
      </div>
      <div class="col-1 d-none d-sm-block"> | </div>
      <div class="col-12 col-sm-5 mx-auto text-center text-sm-start">
        <RouterLink :to="{ name: 'Contact' }" class="selectable rounded-1 text-light p-1">Reach out to me right now?
        </RouterLink>
        <!-- <a href="tel:7753046480" class="selectable text-light p-1">
          775 - 304 - 6480
        </a> -->
      </div>
    </div>

    <div class="row flex-grow-1 justify-content-center align-items-center pt-2 pb-3 border-top border-light mx-3">

      <div class="col-7 col-sm-6">
        <RouterLink :to="{ name: 'Home' }" class="btn btn-secondary d-none d-sm-inline">Home</RouterLink>
        <RouterLink :to="{ name: 'About' }" class="btn btn-secondary">About</RouterLink>
        <RouterLink :to="{ name: 'Contact' }" class="btn btn-secondary">Contact</RouterLink>
      </div>

      <div class="col-5 col-sm-6 text-end px-0">

        <a class="mdi mdi-linkedin btn btn-secondary fs-3 text-light px-1 px-sm-3"
          href="https://www.linkedin.com/in/kyle-peppersack" target="_blank"></a>

        <a class=" mdi mdi-github btn btn-secondary fs-3 text-light px-1 px-sm-3" href="https://github.com/KylePep"
          target="_blank"></a>

        <i @click="scrollToTop()" class="mdi mdi-arrow-up btn btn-secondary fs-3 text-light px-1 px-sm-3"></i>
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  min-height: 96px;
  margin-top: 15vh;
}
</style>