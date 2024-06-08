<script setup>
import AboutSection from "@/components/AboutSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import HeroSection from '../components/HeroSection.vue';
import ResumeSection from "@/components/ResumeSection.vue";
import ApplicationSection from "@/components/ApplicationSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import TestimonialSection from "@/components/TestimonialSection.vue";

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
      <ExperienceSection />
    </div>
  </section>

  <section class="row">
    <div class="col-12">
      <ResumeSection />
    </div>
  </section>

  <section class="row">
    <div class="col-12">
      <ApplicationSection />
    </div>
  </section>

  <section class="row">
    <div class="col-12">
      <SkillsSection />
    </div>
  </section>

  <section class="row">
    <div class="col-12">
      <TestimonialSection />
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
