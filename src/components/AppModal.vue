<script setup>
import { AppState } from "@/AppState.js";
import { computed } from "vue";

const props = defineProps(['button', 'modal', 'content'
])

const activeApp = computed(() => AppState.activeApp)
// const now = computed(() => Date.now())

const setActiveApp = () => {
  AppState.activeApp = props.content
}
</script>


<template>

  <!-- Button trigger modal -->
  <a @click="setActiveApp()" v-if="props.button == 'true'" type="button"
    class="px-0 mx-0 bg-info d-flex justify-content-center" data-bs-toggle="modal" data-bs-target="#appModal">
    <slot name="icon"></slot>
  </a>

  <!-- Modal -->
  <div v-if="props.modal == 'true'" class="modal fade" id="appModal" tabindex="-1" aria-labelledby="appModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header test" :style="{ backgroundColor: activeApp.appColor }">
          <h1 class="modal-title fs-5" id="appModalLabel">{{ activeApp.title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img :src="activeApp.img" :alt="activeApp.title" class="img-fluid">
          <a href="">{{ activeApp.githubLink }}</a>
          <a href="">{{ activeApp.webLink }}</a>
          <p>{{ activeApp.techStack }}</p>

          <p>{{ activeApp.description }}</p>

        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div> -->
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.test {
  background-color: var();
}
</style>