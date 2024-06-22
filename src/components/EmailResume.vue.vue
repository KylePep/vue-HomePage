<script setup>
import { ref } from "vue";
import emailjs from '@emailjs/browser';
import Pop from "@/utils/Pop.js";
import { logger } from "@/utils/Logger.js";


const userEmail = ref({})
function sendResume() {
  let params = {
    user_email: userEmail.value.email_id,
    to_name: userEmail.value.email_id,
    from_name: 'Kyle Peppersack'
  }
  emailjs.send("service_mwyiktp", "template_us6a49b", params).then(
    () => {
      Pop.success(`My resume is on its way!`)
      logger.log('SUCCESS!');
    },
    (error) => {
      logger.log('FAILED...', error.text);
    },
  )
  userEmail.value = {}
}
</script>


<template>
  <form @submit.prevent="sendResume()" class="row g-3">

    <div class="col-12 col-md-6">
      <label for="exampleInputEmail1" class="form-label d-none ">Email address</label>
      <input type="email" v-model="userEmail.email_id" class="form-control input-hero py-3 fs-5 rounded-1"
        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="EMAIL">
    </div>

    <div class="col-12 col-md-6">
      <button type="submit" class="w-100 btn-hero rounded-1 py-3 fs-5 fw-semibold">GET MY
        RESUME</button>
    </div>

    <div id="emailHelp" class="text-light col-12 col-md-6 mt-3">* Get my resume directly in your mailbox</div>
  </form>
</template>


<style lang="scss" scoped>
::placeholder {
  color: var(--bs-light);
}

.input-hero {
  color: var(--bs-light);
  border: 3px solid var(--bs-light);
  background-color: transparent;
}

.input-hero:focus {
  box-shadow: 0px 0px 4px var(--bs-success);
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
</style>
