<script setup>

</script>
<template>
  <div class="container">
    <div class="row">

      <div class="col-12 col-md-4 mb-5 mb-md-0 ">
        <div class="card rounded-1  bg-secondary text-light h-100">
          <img src="../assets/images/product-design.png" class="card-img" alt="...">
          <div class="card-body d-flex flex-column justify-content-around align-items-center">
            <div>
              <h5 class="card-title">Front End</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quod.</p>
            </div>
            <RouterLink :to="{ name: 'Portfolio' }" class="btn-circular position-relative">
              <i class="mdi mdi-arrow-right-thick fs-3 position-absolute start-50 top-50 translate-middle"></i>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 mb-5 mb-md-0">
        <div class="card rounded-1 bg-success h-100">
          <img src="../assets/images/graphic-design.png" class="card-img" alt="...">
          <div class="card-body d-flex flex-column justify-content-around align-items-center">
            <div>
              <h5 class="card-title">Back End</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quod.</p>
            </div>
            <RouterLink :to="{ name: 'Portfolio' }" class="btn-circular bg-secondary position-relative">
              <i class="mdi mdi-arrow-right-thick fs-3 position-absolute start-50 top-50 translate-middle"></i>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4 mb-5 mb-md-0">
        <div class="card rounded-1  bg-secondary text-light h-100">
          <img src="../assets/images/web-design.png" class="card-img" alt="...">
          <div class="card-body d-flex flex-column justify-content-around align-items-center">
            <div>
              <h5 class="card-title">UI Design</h5>
              <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quod.</p>
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
  transition: all .5s ease-in-out;
  padding: 2rem;
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