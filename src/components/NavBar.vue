<template>
  <nav class="navbar navbar-expand-sm sticky-top bg-secondary text-light">
    <div class="container-fluid">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <a class="nav-link" href="#">Features</a>
          <a class="nav-link" href="#">Pricing</a>
        </div>
      </div>

      <div class="navbar-brand">
        <!-- <i class="mdi mdi-crystal-ball pe-2"></i> -->
        <a class="fs-3 fw-bold" href="#">Kyle Peppersack</a>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup2"
        aria-controls="navbarNavAltMarkup2" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup2">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home2</a>
          <a class="nav-link" href="#">Features2</a>
          <a class="nav-link" href="#">Pricing2</a>
        </div>
      </div>

    </div>
  </nav>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.navbar-brand {
  color: var(--bs-primary);

  >a {
    color: var(--bs-primary);
  }
}
</style>