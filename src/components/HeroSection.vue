<script setup>
import AnimatedBackground from './AnimatedBackground.vue'
import EmailResume from './EmailResume.vue.vue'
</script>

<template>
  <div class="container-fluid position-relative">
    <AnimatedBackground />
    <div class="hero-content row position-relative">
      <div class="container hero-container position-absolute start-50 translate-middle">

        <div class="row">

          <div class="col-12">

            <div class="row">

              <h1 class="col-12">HELLO</h1>


              <h2 class="col-12">I'M A WEB DEVELOPER</h2>
              <p class="text-center text-light">- and I'm looking for a job -</p>

            </div>

            <EmailResume />

          </div>

        </div>
      </div>
    </div>

  </div>

</template>



<style lang="scss" scoped>
.hero-content {
  padding-top: calc(15rem + 10vh);
  min-height: 400px;
}

.hero-container {
  width: 330px;
}

h1 {
  font-size: 6.5rem;
  font-weight: bolder;
  text-align: center;
  color: var(--bs-light);
  padding: 0;
}

h2 {
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  color: var(--bs-light);
  padding: 0;
}

@media screen and (min-width: 768px) {
  .hero-container {
    width: 640px;
  }

  h1 {
    font-size: 13rem;
  }

  h2 {
    font-size: 3.55rem;
  }
}
</style>