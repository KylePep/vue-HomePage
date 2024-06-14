<script setup>
import ApplicationCard from "@/components/ApplicationCard.vue";
import { ref } from "vue";
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
      <div class="col-12 d-none d-md-flex justify-content-center justify-content-md-end">
        <button v-if="organizationStyle == 'grid'" @click="setOrg('list')" class="btn text-light fs-1 mdi mdi-view-list"
          title="list view"></button>
        <button v-if="organizationStyle == 'list'" @click="setOrg('grid')" class="btn text-light fs-1 mdi mdi-grid"
          title="grid view"></button>
      </div>

      <div v-for="index in 6" :key="index" class="d-none d-md-block mt-5"
        :class="[organizationStyle == 'list' ? 'col-12' : 'col-6 col-lg-4']">
        <ApplicationCard :org="organizationStyle" img="src/assets/images/business.jpg"
          :title="'The Title of the app' + index" description="A brief description of the app" techStack="Tech Stack"
          webLink="webLink" githubLink="githubLink" />
      </div>

      <div v-for="index in 6" :key="index" class="col-12 d-block d-md-none mt-5">
        <ApplicationCard org="list" img="src/assets/images/business.jpg" :title="'The Title of the app' + index"
          description="A brief description of the app" techStack="Tech Stack" webLink="webLink"
          githubLink="githubLink" />
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