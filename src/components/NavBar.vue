<template>
  <nav class="navbar navbar-expand-sm sticky-top bg-secondary text-light">
    <div class="container-fluid">

      <div class="navbar-brand d-block d-md-none">
        <a class="title" href="#">Kyle Peppersack</a>
      </div>

      <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> -->
      <div class="collapse navbar-collapse justify-content-around " id="navbarNavAltMarkup">
        <div class="navbar-nav d-none d-md-flex  w-100 justify-content-around">
          <a class="nav-link selectable-nav" href="#">About</a>
          <a class="nav-link selectable-nav" href="#">Applications</a>
        </div>
      </div>

      <div class="navbar-brand d-none d-md-block">
        <a class="title" href="#">Kyle Peppersack</a>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-around" id="navbarNavAltMarkup">
        <div class="navbar-nav w-100 justify-content-around">
          <div class="d-flex d-md-none justify-content-around">
            <a class="nav-link selectable-nav" href="#">About</a>
            <a class="nav-link selectable-nav" href="#">Applications</a>
          </div>
          <a class="nav-link selectable-nav" href="#">Resume</a>
          <a class="nav-link selectable-nav" href="#">Experience</a>
        </div>
      </div>

    </div>
  </nav>
</template>


<script>
import { loadState } from "@/utils/Store.js";
import { onMounted, ref } from "vue";

export default {
  setup() {

    const theme = ref(loadState('theme') || 'custom')

    onMounted(() => {
      document.documentElement.setAttribute('data-bs-theme', theme.value)
    })
    return {

    }
  }
}
</script>


<style lang="scss" scoped>
.title {
  color: var(--bs-light);
}

.title:hover {
  color: var(--bs-primary);
}

.selectable-nav {
  color: var(--bs-primary);
}

.selectable-nav:hover {
  color: var(--bs-light);
}

a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .RouterLink-exact-active {
  border-bottom: 2px solid var(--bs-primary);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 576px) {
  nav {
    height: 64px;
    /* height: 98px; */
  }
}
</style>