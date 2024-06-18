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
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content rounded-0 modal-shadow">
        <div class="container m-0">
          <div class="row modal-body  p-0 ">

            <div class="d-block d-md-none col-12 d-flex justify-content-between p-3"
              :style="{ backgroundColor: activeApp.appColor }">
              <h1 class="modal-title fs-5 fw-semibold" id="appModalLabel">{{ activeApp.title }}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class=" col-12 col-md-6 px-0">
              <img :src="activeApp.img" :alt="activeApp.title" class="img-fluid">
            </div>

            <div class=" col-12 col-md-6 px-0 d-flex flex-column">

              <div class="d-none d-md-flex justify-content-between p-3"
                :style="{ backgroundColor: activeApp.appColor }">
                <h1 class="modal-title fs-5" id="appModalLabel">{{ activeApp.title }}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div
                class="flex-grow-1 d-flex flex-column justify-content-around align-items-center bg-secondary text-light">

                <div class="d-flex fs-2">
                  <a v-if="activeApp.webLink != ''" class="px-3 d-block text-light mdi mdi-web custom-button"
                    :href="activeApp.webLink" target="_blank" :title="activeApp.webLink"></a>
                  <a class="px-3 d-block text-light mdi mdi-github custom-button" :ref="activeApp.githubLink"
                    target="_blank" :title="activeApp.githubLink"></a>
                </div>
                <p class="px-3">{{ activeApp.techStack }}</p>
                <p class="px-3">{{ activeApp.description }} </p>
              </div>

            </div>

          </div>
        </div>


        <!-- <div class="modal-header test" :style="{ backgroundColor: activeApp.appColor }">
          <h1 class="modal-title fs-5" id="appModalLabel">{{ activeApp.title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img :src="activeApp.img" :alt="activeApp.title" class="img-fluid">
          <a href="">{{ activeApp.githubLink }}</a>
          <a href="">{{ activeApp.webLink }}</a>
          <p>{{ activeApp.techStack }}</p>

          <p>{{ activeApp.description }}</p>

        </div> -->
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
img {
  object-fit: cover;
  object-position: center;
  max-height: 50vh;
}

.modal-shadow {
  box-shadow: 0px 0px 256px rgba(0, 0, 0, 0.555);
}
</style>