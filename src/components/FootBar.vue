<script setup>

</script>


<template>
  <div class="container-fluid d-flex bg-secondary">

    <row class="row flex-grow-1 justify-content-center align-items-center">

      <div class="col-6 col-sm-6">
        <button class="btn btn-secondary">Home</button>
        <button class="btn btn-secondary">About</button>
        <button class="btn btn-secondary">Links</button>
      </div>

      <div class="col-6 col-sm-6 text-end">
        <i class="mdi mdi-linkedin btn fs-3 text-light"></i>
        <i class="mdi mdi-github btn fs-3 text-light"></i>
        <i class="mdi mdi-arrow-up btn fs-3 text-light"></i>
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