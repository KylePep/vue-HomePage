<script setup></script>


<template>
  <div class="container">
    <div class="row">

      <div class="col-12 col-lg-3 position-relative">
        <div class="application-card mb-5"></div>
        <div class=" card-hover">
          <img src="../assets/images/business.jpg" class="" alt="...">
        </div>
        <!-- <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
            <p class="card-text"><small>Last updated 3 mins ago</small></p>
          </div> -->
      </div>

      <div class="col-12 col-lg-3 position-relative">
        <div class="application-card"></div>
        <div class="  card-hover">
          <img src="../assets/images/business.jpg" class="" alt="...">
        </div>
        <!-- <div class="card-img-overlay">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
            <p class="card-text"><small>Last updated 3 mins ago</small></p>
          </div> -->
      </div>

      <div class="col-12 col-lg-3"></div>
      <div class="col-12 col-lg-3"></div>
      <div class="col-12 col-lg-3"></div>
      <div class="col-12 col-lg-3"></div>
      <div class="col-12 col-lg-3"></div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.application-card,
.card {
  display: block;
  height: 512px;
  width: 100%;
}

img {
  width: 100%;
  min-height: 256px;
  max-height: fit-content;
  border: solid var(--bs-success) 1rem;
  object-fit: cover;
  object-position: center;
}

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
