<script setup>
import Pop from "@/utils/Pop.js";
import { ref } from "vue";
import emailjs from '@emailjs/browser';
import { logger } from "@/utils/Logger.js";
import SubmitCelebrate from "./SubmitCelebrate.vue";

const emailData = ref({})
let submitCelebration = ref('none');

function sendMail() {
  let params = {
    from_name: `${emailData.value.name}`,
    email_id: emailData.value.email_id,
    message: emailData.value.message
  }

  emailjs.send("service_mwyiktp", "template_95r6o9j", params).then(
    () => {
      Pop.success(`Thank you for your message!`)
      logger.log('SUCCESS!');
      submitCelebration.value = 'celebrate'
    },
    (error) => {
      logger.log('FAILED...', error.text);
    },
  )
  emailData.value = {}
}
</script>


<template>
  <div class="col-12 fs-2 mt-5 mt-md-3">
    DROP ME A MESSAGE
  </div>

  <div class="col-12">

    <form @submit.prevent="sendMail()" class="mt-4 mt-md-0">

      <div class="form-group">
        <input v-model="emailData.name" required maxlength="50" class="form-control" type="text" placeholder="NAME" />
      </div>

      <div class="form-group">
        <input v-model="emailData.email_id" maxlength="80" required class="form-control" type="email"
          placeholder="E-Mail" />
      </div>

      <div class="form-group">
        <textarea v-model="emailData.message" required maxlength="300" class="form-control" name="Message" id="Message"
          placeholder="MESSAGE"></textarea>
      </div>

      <div class="form-group">
        <button type="submit" class="form-control">SEND</button>
      </div>
    </form>

  </div>

  <div>
    {{ submitCelebration }}
    <SubmitCelebrate :celebration="submitCelebration" />
  </div>
</template>


<style lang="scss" scoped>
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

.form-group>label {
  transition: transform 0.4s;
  transform-origin: 0 0;
  transform: scale(1.4) translateY(20px);
}

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
</style>