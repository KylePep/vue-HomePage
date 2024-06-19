<template>
  <div class="container text-light">
    <div class="row">
      <div class="" :class="[page == 'Home' ? 'col-12 col-md-6' : 'col-12']">

        <div class="row g-2">
          <div class="col-12 ">
            <h3>
              <p class="fs-5 fw-normal">About Me</p>
              <p class="fs-2">I'M A FULL STACK DEVELOPER</p>
            </h3>
          </div>
          <div class="col-12 separation"></div>
        </div>

      </div>


      <div :class="[page == 'Home' ? 'col-12 col-md-6' : 'col-12']">
        <div class="row g-5">

          <div v-if="route.name == 'Home'" class="col-12">Hi, my names Kyle Peppersack. You've probably noticed because
            it's inescapably attached to
            a sticky-top navbar. I'm a full-stack developer and If you've found my landing page it means I'm looking for
            a job.</div>
          <div v-if="route.name == 'Home'" class="col-12 ">I'm trying to change careers and if you've never done that
            it's rough. I work tirelessly
            on my weekends, I eat my lunch on my break so I can program for my entire lunch. My point is, is that I'm
            taking this seriously and I'm pretty good at it too.</div>
          <!--  -->
          <div v-if="route.name == 'About'" class="col-12">Hello again, Thanks for making it this far!</div>
          <div v-if="route.name == 'About'" class="col-12">I've been a retail manager multiple times and while I was
            learning valuable soft skills and exercising accountability I was always working on something. That
            something was usually coding.</div>
          <div v-if="route.name == 'About'" class="col-12 ">I've spent countless hours working on games using Game Maker
            Studios, I started with a drag & drop tutorial in highschool. After a while I was writing scripts and
            dreaming up games. I actually made one to ask my now wife to prom. It's always been a hobby until I went to
            CodeWorks, I thrived while coding every day and I'm going to make this my career.</div>

          <div class="col-6 text-start fw-semibold ">
            <p>FIND ME ON</p>

            <div class="d-flex">
              <a class="circle position-relative me-1" href="https://www.linkedin.com/in/kyle-peppersack"
                target="_blank">
                <i type="button"
                  class="position-absolute mdi mdi-linkedin top-50 start-50 translate-middle me-5  fs-1"></i>
              </a>
              <a class="circle position-relative" href="https://github.com/KylePep" target="_blank">
                <i type="button"
                  class="position-absolute mdi mdi-github top-50 start-50 translate-middle me-5  fs-1"></i>
              </a>
            </div>
          </div>

        </div>

      </div>



    </div>



  </div>


</template>


<script setup>
import { useRoute } from "vue-router";

const route = useRoute()
const page = route.name;
</script>


<style lang="scss" scoped>
.circle {
  display: block;
  width: 52px;
  height: 52px;
  scale: .9;
  background-color: var(--bs-light);
  color: var(--bs-secondary);
  border-radius: 50%;
  transition: all 300ms ease-in-out;
}

.circle:hover {
  scale: 1;
  background-color: var(--bs-secondary);
  color: var(--bs-light);
  border-radius: 50%;
}

.separation {
  margin: 1rem 0rem 1rem 0rem;
  width: 50px;
  border-bottom: solid var(--bs-success) 4px;
}
</style>