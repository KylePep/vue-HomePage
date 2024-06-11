<script setup>
const props = defineProps(['org', 'img', 'title', 'description', 'techStack', 'webLink', 'githubLink'])
</script>


<template>

  <div class="row position-relative">
    <div class="col-4 application-card">

      <div class=" card-hover">

        <img :src="props.img" class="" alt="...">

      </div>
    </div>

    <div class="col-4 d-flex flex-column text-light text-center">
      <h4>{{ props.title }}</h4>
      <a href="">{{ props.githubLink }}</a>
      <a href="">{{ props.webLink }}</a>
      <p>{{ props.techStack }}</p>
    </div>

    <div class="col-4 text-light">
      <p>{{ props.description }}</p>
    </div>

    <i class="col-12 underline"></i>
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
