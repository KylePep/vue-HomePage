<script setup>
import ApplicationCard from "./ApplicationCard.vue";
</script>


<template>
  <div class="container">
    <div class="row g-2">

      <div v-for="index in 6" :key="index" class="d-none d-md-block mt-5"
        :class="[organizationStyle == 'list' ? 'col-12' : 'col-6 col-lg-4']">
        <ApplicationCard :org="'grid'" img="src/assets/images/business.jpg" :title="'The Title of the app' + index"
          description="A brief description of the app" :techStack="['Tech', 'Stack']" webLink="webLink"
          githubLink="githubLink" />
      </div>

      <div v-for="index in 6" :key="index" class="col-12 d-block d-md-none mt-5">
        <ApplicationCard org="grid" img="src/assets/images/business.jpg" :title="'The Title of the app' + index"
          description="A brief description of the app" :techStack="['Tech', 'Stack']" webLink="webLink"
          githubLink="githubLink" />
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
