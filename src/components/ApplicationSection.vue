<script setup></script>


<template>
  <div class="container">
    <div class="row g-2">

      <div v-for="index in 6" :key="index" class="col-12 col-lg-4 alt-border-clr position-relative">
        <div class="application-card d-flex flex-column justify-content-end mb-5">
          <div class="text-light">
            <h4>The Title of the app</h4>
            <p>A breif description of the app</p>
          </div>

        </div>
        <div class=" card-hover">
          <img src="../assets/images/business.jpg" class="" alt="...">
        </div>
      </div>

    </div>
  </div>
</template>


<style lang="scss" scoped>
.application-card {
  display: block;
  min-height: 384px;
  width: 100%;
  padding: 5%;
}

.card-hover {
  padding: 2rem;
  margin-left: 5%;
  background-color: var(--bs-success);
  width: 90%;
  height: 256px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.297);
}



.alt-border-clr:nth-child(even) {
  >.card-hover {
    background-color: var(--bs-secondary);
  }
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
