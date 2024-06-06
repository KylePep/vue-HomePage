<script setup>
import AboutSection from "@/components/AboutSection.vue";
import HeroSection from '../components/HeroSection.vue'

</script>

<template>

  <section class="hero row">
    <div class="col-12">
      <HeroSection />
    </div>
  </section>

  <section class="row">
    <div class="col-12">
      <AboutSection />
    </div>
  </section>

  <section class="row">
    <div class="col-12">
      Experience Categories
    </div>
  </section>

  <section class="row">
    <div class="col-12">
      Resume
    </div>
  </section>

  <section class="row">
    <div class="col-12">
      Applications
    </div>
  </section>

  <section class="row">
    <div class="col-12">
      skills
    </div>
  </section>

  <section class="row">
    <div class="col-12">
      Testimonials
    </div>
  </section>

</template>




<style lang="scss" scoped>
.hero {
  min-height: 100vh;
}

section {
  min-height: 50vh;
}
</style>
