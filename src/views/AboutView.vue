<script setup>
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";

</script>


<template>
  <div class="container mt-5">
    <div class="row g-5">
      <div class="col-6">
        <AboutSection />
      </div>
      <div class="col-6">
        <img src="../assets/images/internet.jpg" class="img-fluid" alt="">
      </div>

      <div class="col-12">
        <div class="text-center fs-1 text-light">Work I've Done</div>
        <div class="row">
          <div class="col-3 m-auto bg-success">
            <div class="app-card"></div>
          </div>
          <div class="col-3 m-auto bg-success">
            <div class="app-card"></div>

          </div>
          <div class="col-3 m-auto bg-success">
            <div class="app-card"></div>

          </div>
        </div>
      </div>

      <div class="col-12">
        <SkillsSection />
      </div>

    </div>


  </div>
</template>


<style lang="scss" scoped>
.app-card {
  height: 256px;
}
</style>
