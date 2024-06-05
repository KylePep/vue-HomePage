<script setup>
function scrollToTop() {
  scrollTo(0, 0)
}
</script>


<template>
  <div class="container-fluid  bg-secondary">

    <row class="row text-light text-center py-5 g-2">
      <div class="col-12 fs-3 fw-bold">KYLE PEPPERSACK</div>
      <div class="col-12 fs-4 fw-semibold">Are You Ready to Work with Me?</div>
      <div class="col-12 fs-4 fw-semibold">Don't be Shy, Say Hello!</div>
      <div class="col-12 ">kylepeppersack@hotmail.com</div>
      <div class="col-12 ">(775) 304 6480</div>
    </row>

    <row class="row flex-grow-1 justify-content-center align-items-center pt-2 pb-3 border-top border-light mx-3">

      <div class="col-6 col-sm-6">
        <button class="btn btn-secondary">Home</button>
        <button class="btn btn-secondary">About</button>
        <button class="btn btn-secondary">Links</button>
      </div>

      <div class="col-6 col-sm-6 text-end">
        <i class="mdi mdi-linkedin btn fs-3 text-light"></i>
        <i class="mdi mdi-github btn fs-3 text-light"></i>
        <i @click="scrollToTop()" class="mdi mdi-arrow-up btn fs-3 text-light"></i>
      </div>

    </row>

  </div>
</template>

<style lang="scss" scoped>
.container-fluid {
  min-height: 96px;
  margin-top: 32px;
}
</style>