<script setup>
import { AppState } from "@/AppState.js";
import ApplicationCard from "@/components/ApplicationCard.vue";
import filterBar from "@/components/filterBar.vue";
import { computed, onUnmounted, ref } from "vue";

const appData = computed(() => AppState.appList)

let filterBy = computed(() => AppState.activeFilter)

let appList = computed(() => appData.value.filter((a) => a.tags.includes(filterBy.value)))

const organizationStyle = ref('list')

const borderColorList = computed(() => AppState.accentColors)

onUnmounted(() => {
  AppState.activeFilter = 'web'
})


const setOrg = (organization) => {
  organizationStyle.value = organization
}

const setFilterBy = (tag) => {
  AppState.activeFilter = tag

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

      <div class="col-12">
        <filterBar @set-org="setOrg" @set-filter-by="setFilterBy" :organizationStyle="organizationStyle" />
      </div>

      <div v-for="app, index in appList" :key="index" class="d-none d-md-block mt-5"
        :class="[organizationStyle == 'list' ? 'col-12' : 'col-6 col-lg-4']">
        <ApplicationCard :org="organizationStyle" :app=app :borderColor="borderColorList[index % 4]" />
      </div>

      <div v-for="app, index in appList" :key="index" class="col-12 d-block d-md-none mt-5">
        <ApplicationCard org="list" :app=app :borderColor="borderColorList[index % 4]" />
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
</style>