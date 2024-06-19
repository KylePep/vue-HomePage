<script setup>
import BackEnd from "./icons/BackEnd.vue";
import FrontEnd from "./icons/FrontEnd.vue";
import UIDestign from "./icons/UIDestign.vue";


</script>
<template>
  <div class="container">
    <div class="row">

      <div class="col-12 col-md-4 mb-5 mb-md-0 ">
        <div class="card rounded-1  bg-secondary text-light h-100">
          <div class="card-img">
            <FrontEnd class="svg" />
          </div>
          <div class="card-body d-flex flex-column justify-content-around align-items-center">
            <div>
              <h5 class="card-title">Front End</h5>
              <p class="card-text mb-4 mx-0 mx-sm-5">I’m passionate about crafting sleek and responsive web interfaces
                with
                Vue.js
                and React. Whether it’s building dynamic UIs or optimizing performance, I’ve got you covered.</p>
            </div>
            <RouterLink :to="{ name: 'Portfolio' }" class="btn-circular position-relative">
              <i class="mdi mdi-arrow-right-thick fs-3 position-absolute start-50 top-50 translate-middle"></i>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 mb-5 mb-md-0">
        <div class="card rounded-1 bg-success h-100">
          <div class="card-img">
            <BackEnd class="svg text-secondary" />
          </div>
          <div class="card-body d-flex flex-column justify-content-around align-items-center">
            <div>
              <h5 class="card-title">Back End</h5>
              <p class="card-text mb-4 mx-0 mx-sm-5">I love diving into the backend with MongoDB and MySQL to create
                robust and scalable databases. From crafting efficient queries to ensuring data integrity, I’ve got it
                covered.</p>
            </div>
            <RouterLink :to="{ name: 'Portfolio' }" class="btn-circular bg-secondary position-relative">
              <i class="mdi mdi-arrow-right-thick fs-3 position-absolute start-50 top-50 translate-middle"></i>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 mb-5 mb-md-0">
        <div class="card rounded-1  bg-secondary text-light h-100">
          <div class="card-img">
            <UIDestign class="svg" />
          </div>
          <div class="card-body d-flex flex-column justify-content-around align-items-center">
            <div>
              <h5 class="card-title">API Development</h5>
              <p class="card-text mb-4 mx-0 mx-sm-5">I craft robust and scalable APIs to connect your front end with
                your back end effortlessly. Whether it's RESTful services or GraphQL, I've got you covered.</p>
            </div>
            <RouterLink :to="{ name: 'Portfolio' }" class="btn-circular first position-relative"><i
                class="mdi mdi-arrow-right-thick fs-3 position-absolute start-50 top-50 translate-middle"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.btn-circular {
  background-color: var(--bs-success);
  color: var(--bs-dark);
  border-radius: 50%;
  width: 64px;
  height: 64px;

  -webkit-transition: box-shadow 300ms ease-in-out, color 400ms ease-in-out;
  transition: box-shadow 300ms ease-in-out, color 400ms ease-in-out;
}

.btn-circular:hover {
  box-shadow: 0 0 40px 40px var(--bs-primary)inset;
  color: var(--bs-secondary);
  animation: grow 300ms alternate 100ms 1 forwards;
}

@keyframes grow {
  from {
    transform: scale(.75);
  }

  to {
    transform: scale(1);
  }
}

.card {
  min-height: 50vh;
}

.card-img {

  background-size: contain;
  transition: all .5s ease-in-out;
  padding: 2rem;
  height: auto;
  width: 100%;

}

.card-img:hover {
  scale: 1.05;
}

.svg {
  width: 100%;
  height: auto;
  color: var(--bs-success);
}

.card-title {
  text-align: center;
}

.card-text {
  text-align: center;
}
</style>