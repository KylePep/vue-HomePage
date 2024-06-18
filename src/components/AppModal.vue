<script setup>
import { AppState } from "@/AppState.js";
import { computed } from "vue";
import AppCarousel from '../components/AppCarousel.vue'

const props = defineProps(['button', 'modal', 'content'
])

const activeApp = computed(() => AppState.activeApp)

function isColorDark(color) {
  // Remove the '#' if it's there
  let colorChecked = color.replace('#', '');

  // Convert to RGB
  const r = parseInt(colorChecked.substring(0, 2), 16);
  const g = parseInt(colorChecked.substring(2, 4), 16);
  const b = parseInt(colorChecked.substring(4, 6), 16);

  // Calculate brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return true if dark, false if light
  return brightness < 128;
}

const textColor = computed(() => {
  return isColorDark(activeApp.value.appColor) ? '#ffffff' : '#000000'
})


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
  <div v-if="props.modal == 'true'">
    <div class="modal fade" id="appModal" tabindex="-1" aria-labelledby="appModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content rounded-0 modal-shadow">
          <div class="container m-0">
            <div class="row p-0 ">

              <div class="d-block d-md-none col-12 d-flex justify-content-between align-items-center p-3"
                :style="{ backgroundColor: activeApp.appColor }">

                <h1 class="modal-title fs-5" :style="{ color: textColor }" id="appModalLabel">{{ activeApp.title }}
                </h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

              </div>

              <div class=" col-12 col-md-6 px-0">
                <AppCarousel />
              </div>

              <div class=" col-12 col-md-6 px-0 d-flex flex-column">

                <div class="d-none d-md-flex justify-content-between p-3 align-items-center"
                  :style="{ backgroundColor: activeApp.appColor }">
                  <h1 class="modal-title fs-5" :style="{ color: textColor }" id="appModalLabel">{{ activeApp.title }}
                  </h1>
                  <button type="button" class="btn  mdi mdi-close py-0 border-0 fs-3" :style="{ color: textColor }"
                    data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div
                  class="flex-grow-1 d-flex flex-column justify-content-around align-items-center bg-secondary text-light">

                  <div class="d-flex fs-2">
                    <a v-if="activeApp.webLink != ''" class="px-3 d-block text-light mdi mdi-web custom-button"
                      :href="activeApp.webLink" target="_blank" :title="activeApp.webLink"></a>
                    <a class="px-3 d-block text-light mdi mdi-github custom-button" :ref="activeApp.githubLink"
                      target="_blank" :title="activeApp.githubLink"></a>
                  </div>
                  <p v-for="item in activeApp.frontEnd" :key="item" class="px-3">{{ item }}</p>
                  <div v-if="activeApp.backEnd != ''">
                    <p v-for="item in activeApp.backEnd" :key="item" class="px-3">{{ item }}</p>
                  </div>
                  <div v-if="activeApp.dataBase != ''">
                    <p class="px-3">{{ activeApp.dataBase }}</p>
                  </div>
                  <p v-for="item in activeApp.languages" :key="item" class="px-3">{{ item }}</p>
                  <p v-for="item in activeApp.cssFrameworks" :key="item" class="px-3">{{ item }}</p>
                  <p class="px-3">{{ activeApp.description }} </p>
                </div>

              </div>

            </div>
          </div>

        </div>
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