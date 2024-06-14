<script setup>

</script>


<template>
  <div class="container text-light">
    <div class="row top-row">


      <div class="col-12 col-md-6">
        <div class="row g-3">


          <div class="col-12 mt-5">
            <h3 class="text-center">
              <p class="fs-5 fw-normal mb-4">EXPERT IN FIELD</p>
              <p class="fs-2">WHERE I AM? LET'S FIND OUT!</p>
            </h3>
          </div>

          <div class="col-12 m-auto separation mt-5"></div>

          <div class="col-12 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi accusamus accusantium error provident, commodi
            expedita harum aperiam animi id quia tempora consequatur labore quisquam possimus, ratione quis qui
            blanditiis
            ducimus!
          </div>

          <div class="col-12">
            <div class="row">
              <div class="col-12">
                <p><i class="mdi mdi-cellphone"></i> (775) 304 6480</p>
                <p><i class="mdi mdi-email"></i> kylepeppersack@hotmail.com</p>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="row g-3">

          <div class="col-12 mt-5">
            DROP ME A MESSAGE
          </div>

          <div class="col-12">

            <form class="mt-4 mt-md-0">

              <div class="form-group">
                <!-- <label for="name">NAME</label> -->
                <input class="form-control" type="text" placeholder="NAME" />
              </div>

              <div class="form-group">
                <!-- <label for="email">E-Mail</label> -->
                <input class="form-control" type="email" placeholder="E-Mail" />
              </div>

              <div class="form-group">
                <!-- <label for="message">MESSAGE</label> -->
                <textarea class="form-control" name="Message" id="Message" placeholder="MESSAGE"></textarea>
              </div>

              <div class="form-group">
                <!-- <label for="submit">CONTACT ME</label> -->
                <button type="submit" class="form-control">CONTACT ME</button>
              </div>
            </form>

          </div>
        </div>
      </div>


    </div>
  </div>
</template>


<style lang="scss" scoped>
/* -----------------------
  Form 
----------------------- */
.form-control {
  border-radius: 0;
}

.form-control:focus {
  box-shadow: none;
}

.form-group {
  position: relative;
  margin-bottom: 25px;
}

// .form-group>label {
//   text-transform: uppercase;
//   font-size: 10px;
//   color: #a1a2a3;
//   transform-origin: 0 0;
//   transform: scale(1.4);
//   pointer-events: none;
//   position: relative;
//   z-index: 5;
// }

// .form-group>input {
//   width: 100%;
// }

.form-group>label {
  transition: transform 0.4s;
  transform-origin: 0 0;
  transform: scale(1.4) translateY(20px);
}

// .form-group.not-empty>label {
//   transform: none;
// }

// /*------------------------------
// 	Form
// ------------------------------*/
textarea {
  resize: none;
}

input::placeholder,
textarea::placeholder {
  color: var(--bs-light);
}

.form-control {
  border: 0;
  border-bottom: 1px solid #a1a2a3;
}

.form-control,
.form-control:focus,
.form-control:focus:hover {
  color: var(--bs-success);
  background-color: var(--bs-secondary);
  outline: none;
}

.form-control:focus,
.form-control:focus:hover {
  border-bottom: 1px solid var(--bs-success);
}

.top-row {
  margin-top: 5rem;
}

.separation {
  margin: 1rem 0rem 1rem 0rem;
  width: 50px;
  border-bottom: solid var(--bs-success) 4px;
}
</style>