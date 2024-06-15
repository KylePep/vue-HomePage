<script setup>
import { AppState } from "@/AppState.js";
import ApplicationCard from "@/components/ApplicationCard.vue";
import { computed, ref } from "vue";

let filterBy = ref('web')
const appData = computed(() => AppState.appList)
let appList = appData.value.filter((a) => a.tags.includes(filterBy.value))

const organizationStyle = ref('list')

const setOrg = (organization) => {
  organizationStyle.value = organization
}

const setFilterBy = (tag) => {
  filterBy.value = tag
  appList = appData.value.filter((a) => a.tags.includes(filterBy.value))
}

</script>


<template>
  <div class="container text-light">


    <div class="row top-row">

      <div class="col-12 mt-5">
        <h3 class="text-center">
          <p class="fs-5 fw-normal mb-4">My Works</p>
          <p class="fs-2">I CREATE THE BEST PRODUCT QUALITY
            AND I AM BEST AT THIS.</p>
        </h3>
      </div>

      <div class="col-12 m-auto separation mt-5"></div>
      <div class="col-12 d-flex justify-content-between justify-content-md-around">

        <div class="dropdown">
          <button class="btn  dropdown-toggle fs-4 text-light" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            FRONT END
          </button>
          <ul class="dropdown-menu">
            <li>
              <p @click="setFilterBy('Vue.js')" class="dropdown-item selectable">Vue.js</p>
            </li>
            <li>
              <p @click="setFilterBy('React')" class="dropdown-item selectable">React</p>
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
              <p @click="setFilterBy('MongoDb')" class="dropdown-item selectable">MongoDb</p>
            </li>
            <li>
              <p @click="setFilterBy('MySQL')" class="dropdown-item selectable">MySQL</p>
            </li>
          </ul>
        </div>

        <div class="dropdown">
          <button class="btn  dropdown-toggle fs-4 text-light" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            CSS
          </button>
          <ul class="dropdown-menu">
            <li>
              <p @click="setFilterBy('BootStrap')" class="dropdown-item selectable">BootStrap</p>
            </li>
            <li>
              <p @click="setFilterBy('TailWind')" class="dropdown-item selectable">TailWind</p>
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
              <p @click="setFilterBy('JavaScript')" class="dropdown-item selectable">JavaScript</p>
            </li>
            <li>
              <p @click="setFilterBy('TypeScript')" class="dropdown-item selectable">TypeScript</p>
            </li>
            <li>
              <p @click="setFilterBy('C#')" class="dropdown-item selectable">C#</p>
            </li>
          </ul>
        </div>


        <button v-if="organizationStyle == 'grid'" @click="setOrg('list')"
          class="d-none d-md-block btn text-light fs-3 mdi mdi-view-list" title="list view"></button>
        <button v-if="organizationStyle == 'list'" @click="setOrg('grid')"
          class="d-none d-md-block btn text-light fs-3 mdi mdi-grid" title="grid view"></button>
      </div>

      <div v-if="filterBy != 'web'" @click="setFilterBy('web')"
        class="col-12 filter-bar  border border-1 border-light text-center p-1">
        <div class="filter">
          {{ filterBy }}
        </div>
        <div class="mdi mdi-close-thick filter-clear" title="clear filter">
        </div>
      </div>

      <div v-for="app, index in appList" :key="index" class="d-none d-md-block mt-5"
        :class="[organizationStyle == 'list' ? 'col-12' : 'col-6 col-lg-4']">
        <ApplicationCard :org="organizationStyle" :img="app.img" :title="app.title" :description="app.description"
          :techStack="app.techStack" :webLink="app.webLink" :githubLink="app.githubLink" />
      </div>

      <div v-for="app, index in appList" :key="index" class="col-12 d-block d-md-none mt-5">
        <ApplicationCard org="list" :img="app.img" :title="app.title" :description="app.description"
          :techStack="app.techStack" :webLink="app.webLink" :githubLink="app.githubLink" />
      </div>

    </div>

  </div>
</template>


<style lang="scss" scoped>
.top-row {
  margin-top: 5rem;
}

.separation {
  margin: 1rem 0rem 1rem 0rem;
  width: 50px;
  border-bottom: solid var(--bs-success) 4px;
}

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