<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FootBar from './components/FootBar.vue'
import AppModal from './components/AppModal.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main class="container-fluid">
    <RouterView />
  </main>

  <footer>
    <FootBar />
  </footer>

  <AppModal button="false" modal="true" />

</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

section {
  min-height: 30vh;
  margin-bottom: 20vh;
}

.custom-button {
  -webkit-transition: box-shadow 300ms ease-in-out, color 400ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 400ms ease-in-out;
}

.custom-button:hover {
  cursor: pointer;
  animation: grow 300ms alternate 100ms 1 forwards;
}

@keyframes grow {
  from {
    transform: scale(.9);
  }

  to {
    transform: scale(1);
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  article {
    padding: 0rem 1rem 0rem 1rem;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  article {
    padding: 0rem 3rem 0rem 3rem;
  }

  /* No changes needed */

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  article {
    padding: 0rem 4rem 0rem 4rem;
  }

  /* No changes needed */

}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  article {
    padding: 0rem 6rem 0rem 6rem;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  article {
    padding: 0rem 12rem 0rem 12rem;
  }
}
</style>
