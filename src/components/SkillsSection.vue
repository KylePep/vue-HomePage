<script setup>
import { AppState } from "@/AppState.js";
import { computed } from "vue";

const skills = computed(() => AppState.skills)
</script>


<template>
  <div class="container text-light">
    <div class="row g-3">

      <div class="col-12 d-flex justify-content-center">
        <h3 class="text-center">MY SKILLS</h3>
      </div>

      <div v-for="skill in skills" :key="skill" class="col-12 col-md-6">
        <div class="d-flex selectable me-2 py-3">
          <div>
            <i class="circle position-relative me-3 ms-3">
              <i class="position-absolute mdi mdi-check-bold top-50 start-50 translate-middle me-5"></i>
            </i>
          </div>
          <div>
            <h4>{{ skill.title }}</h4>
            <p class="mb-0">{{ skill.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<style lang="scss" scoped>
.circle {
  display: block;
  width: 28px;
  height: 28px;
  border: solid 3px var(--bs-light);
  border-radius: 50%;
}
</style>