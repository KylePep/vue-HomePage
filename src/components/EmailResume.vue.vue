<script setup></script>


<template>
  <form class="row g-3">

    <div class="col-12 col-md-6">
      <label for="exampleInputEmail1" class="form-label d-none ">Email address</label>
      <input type="email" class="form-control py-3 fs-5 rounded-1" id="exampleInputEmail1" aria-describedby="emailHelp"
        placeholder="EMAIL">
    </div>

    <div class="col-12 col-md-6">
      <button type="submit" class="w-100 btn-hero rounded-1 py-3 fs-5 fw-semibold">GET MY
        RESUME</button>
    </div>

    <div id="emailHelp" class="text-light col-12 col-md-6 mt-3">* Get my resume directly in your mailbox</div>
  </form>
</template>


<style lang="scss" scoped>
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
