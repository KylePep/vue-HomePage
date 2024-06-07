<script setup>

</script>
<template>
  <div class="container">
    <div class="row">

      <div class="col-12 col-md-4">
        <div class="card bg-secondary text-light h-100">
          <img src="../assets/images/business.jpg" class="card-img-top" alt="...">
          <div class="card-body d-flex flex-column justify-content-between align-items-center">
            <h5 class="card-title">Front End</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quod.</p>
            <a href="#" class="btn-circular btn btn-success position-relative">
              <i class="mdi mdi-arrow-right fs-1 position-absolute start-50 top-50 translate-middle"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="card bg-success h-100">
          <img src="../assets/images/internet.jpg" class="card-img-top" alt="...">
          <div class="card-body d-flex flex-column justify-content-between align-items-center">
            <h5 class="card-title">Back End</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quod.</p>
            <a href="#" class="btn-circular btn btn-secondary position-relative">
              <i class="mdi mdi-arrow-right fs-1 position-absolute start-50 top-50 translate-middle"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="card  bg-secondary text-light h-100">
          <img src="../assets/images/learning.jpg" class="card-img-top" alt="...">
          <div class="card-body d-flex flex-column justify-content-between align-items-center">
            <h5 class="card-title">UI Design</h5>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quod.</p>
            <a href="#" class="btn-circular btn btn-success position-relative"><i
                class="mdi mdi-arrow-right fs-1 position-absolute start-50 top-50 translate-middle"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.btn-circular {
  border-radius: 50%;
  width: 80px;
  height: 80px;
}

.card-title {
  text-align: center;
}

.card-text {
  text-align: center;
}
</style>