<script setup></script>


<template>
  <div class="container">
    <div class="row">
      <div class="col-12">

        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>

          <div class="carousel-inner">

            <div v-for="index in 3" :key="index" :class="[index == 1 ? 'active' : '']" class="carousel-item container">
              <div class="carousel-content row d-flex flex-column">
                <div class=" col d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="https://images.unsplash.com/photo-1624797432677-6f803a98acb3?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    class="test-img" alt="...">
                </div>

                <div class="d-flex flex-column align-items-center col text-center">
                  <h5 class="fw-bold"> {{ index }} Testimonials Name</h5>
                  <p class="carousel-text">Some representative placeholder content for the first slide. Lorem ipsum
                    dolor sit
                    amet consectetur
                    adipisicing elit. Eveniet voluptas numquam debitis ab distinctio aspernatur est magnam quas qui
                    libero!</p>
                </div>

              </div>
            </div>

          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span class="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.carousel-content {
  background-color: var(--bs-success);
  height: 448px;
}

.carousel-inner:nth-child(odd) {
  >.carousel-content {
    background-color: var(--bs-secondary);
  }
}

.carousel-text {
  max-width: 50vw;
}

.test-img {
  height: 128px;
  width: 128px;
  border-radius: 50%;
  object-position: top;
  object-fit: cover;
}
</style>