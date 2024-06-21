<script setup>
import { AppState } from "@/AppState.js";
import { computed, ref, watch } from "vue";


const activeAppImg = computed(() => AppState.activeApp.img)

let bgSelector = 0

let activeImage = ref(activeAppImg.value[bgSelector])
// logger.log(activeImage.value)
watch(activeAppImg, () => {
  updateBg('reset')
})

function updateBg(direction) {

  if (direction == 'reset') {
    bgSelector = 0
  }

  if (direction == '+') {
    if (bgSelector + 1 >= activeAppImg.value.length) {
      bgSelector = 0
    } else {
      bgSelector += 1
    }
  } else if (direction == '-') {
    if (bgSelector - 1 < 0) {
      bgSelector = activeAppImg.value.length - 1
    } else {
      bgSelector -= 1
    }
  }

  activeImage.value = activeAppImg.value[bgSelector]

  // logger.log('[bgSelector]', bgSelector, direction, '[activeImage]', activeImage.value)
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
  <div class="d-flex flex-column flex-grow-1 carousel-background"
    v-bind:style="{ backgroundImage: 'url(' + activeImage + ')' }">
    <div class="d-flex flex-column flex-grow-1 glassmorph justify-content-center">

      <div id="carouselExample" class="carousel slide ">

        <div class="carousel-inner">
          <div v-for="appImg, index in activeAppImg" :key="index" :class="[index == 0 ? 'active' : '']"
            class="carousel-item " :id="[index == 0 ? 'firstSlide' : '']">
            <div class="img-container d-flex justify-content-center align-items-center">
              <img :src="appImg" alt="...">
            </div>
          </div>
        </div>

        <button @click="updateBg('-')" class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button @click="updateBg('+')" class="carousel-control-next" type="button" data-bs-target="#carouselExample"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
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
  transition: all 300ms ease-in-out;
}

.img-container {
  background-color: transparent;
  width: 100%;
  height: auto;
  min-height: 416px;
}

.glassmorph {
  /* From https://css.glass */
  background: rgba(39, 37, 37, 0.71);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9.6px);
  -webkit-backdrop-filter: blur(9.6px);
}

img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
}
</style>