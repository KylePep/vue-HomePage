<script setup>

</script>
<template>
  <div class="container">
    <div class="row">

      <div class="col-12 col-md-4 mb-5 mb-md-0 ">
        <div class="card bg-secondary text-light h-100">
          <img src="../assets/images/frontEnd.png" class="card-img" alt="...">
          <div class="card-body d-flex flex-column justify-content-between align-items-center">
            <h5 class="card-title">Front End</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quod.</p>
            <a href="#" class="btn-circular position-relative">
              <i class="mdi mdi-arrow-right-thick fs-3 position-absolute start-50 top-50 translate-middle"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 mb-5 mb-md-0">
        <div class="card bg-success h-100">
          <img src="../assets/images/frontEnd.png" class="card-img" alt="...">
          <div class="card-body d-flex flex-column justify-content-between align-items-center">
            <h5 class="card-title">Back End</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quod.</p>
            <a href="#" class="btn-circular bg-secondary text-light position-relative">
              <i class="mdi mdi-arrow-right-thick fs-3 position-absolute start-50 top-50 translate-middle"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 mb-5 mb-md-0">
        <div class="card  bg-secondary text-light h-100">
          <img src="../assets/images/frontEnd.png" class="card-img" alt="...">
          <div class="card-body d-flex flex-column justify-content-between align-items-center">
            <h5 class="card-title">UI Design</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quod.</p>
            <a href="#" class="btn-circular first position-relative"><i
                class="mdi mdi-arrow-right-thick fs-3 position-absolute start-50 top-50 translate-middle"></i></a>
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
  color: var(--bs-light);
  scale: 1.1;
}

.card-img {
  transition: all .5s ease-in-out;
}

.card-img:hover {
  scale: 1.05;
}

.card-title {
  text-align: center;
}

.card-text {
  text-align: center;
}
</style>