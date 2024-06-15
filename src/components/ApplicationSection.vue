<script setup>
import { computed } from "vue";
import ApplicationCard from "./ApplicationCard.vue";
import { AppState } from "@/AppState.js";


const appData = computed(() => AppState.appList)
const homePageApps = appData.value.filter((a) => a.homePage == true)
</script>


<template>
  <div class="container">
    <div class="row g-2">

      <div v-for="app, index in homePageApps" :key="index" class="d-none d-md-block mt-5"
        :class="[organizationStyle == 'list' ? 'col-12' : 'col-6 col-lg-4']">
        <ApplicationCard :org="'grid'" :img="app.img" :title="app.title" :description="app.description"
          :techStack="app.techStack" :webLink="app.webLink" :githubLink="app.githubLink" />
      </div>

      <div v-for="app, index in homePageApps" :key="index" class="col-12 d-block d-md-none mt-5">
        <ApplicationCard org="grid" :img="app.img" :title="app.title" :description="app.description"
          :techStack="app.techStack" :webLink="app.webLink" :githubLink="app.githubLink" />
      </div>

    </div>
  </div>
</template>


<style lang="scss" scoped>
.application-card {
  display: block;
  min-height: 384px;
  width: 100%;
  padding: 5%;
}

.card-hover {
  padding: 2rem;
  margin-left: 5%;
  background-color: var(--bs-success);
  width: 90%;
  height: 256px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.297);
}



.alt-border-clr:nth-child(even) {
  >.card-hover {
    background-color: var(--bs-secondary);
  }
}

.card-hover {
  min-height: 100px;
  position: absolute;
  top: 0;
  transition: top ease 0.5s;
}

.card-hover:hover {
  cursor: pointer;
  top: -10px;
}
</style>
