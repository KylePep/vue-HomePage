<script setup>
import { AppState } from "@/AppState.js";
import { logger } from "@/utils/Logger.js";
import { computed, ref, watch } from "vue";


const activeAppImg = computed(() => AppState.activeApp.img)
// const appStateChange = computed(AppState.activeApp);
let activeImage = ref(activeAppImg.value[0])
logger.log(activeImage.value.length)

function updateBg() {
  const activeElement = document.getElementsByClassName('active');
  logger.log(activeImage, activeElement)
  // activeImage.value = activeElement
}

watch(activeAppImg, () => {
  const carouselItems = document.getElementsByClassName('carousel-item')

  Array.prototype.filter.call(
    carouselItems,
    (carouselItem) => carouselItem.classList.remove('active')
  )

  const firstCarousel = document.getElementById('firstSlide');

  if (!firstCarousel.classList.contains('active')) {
    firstCarousel.classList.add('active')
  }

})


</script>


<template>
  <div class="d-flex flex-column align-items-center justify-content-center flex-grow-1 carousel-background"
    v-bind:style="{ backgroundImage: 'url(' + activeImage + ')' }">

    <div id="carouselExample" class="carousel slide">

      <div class="carousel-inner">
        <div v-for="appImg, index in activeAppImg" :key="index" :class="[index == 0 ? 'active' : '']"
          class="carousel-item" :id="[index == 0 ? 'firstSlide' : '']">
          <div class="img-container d-flex justify-content-center align-items-center">
            <img :src="appImg" alt="...">
          </div>
        </div>
      </div>

      <button @click="updateBg()" class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button @click="updateBg()" class="carousel-control-next" type="button" data-bs-target="#carouselExample"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.carousel-item {
  max-height: 416px;
}

.carousel-background {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.img-container {
  background-color: var(--bs-dark);
  width: 100%;
  height: auto;
  min-height: 416px;
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}
</style>