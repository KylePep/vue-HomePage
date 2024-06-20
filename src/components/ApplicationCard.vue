<script setup>
import { useRoute } from "vue-router";
import AppModal from "./AppModal.vue"
import { ICON_LIST } from '../../shared/constants/index.js'

const props = defineProps({
  org: String,
  app: Object,
  borderColor: String
})

const route = useRoute();

</script>


<template>

  <div class="row">
    <div class="application-card position-relative"
      :class="[props.org == 'list' ? 'col-12 col-md-6 col-lg-4' : 'col-12']">

      <AppModal button="true" modal="false" :content="props.app" :accentColor="props.borderColor">
        <template #icon>
          <div class="card-hover" :class="[props.org == 'list' ? 'card-transform' : '']"
            :style="{ backgroundColor: props.borderColor }">
            <img :src="props.app.img[0]" class="app-img w-100 bg-dark" :alt="props.app.title">
          </div>
        </template>
      </AppModal>

    </div>

    <div class=" d-flex flex-column text-light"
      :class="[props.org == 'list' ? 'col-12 col-md-3 col-lg-4 text-center' : 'col-12 text-center']">

      <h4 class="mt-3 mt-md-0">{{ props.app.title }}</h4>

      <div class="d-flex justify-content-center">
        <a v-if="props.org == 'list' && props.app.webLink != ''" :href="props.app.webLink" target="_blank"
          :title="props.app.webLink" class="mdi mdi-web fs-1  text-light me-3 custom-button"></a>
        <a v-if="props.org == 'list'" :href="props.app.githubLink" target="_blank" :title="props.app.githubLink"
          class="mdi mdi-github fs-1  text-light custom-button"></a>
      </div>

      <div v-if="route.name != 'Home' && route.name != 'About'"
        class="row flex-grow-1 align-items-center justify-content-center mx-5">

        <div v-if="props.app.frontEnd != ''" class="icon-img"
          :class="[props.org == 'list' ? 'col-4 mt-2 mt-md-0 ' : 'col-3 mt-2']">
          <img v-for="item in props.app.frontEnd" :key="item" :src="ICON_LIST[item]" :title="item">
        </div>

        <div v-for="item in props.app.backEnd" :key="item" class="d-none d-md-block icon-img"
          :class="[props.org == 'list' ? 'col-4 mt-2 mt-md-0 ' : 'col-3 mt-2']">
          <img :src="ICON_LIST[item]" :title="item">
        </div>

        <div v-if="props.app.dataBase != ''" class=" icon-img"
          :class="[props.org == 'list' ? 'col-4 mt-2 mt-md-0 ' : 'col-3 mt-2']">
          <img :src="ICON_LIST[props.app.dataBase]" :title="props.app.dataBase">
        </div>

        <div v-for="item in props.app.languages" :key="item" class=" icon-img"
          :class="[props.org == 'list' ? 'col-4 mt-2 mt-md-0 ' : 'col-3 mt-2']">
          <img :src="ICON_LIST[item]" :title="item">
        </div>

        <div v-for="item in props.app.cssFrameworks" :key="item" class="icon-img d-none d-md-block "
          :class="[props.org == 'list' ? 'col-4 mt-2 mt-md-0 ' : 'col-3 mt-2']">
          <img :src="ICON_LIST[item]" :title="item">
        </div>
      </div>

    </div>

    <div class=" text-light" :class="[props.org == 'list' ? 'col-12 col-md-3 col-lg-4 text-center' : 'col-12']">
      <p v-if="props.org == 'list'" class="d-none d-md-block">{{ props.app.description }}</p>
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
  width: calc(100% - 2rem);
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

.app-img {
  height: 100%;
  object-fit: cover;
  object-position: top;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.297);
}

.icon-img {
  >img {
    background-color: var(--bs-secondary);
    padding: 4px;
    border-radius: 4px;
    height: 48px;
    width: 48px;
    object-fit: scale-down;
    object-position: center;
  }
}

.underline {
  margin-bottom: 3rem;
  margin-top: 3rem;
  border-bottom: solid 1px var(--bs-light);
}
</style>
