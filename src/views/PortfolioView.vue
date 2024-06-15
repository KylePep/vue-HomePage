<script setup>
import { AppState } from "@/AppState.js";
import ApplicationCard from "@/components/ApplicationCard.vue";
import { computed, ref } from "vue";

const appData = computed(() => AppState.appList)

const organizationStyle = ref('list')

const setOrg = (organization) => {
  organizationStyle.value = organization
}

</script>


<template>
  <div class="container text-light">


    <div class="row top-row">

      <div class="col-12 mt-5">
        <h3 class="text-center">
          <p class="fs-5 fw-normal mb-4">My Works</p>
          <p class="fs-2">I CREATE THE BEST PRODUCT QUALITY
            AND I AM BEST AT THIS.</p>
        </h3>
      </div>

      <div class="col-12 m-auto separation mt-5"></div>
      <div class="col-12 d-flex justify-content-between justify-content-md-end">

        <div class="dropdown">
          <button class="btn  dropdown-toggle fs-4 text-light" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Filter by
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Vue.js</a></li>
            <li><a class="dropdown-item" href="#">JavaScript</a></li>
            <li><a class="dropdown-item" href="#">TypeScript</a></li>
            <li><a class="dropdown-item" href="#">MongoDb</a></li>
            <li><a class="dropdown-item" href="#">MySql</a></li>
          </ul>
        </div>


        <button v-if="organizationStyle == 'grid'" @click="setOrg('list')"
          class="d-none d-md-block btn text-light fs-3 mdi mdi-view-list" title="list view"></button>
        <button v-if="organizationStyle == 'list'" @click="setOrg('grid')"
          class="d-none d-md-block btn text-light fs-3 mdi mdi-grid" title="grid view"></button>
      </div>

      <div v-for="app, index in appData" :key="index" class="d-none d-md-block mt-5"
        :class="[organizationStyle == 'list' ? 'col-12' : 'col-6 col-lg-4']">
        <ApplicationCard :org="organizationStyle" :img="app.img" :title="app.title" :description="app.description"
          :techStack="app.techStack" :webLink="app.webLink" :githubLink="app.githubLink" />
      </div>

      <div v-for="app, index in appData" :key="index" class="col-12 d-block d-md-none mt-5">
        <ApplicationCard org="list" :img="app.img" :title="app.title" :description="app.description"
          :techStack="app.techStack" :webLink="app.webLink" :githubLink="app.githubLink" />
      </div>

    </div>

  </div>
</template>


<style lang="scss" scoped>
.top-row {
  margin-top: 5rem;
}

.separation {
  margin: 1rem 0rem 1rem 0rem;
  width: 50px;
  border-bottom: solid var(--bs-success) 4px;
}
</style>