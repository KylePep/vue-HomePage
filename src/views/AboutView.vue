<script setup>
import { AppState } from "@/AppState.js";
import AboutSection from "@/components/AboutSection.vue";
import ApplicationCard from "@/components/ApplicationCard.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import { computed } from "vue";

const appList = computed(() => AppState.appList)

</script>


<template>
  <div class="container">
    <div class="row top-row g-5">
      <div class="order-1 order-md-0 col-12 col-md-6">
        <AboutSection />
      </div>
      <div class="order-0 order-md-1 col-12 col-md-6">
        <img src="../assets/images/KylePeppersackHeadShot.jpg" class="img-fluid" alt="">
      </div>

      <div class="order-2 col-12">
        <div class="text-center fs-1 text-light">My Favorite Works</div>
        <div class="row">
          <div v-for="app in appList" :key="app" class="col-3 m-auto ">
            <ApplicationCard :org="'grid'" :img="app.img" :title="app.title" :description="app.description"
              :techStack="app.techStack" :webLink="app.webLink" :githubLink="app.githubLink" />
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
</style>
