<script setup>
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";

</script>


<template>
  <div class="container">
    <div class="row top-row g-5">
      <div class="order-1 order-md-0 col-12 col-md-6">
        <AboutSection />
      </div>
      <div class="order-0 order-md-1 col-12 col-md-6">
        <img src="../assets/images/internet.jpg" class="img-fluid" alt="">
      </div>

      <div class="order-2 col-12">
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

      <div class="order-3 col-12">
        <SkillsSection />
      </div>

    </div>


  </div>
</template>


<style lang="scss" scoped>
.top-row {
  margin-top: 5rem;
}

.app-card {
  height: 256px;
}
</style>
