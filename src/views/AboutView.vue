<script setup>
import { AppState } from "@/AppState.js";
import AboutSection from "@/components/AboutSection.vue";
import ApplicationCard from "@/components/ApplicationCard.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import { computed } from "vue";

const appData = computed(() => AppState.appList)
const favoriteApps = appData.value.filter((a) => a.tags.includes('favorite'))
const borderColorList = computed(() => AppState.accentColors)
</script>


<template>
  <div class="container">
    <div class="row top-row g-5">
      <div class="order-1 order-md-0 col-12 col-md-6">
        <AboutSection />
      </div>
      <div class="order-0 order-md-1 col-12 col-lg-6 d-flex justify-content-start justify-content-md-end">
        <img src="../assets/images/KylePeppersackHeadShot.jpg" class="img-fluid rounded" alt="">
      </div>

      <section class="order-2 col-12">
        <div class="text-center fs-1 text-light">My Favorite Works</div>
        <div class="row">
          <div v-for="app, index in favoriteApps" :key="app" class="col-12 col-md-6  col-lg-4">
            <ApplicationCard :org="'grid'" :app=app :borderColor="borderColorList[index % 4]" />
          </div>
        </div>
      </section>

      <section class="order-3 col-12">
        <SkillsSection />
      </section>

    </div>


  </div>
</template>


<style lang="scss" scoped>
img {
  max-height: 50vh;
}

.top-row {
  margin-top: 5rem;
}
</style>
