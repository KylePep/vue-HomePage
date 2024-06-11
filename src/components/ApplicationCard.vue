<script setup>
const props = defineProps(['org', 'img', 'title', 'description', 'techStack', 'webLink', 'githubLink'])
</script>


<template>

  <div class="row position-relative">
    <div class=" application-card" :class="[props.org == 'list' ? 'col-4' : col - 12]">

      <div class=" card-hover">

        <img :src="props.img" class="" alt="...">

      </div>
    </div>

    <div class=" d-flex flex-column text-light" :class="[props.org == 'list' ? 'col-4 text-center' : col - 12]">

      <h4>{{ props.title }}</h4>
      <a v-if="props.org == 'list'" href="">{{ props.githubLink }}</a>
      <a v-if="props.org == 'list'" href="">{{ props.webLink }}</a>
      <p v-if="props.org == 'list'">{{ props.techStack }}</p>
    </div>

    <div class=" text-light" :class="[props.org == 'list' ? 'col-4' : col - 12]">
      <p>{{ props.description }}</p>
      <p>{{ props.org }}</p>
    </div>

    <i v-if="props.org == 'list'" class="col-12 underline"></i>
  </div>


</template>


<style lang="scss" scoped>
.application-card {
  display: block;
  min-height: 256px;
  // width: 100%;
  // padding: 5%;
}

.card-hover {
  padding: 2rem;
  background-color: var(--bs-success);
  // width: 90%;
  height: 256px;
}

img {
  // width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.297);
}

// .underline-sm {
//   display: block;
//   width: 50%;
//   margin-top: 1rem;
//   margin-bottom: 2rem;
//   border-bottom: solid 1px var(--bs-light);
// }

.underline {
  margin-bottom: 3rem;
  margin-top: 3rem;
  border-bottom: solid 1px var(--bs-light);
}

// .alt-border-clr:nth-child(even) {
//   >.card-hover {
//     background-color: var(--bs-secondary);
//   }
// }

.card-hover {
  min-height: 100px;
  position: absolute;
  top: 0;
  transition: top ease 0.5s;
}

.card-hover:hover {
  cursor: pointer;
  top: -10px;
}
</style>
