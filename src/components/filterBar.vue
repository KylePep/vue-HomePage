<script setup>
import { AppState } from "@/AppState.js";
import { computed } from "vue";

const emit = defineEmits(['setOrg', 'setFilterBy'])
const props = defineProps(['organizationStyle', 'resultLength'])

let filterBy = computed(() => AppState.activeFilter)

const setFilterTag = (tag) => {
  emit('setFilterBy', tag)
}

</script>


<template>

  <div class="row d-flex flex-column flex-md-row justify-content-between justify-content-md-around align-items-center">
    <div class="col-12 col-md-6 d-flex justify-content-around">

      <div class="dropdown">
        <button class="btn  dropdown-toggle fs-4 text-light" type="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          FRONT END
        </button>
        <ul class="dropdown-menu">
          <li>
            <p @click="setFilterTag('Vue.js')" class="dropdown-item selectable">Vue.js</p>
          </li>
          <li>
            <p @click="setFilterTag('React')" class="dropdown-item selectable">React</p>
          </li>
        </ul>
      </div>

      <div class="dropdown">
        <button class="btn  dropdown-toggle fs-4 text-light" type="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          BACK END
        </button>
        <ul class="dropdown-menu">
          <li>
            <p @click="setFilterTag('NoSQL')" class="dropdown-item selectable">NoSQL</p>
          </li>
          <li>
            <p @click="setFilterTag('SQL')" class="dropdown-item selectable">SQL</p>
          </li>
        </ul>
      </div>

    </div>
    <div class="col-12 col-md-6 d-flex justify-content-around">

      <div class="dropdown">
        <button class="btn  dropdown-toggle fs-4 text-light" type="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          CSS
        </button>
        <ul class="dropdown-menu">
          <li>
            <p @click="setFilterTag('Bootstrap')" class="dropdown-item selectable">Bootstrap</p>
          </li>
          <li>
            <p @click="setFilterTag('Tailwind')" class="dropdown-item selectable">Tailwind</p>
          </li>


        </ul>
      </div>

      <div class="dropdown">
        <button class="btn  dropdown-toggle fs-4 text-light" type="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          Language
        </button>
        <ul class="dropdown-menu">
          <li>
            <p @click="setFilterTag('JavaScript')" class="dropdown-item selectable">JavaScript</p>
          </li>
          <li>
            <p @click="setFilterTag('TypeScript')" class="dropdown-item selectable">TypeScript</p>
          </li>
          <li>
            <p @click="setFilterTag('C#')" class="dropdown-item selectable">C#</p>
          </li>
        </ul>
      </div>

      <button v-if="props.organizationStyle == 'grid'" @click="$emit('setOrg', 'list')"
        class="d-none d-lg-block btn text-light fs-3 mdi mdi-view-list" title="list view"></button>
      <button v-if="props.organizationStyle == 'list'" @click="$emit('setOrg', 'grid')"
        class="d-none d-lg-block btn text-light fs-3 mdi mdi-grid" title="grid view"></button>

    </div>



  </div>

  <div v-if="filterBy != 'web'" @click="setFilterTag('web')"
    class="col-12 filter-bar  border border-1 border-light text-center p-1">
    <div class="filter">
      {{ filterBy }}
    </div>
    <div class="mdi mdi-close-thick filter-clear" title="clear filter">
    </div>
  </div>
  <div v-if="filterBy != 'web'" class="col-12 text-center text-light">
    Results: {{ props.resultLength }}
  </div>

</template>


<style lang="scss" scoped>
.filter-clear {
  display: none;
}

.filter {
  display: block;
}

.filter-bar:hover {
  cursor: pointer;
  background-color: var(--bs-secondary);

  .filter-clear {
    display: block;
  }

  .filter {
    display: none;
  }
}
</style>