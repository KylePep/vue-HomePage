<script setup>
import AppModal from "./AppModal.vue"

const props = defineProps({
  org: String,
  img: String,
  title: String,
  description: String,
  techStack: Array,
  webLink: String,
  githubLink: String,
})

// const props = defineProps(['org', 'img', 'title', 'description', 'techStack', 'webLink', 'githubLink'])


</script>


<template>

  <div class="row">
    <div class="application-card position-relative"
      :class="[props.org == 'list' ? 'col-12 col-md-6 col-lg-4' : 'col-12']">

      <AppModal button="true" modal="false" :content="props">
        <template #icon>
          <div class="card-hover" :class="[props.org == 'list' ? 'card-transform' : '']">
            <img :src="props.img" class="" :alt="props.title">
          </div>
        </template>
      </AppModal>

    </div>

    <div class=" d-flex flex-column text-light"
      :class="[props.org == 'list' ? 'col-12 col-md-3 col-lg-4 text-center' : 'col-12 text-center']">



      <h4 class="mt-3 mt-md-0">{{ props.title }}</h4>
      <a v-if="props.org == 'list'" href="">{{ props.githubLink }}</a>
      <a v-if="props.org == 'list'" href="">{{ props.webLink }}</a>
      <p v-for="tech in props.techStack" :key="tech">{{ tech }}</p>
    </div>

    <div class=" text-light" :class="[props.org == 'list' ? 'col-12 col-md-3 col-lg-4 text-center' : 'col-12']">
      <p v-if="props.org == 'list'">{{ props.description }}</p>
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
  background-color: var(--bs-success);
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

@media screen and (min-width: 576px) {
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
