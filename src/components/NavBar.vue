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

          <li class="nav-item dropdown d-block d-sm-none">
            <a class="nav-link selectable-nav text-primary fs-5 dropdown-toggle" :to="{ name: 'Home' }" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Links
            </a>
            <ul class=" dropdown-menu bg-secondary border-0 fs-1">
              <li class="d-flex">
                <a class=" nav-link selectable-nav mdi mdi-linkedin text-primary mx-3"
                  href="https://www.linkedin.com/in/kyle-peppersack" target="_blank"></a>
                <a class=" nav-link selectable-nav mdi mdi-github text-primary" href="https://github.com/KylePep"
                  target="_blank"></a>
              </li>
            </ul>
          </li>

          <li class="text-primary fs-2 d-none d-sm-flex">
            <a class="nav-link selectable-nav p-0 mdi mdi-linkedin me-3"
              href="https://www.linkedin.com/in/kyle-peppersack" target="_blank"></a>
            <a class="nav-link selectable-nav p-0 mdi mdi-github" href="https://github.com/KylePep" target="_blank"></a>
          </li>

          <!-- <li class="nav-item">
            <RouterLink class="nav-link selectable-nav fs-5" aria-current="page" :to="{ name: 'Home' }">Home
            </RouterLink>
          </li> -->

          <li class="nav-item">
            <RouterLink class="nav-link selectable-nav fs-5" aria-current="page" :to="{ name: 'Portfolio' }"
              :class="[route.name == 'Portfolio' ? 'active' : '']">Portfolio
            </RouterLink>
          </li>


          <RouterLink class="navbar-brand d-none d-sm-block title fs-2 fw-bold me-0 pt-0" :to="{ name: 'Home' }">Kyle
            Peppersack</RouterLink>

          <li class="nav-item">
            <RouterLink class="nav-link selectable-nav fs-5" aria-current="page" :to="{ name: 'About' }"
              :class="[route.name == 'About' ? 'active' : '']">About
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link selectable-nav fs-5" aria-current="page" :to="{ name: 'Contact' }"
              :class="[route.name == 'Contact' ? 'active' : '']">Contact
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
import { useRoute } from "vue-router";

export default {
  setup() {

    const theme = ref(loadState('theme') || 'custom')

    onMounted(() => {
      document.documentElement.setAttribute('data-bs-theme', theme.value)
    })
    const route = useRoute()
    return {
      route
    }
  }
}
</script>


<style lang="scss" scoped>
.spacer {
  height: 16px;
}

.title {
  text-transform: uppercase;
  color: var(--bs-light);
}

.title:hover {
  color: var(--bs-primary);
}

.selectable-nav {
  color: var(--bs-success);
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