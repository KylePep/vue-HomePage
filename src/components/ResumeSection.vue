<script setup>
import { AppState } from "@/AppState.js";
import { computed } from "vue";
import { RouterLink } from "vue-router";

const resumeData = computed(() => AppState.resumeData);

</script>

<template>
  <div class="container text-light">
    <div class="row mx-0 mx-md-5">

      <div class="col-12 mb-4 text-start text-lg-center mb-5">
        <h3 class="fs-2">MY RESUME</h3>
      </div>

      <div v-for="resumeItem in resumeData" :key="resumeItem">
        <div class="row">
          <div class="col-12 col-lg-6 ">

            <h4>{{ resumeItem.title }}</h4>
            <p>{{ resumeItem.duration }}</p>
            <i class="underline-sm d-block d-lg-none"></i>

          </div>



          <div class="col-12 col-lg-6 fs-5">
            <p>{{ resumeItem.description }}</p>
          </div>

        </div>
        <div class="row">
          <i class="col-12 underline"></i>
        </div>

      </div>

      <div class="col-12 d-flex justify-content-center mt-3">
        <RouterLink :to="{ name: 'Contact' }" class="work-button text-dark">
          LET'S WORK TOGETHER
        </RouterLink>
      </div>

    </div>
  </div>
</template>




<style lang="scss" scoped>
.resume-row {
  display: block;
  margin: auto;
  width: 60%;
}

.underline-sm {
  display: block;
  width: 50%;
  margin-top: 1rem;
  margin-bottom: 2rem;
  border-bottom: solid 1px var(--bs-light);
}

.underline {
  padding-bottom: 2rem;
  margin-bottom: 4rem;
  border-bottom: solid 1px var(--bs-light);
}

.work-button {
  border: none;
  padding: .5rem 1rem .5rem 1rem;
  background-color: var(--bs-success);
  transition: all 300ms ease-in-out;
}

.work-button:hover {
  background-color: var(--bs-light);
}
</style>