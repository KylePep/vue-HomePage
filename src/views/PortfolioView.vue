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
      <button @click="setOrg('list')">List</button>
      <button @click="setOrg('grid')">Grid</button>

      <div v-for="index in 6" :key="index" class=" mt-5" :class="[organizationStyle == 'list' ? 'col-12' : 'col-4']">
        <ApplicationCard :org="organizationStyle" img="src/assets/images/business.jpg" title="The Title of the app"
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