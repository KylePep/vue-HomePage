<script setup>
import AnimatedBackground from './AnimatedBackground.vue'
</script>

<template>
  <div class="container-fluid position-relative">
    <AnimatedBackground />
    <div class="hero-content row position-relative">
      <div class="container hero-container position-absolute start-50 translate-middle">

        <div class="row">

          <div class="col-12">

            <div class="row">

              <h1 class="col-12">HELLO</h1>


              <h2 class="col-12">I'M A WEB DEVELOPER</h2>
              <p class="text-center text-light">- and I'm looking for a job -</p>

            </div>

            <form class="row g-3">

              <div class="col-12 col-md-6">
                <label for="exampleInputEmail1" class="form-label d-none ">Email address</label>
                <input type="email" class="form-control py-3 fs-5 rounded-1" id="exampleInputEmail1"
                  aria-describedby="emailHelp" placeholder="EMAIL">
              </div>

              <div class="col-12 col-md-6">
                <button type="submit" class="w-100 btn-hero rounded-1 py-3 fs-5 fw-semibold">GET MY
                  RESUME</button>
              </div>

              <div id="emailHelp" class="text-light col-12 col-md-6 mt-3">* Get my resume directly in your mailbox</div>
            </form>

          </div>

        </div>
      </div>
    </div>

  </div>

</template>



<style lang="scss" scoped>
.hero-content {
  padding-top: 40vh;
}

.hero-container {
  width: 330px;
}

h1 {
  font-size: 6.5rem;
  font-weight: bolder;
  text-align: center;
  color: var(--bs-light);
  padding: 0;
}

h2 {
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  color: var(--bs-light);
  padding: 0;
}

.btn-hero {
  display: inline-block;
  padding: 0.9rem 1.8rem;
  font-size: 16px;
  font-weight: 700;
  color: var(--bs-light);
  border: 3px solid var(--bs-light);
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  z-index: 1;
  font-family: inherit;
}

.btn-hero::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bs-success);
  transform: translateX(-100%);
  transition: all .3s;
  z-index: -1;
}

.btn-hero:hover::before {
  transform: translateX(0);
}

@media screen and (min-width: 768px) {
  .hero-container {
    width: 640px;
  }

  h1 {
    font-size: 13rem;
  }

  h2 {
    font-size: 3.55rem;
  }
}
</style>