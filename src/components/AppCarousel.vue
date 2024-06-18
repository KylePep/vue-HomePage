<script setup>
import { AppState } from "@/AppState.js";
import { computed } from "vue";


const activeAppImg = computed(() => AppState.activeApp.img)

</script>


<template>
  <div id="carouselExample" class="carousel slide">

    <div class="carousel-inner">
      <div v-for="appImg, index in activeAppImg" :key="index" :class="[index == 0 ? 'active' : '']"
        class="carousel-item">
        <div class="w-100">
          <img :src="appImg" alt="...">
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>


<style lang="scss" scoped>
.carousel-item {
  max-height: 416px;
}

img {
  width: 100%;
  height: 416px;
  object-fit: cover;
  object-position: center;
}
</style>