<script setup>
import { computed } from "vue";
import ApplicationCard from "./ApplicationCard.vue";
import { AppState } from "@/AppState.js";


const appData = computed(() => AppState.appList)
const homePageApps = appData.value.filter((a) => a.tags.includes('homePage'))
const borderColorList = computed(() => AppState.accentColors)
</script>


<template>
  <div class="container">
    <div class="row g-4">

      <div v-for="app, index in homePageApps" :key="index" class="d-none d-lg-block mt-5 col-6 col-lg-4">
        <ApplicationCard :org="'grid'" :app=app :borderColor="borderColorList[index % 4]" />
      </div>

      <div v-for="app, index in homePageApps" :key="index" class="col-12 col-md-6 d-block d-lg-none mt-5">
        <ApplicationCard org="grid" :app=app :borderColor="borderColorList[index % 4]" />
      </div>

    </div>
  </div>
</template>


<style lang="scss" scoped></style>
