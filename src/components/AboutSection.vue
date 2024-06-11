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

      <!-- <div class="col-6">
        <img src="../assets/images/internet.jpg" class="img-fluid" alt="">
      </div> -->


      <div :class="[page == 'Home' ? 'col-12 col-md-6' : 'col-12']">
        <div class="row g-5">
          <div class="col-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            ratione possimus,
            vitae
            eveniet dolorem beatae! Dolorum voluptatem ab, quo quod deserunt dolore impedit eos perferendis aliquid illo
            similique, saepe eaque.</div>
          <div class="col-12 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam debitis
            temporibus impedit
            laudantium similique dolore, alias, minima, dignissimos asperiores repellendus suscipit? Animi, voluptates
            a.
            Ad
            nemo quaerat amet at et.</div>

          <div class="col-6 text-start fw-semibold ">
            <p>FIND ME ON</p>

            <div class="d-flex">
              <i class="circle position-relative">
                <i type="button"
                  class="position-absolute mdi mdi-linkedin top-50 start-50 translate-middle me-5  fs-1"></i>
              </i>
            </div>
          </div>

        </div>

      </div>



    </div>



  </div>


</template>


<script setup>
import { useRoute } from "vue-router";

const route = useRoute
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