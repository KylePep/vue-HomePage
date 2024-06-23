<script setup>
// import TestimonialSection from "@/components/TestimonialSection.vue";
import EmailMe from "@/components/EmailMe.vue";


</script>


<template>
  <div class="container text-light">
    <section class="row top-row">

      <div class="col-12 mt-5">
        <h3 class="">
          <p class="fs-5 fw-normal mb-4">Do you have any questions or just want to say hi?</p>
        </h3>
      </div>

      <div class="col-12 col-md-6">
        <div class="row g-3">




          <div class="col-12">
            <p class="fs-2 text-uppercase"> Use this contact form powered by
              EmailJS!</p>
          </div>

          <div class="col-12 separation"></div>

          <div class="col-12 pe-md-5">
            I'm currently looking for employment or if you have a project you'd like to talk about I'd love to hear from
            you. At present I work over nights so my response time might be early in the day or late at night but I'll
            get back to you as soon as possible.

          </div>

          <div class="col-12 pe-md-5">
            Will something cool happen when you send me a message? Only one way to find out!
          </div>

          <div class="col-12">
            <div class="row">
              <div class="col-12 d-flex flex-column align-items-start">
                <!-- <a class="selectable text-light mb-2 py-1 px-2" href="tel:7753046480"><i class="mdi mdi-cellphone"></i>
                  (775)
                  304 6480</a> -->
                <a class="selectable text-light py-1 pe-2" href="mailto:kylepeppersack@hotmail.com"><i
                    class="mdi mdi-email "></i>
                  kylepeppersack@hotmail.com</a>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="row g-3">
          <EmailMe />
        </div>
      </div>

    </section>

    <!-- <section class="row">
      <div class="col-12 my-5">
        <TestimonialSection />
      </div>
    </section> -->
  </div>
</template>


<style lang="scss" scoped>
.top-row {
  margin-top: 5rem;
}

.separation {
  margin: 1rem 0rem 1rem 0.5rem;
  width: 50px;
  border-bottom: solid var(--bs-success) 4px;
}
</style>