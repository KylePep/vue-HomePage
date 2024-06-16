<script setup>
import { useRoute } from "vue-router";
import AppModal from "./AppModal.vue"

const props = defineProps({
  org: String,
  app: Object
})

// const props = defineProps(['org', 'img', 'title', 'description', 'techStack', 'webLink', 'githubLink'])

const route = useRoute();

</script>


<template>

  <div class="row">
    <div class="application-card position-relative"
      :class="[props.org == 'list' ? 'col-12 col-md-6 col-lg-4' : 'col-12']">

      <AppModal button="true" modal="false" :content="props.app">
        <template #icon>
          <div class="card-hover " :class="[props.org == 'list' ? 'card-transform' : '']"
            :style="{ backgroundColor: props.app.appColor }">
            <img :src="props.app.img" class="" :alt="props.app.title">
          </div>
        </template>
      </AppModal>

    </div>

    <div class=" d-flex flex-column text-light"
      :class="[props.org == 'list' ? 'col-12 col-md-3 col-lg-4 text-center' : 'col-12 text-center']">



      <h4 class="mt-3 mt-md-0">{{ props.app.title }}</h4>
      <div class="d-flex justify-content-center">
        <a v-if="props.org == 'list'" :href="props.app.webLink" target="_blank" :title="props.app.webLink"
          class="mdi mdi-web fs-3 text-light me-3"></a>
        <a v-if="props.org == 'list'" :href="props.app.githubLink" target="_blank" :title="props.app.githubLink"
          class="mdi mdi-github fs-3 text-light"></a>
      </div>
      <div v-if="route.name != 'Home' && route.name != 'About'" class="d-flex flex-column justify-content-center">
        <div v-for="tech, index in props.app.techStack" :key="index" class="me-1">{{ tech }}
        </div>
      </div>
    </div>

    <div class=" text-light" :class="[props.org == 'list' ? 'col-12 col-md-3 col-lg-4 text-center' : 'col-12']">
      <p v-if="props.org == 'list'">{{ props.app.description }}</p>
    </div>


    <i v-if="props.org == 'list'" class="col-12 underline"></i>
  </div>


</template>


<style lang="scss" scoped>
.application-card {
  min-height: 256px;
}

.card-hover {
  padding: 2rem;
  // background-color: var(--bs-success);
  border-radius: 2px;
  height: 256px;
  position: absolute;
  top: 0;
  transition: top ease 0.5s;

}

.card-transform {
  left: 50%;
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
}

@media screen and (min-width: 768px) {
  .card-transform {
    left: 0;
    transform: none;
  }
}

.card-hover:hover {
  cursor: pointer;
  top: -10px;
}

img {
  height: 100%;
  object-fit: cover;
  object-position: center;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.297);
}

.underline {
  margin-bottom: 3rem;
  margin-top: 3rem;
  border-bottom: solid 1px var(--bs-light);
}
</style>
