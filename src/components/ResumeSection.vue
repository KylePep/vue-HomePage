<script setup>
import { RouterLink } from "vue-router";


</script>

<template>
  <div class="container text-light">
    <div class="row mx-0 mx-md-5">

      <div class="col-12 mb-4 text-start text-lg-center mb-5">
        <h3 class="fs-2">MY RESUME</h3>
      </div>

      <div class="col-12 col-lg-6 ">

        <h4>Profession Ux Design</h4>
        <p>2015 - Present</p>
        <i class="underline-sm d-block d-lg-none"></i>

      </div>

      <div class="col-12 col-lg-6 fs-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, fugit.</p>
      </div>

      <i class="col-12 underline"></i>

      <div class="col-12 col-lg-6">
        <h4>Web Designer</h4>
        <p>2011 - 2015</p>
        <i class="underline-sm d-block d-lg-none "></i>

      </div>

      <div class="col-12 col-lg-6 fs-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, fugit.</p>
      </div>

      <i class="col-12 underline"></i>

      <div class="col-12 col-lg-6">
        <h4>Diploma in graphic design</h4>
        <p>2010</p>
        <i class="underline-sm d-block d-lg-none"></i>
      </div>

      <div class="col-12 col-lg-6 fs-5">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, fugit.</p>
      </div>

      <i class="col-12 underline"></i>

      <div class="col-12 d-flex justify-content-center mt-3">
        <RouterLink :to="{ name: 'Contact' }" class="work-button text-secondary">
          LET'S WORK TOGETHER
        </RouterLink>
      </div>

    </div>
  </div>
</template>




<style lang="scss" scoped>
.resume-row {
  margin: auto;
  width: 60%;
}

.underline-sm {
  display: block;
  width: 50%;
  margin-top: 1rem;
  margin-bottom: 2rem;
  border-bottom: solid 1px var(--bs-light);
}

.underline {
  padding-bottom: 2rem;
  margin-bottom: 4rem;
  border-bottom: solid 1px var(--bs-light);
}

.work-button {
  border: none;
  padding: .5rem 1rem .5rem 1rem;
  background-color: var(--bs-success);
  transition: all 300ms ease-in-out;
}

.work-button:hover {
  background-color: var(--bs-light);
}
</style>