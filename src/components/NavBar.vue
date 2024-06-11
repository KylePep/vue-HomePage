<template>
  <div class="spacer"></div>
  <nav class="navbar navbar-expand-sm fixed-top navbar-dark bg-secondary shadow-lg">
    <div class="container-fluid">

      <RouterLink class="navbar-brand d-block d-sm-none title fs-3 fw-bold" :to="{ name: 'Home' }">Kyle Peppersack
      </RouterLink>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav   mb-2 mb-sm-0 w-100 justify-content-around">

          <li class="nav-item">
            <RouterLink class="nav-link selectable-nav fs-5" aria-current="page" :to="{ name: 'Home' }">Home
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link selectable-nav fs-5" aria-current="page" :to="{ name: 'Home' }">Portfolio
            </RouterLink>
          </li>

          <!-- <li class="nav-item dropdown">
            <a class="nav-link selectable-nav fs-5 dropdown-toggle" :to="{ name: 'Home' }" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Links
            </a>
            <ul class=" dropdown-menu">
              <li><a class="dropdown-item" :to="{ name: 'Home' }">App 1</a></li>
              <li><a class="dropdown-item" :to="{ name: 'Home' }">App 2</a></li>
              <li><a class="dropdown-item" :to="{ name: 'Home' }">App 3</a></li>
            </ul>
          </li> -->

          <RouterLink class="navbar-brand d-none d-sm-block title fs-2 fw-bold me-0 pt-0" :to="{ name: 'Home' }">Kyle
            Peppersack</RouterLink>

          <li class="nav-item">
            <RouterLink class="nav-link selectable-nav fs-5" aria-current="page" :to="{ name: 'About' }">About
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link selectable-nav fs-5" aria-current="page" :to="{ name: 'Home' }">Contact
            </RouterLink>
          </li>

        </ul>

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
.spacer {
  height: 64px;
}

.title {
  text-transform: uppercase;
  color: var(--bs-light);
}

.title:hover {
  color: var(--bs-primary);
}

.selectable-nav {
  color: var(--bs-primary);
  // width: 256px;
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