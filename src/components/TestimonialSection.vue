<script setup>
import { AppState } from "@/AppState.js";
import { computed } from "vue";

const testimonyData = computed(() => AppState.testimonyData);
</script>


<template>
  <div class="container text-dark">
    <div class="row">
      <div class="col-12">

        <div id="carouselExampleCaptions" class="carousel slide">
          <ol class="carousel-indicators mb-0 mb-md-5 pb-3 pb-md-0">

            <li type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></li>

            <li type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></li>

            <li type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3">
            </li>
          </ol>

          <div class="carousel-inner">

            <div v-for="testimonyItem, index in testimonyData" :key="index" :class="[index == 0 ? 'active' : '']"
              class="carousel-item container">
              <div class="carousel-content row d-flex flex-column">
                <div
                  class=" col d-flex flex-column align-items-center justify-content-center justify-content-md-end mb-2 mb-md-5">
                  <img :src="testimonyItem.img" class="test-img" alt="...">
                </div>

                <div class="d-flex flex-column align-items-center col text-center">
                  <p class="carousel-text ">{{ testimonyItem.testimony }}</p>
                  <h5 class="fw-semibold "> {{ testimonyItem.name }} - {{ testimonyItem.title }}</h5>
                </div>

              </div>
            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-prev h-100 w-100" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-next h-100 w-100" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
ol.carousel-indicators {
  position: absolute;
  bottom: 0;
  margin: 0;
  left: 0;
  right: 0;
  width: auto;
}

ol.carousel-indicators li,
ol.carousel-indicators li.active {
  float: left;
  width: 16px;
  height: 16px;
  margin-left: 1rem;
  border-radius: 50%;
  border: 0;
  background: var(--bs-light);
}

ol.carousel-indicators li.active {
  background: var(--bs-secondary)
}


.carousel-content {
  background-color: var(--bs-success);
  min-height: 416px;
}

.carousel-inner:nth-child(odd) {
  >.carousel-content {
    background-color: var(--bs-secondary);
  }
}

.carousel-text {
  max-width: 70%;
}


.carousel-prev {
  background: linear-gradient(90deg, rgba(12, 4, 123, 0.25), #ffffff00);
  opacity: 0;
  transition: all 300ms ease-in-out;
}

.carousel-next {
  background: linear-gradient(-90deg, rgba(12, 4, 123, 0.25), #ffffff00);
  opacity: 0;
  transition: all 300ms ease-in-out;
}

.carousel-prev:hover {
  opacity: 1;
}

.carousel-next:hover {
  opacity: 1;

}

.test-img {
  image-rendering: optimizeQuality;
  height: 96px;
  width: 96px;
  border-radius: 50%;
  object-position: 50% 20%;
  object-fit: cover;
}
</style>