<template>
  <div>
    <div class="full-screen mt-4">
      <v-text-field
        append-icon="mdi-magnify"
        background-color="white"
        label="Pesquisar empresa"
        outlined
        rounded
        style="max-width: 800px"
      />
    </div>
    <div
      class="grid"
      :style="{gridTemplateRows: templateRows, rowGap: '16px'}"
    >
      <v-card
        v-for="(company, index) in companies"
        :key="index"
        class="mx-2"
        height="200"
        min-width="400"
        width="400"
      >
        <v-card-text>
          <div>{{ company.segment }}</div>
          <p class="text-h6 text--primary text-truncate">
            {{ company.companyName }}
          </p>
          <div class="d-flex">
            <div class="mr-2 font-weight-bold">
              Emissor:
            </div>
            {{ company.issuer }}
          </div>
          <div class="d-flex">
            <div class="mr-2 font-weight-bold">
              Nome comercial:
            </div>
            {{ company.tradingName }}
          </div>
          <div class="d-flex">
            <div class="mr-2 font-weight-bold">
              Código CVM:
            </div>
            {{ company.codeCvm }}
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Dashboard extends Vue {
  created () {
    this.$store.dispatch('getCompanies')
  }

  get companies () {
    return this.$store.state.companies || []
  }

  get templateRows () {
    const rows = this.companies.length / 4
    return `repeat(${rows}, 1fr`
  }
}
</script>
<style scoped>
.full-screen {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid {
  display: grid;
  padding: 32px;
  grid-template-columns: repeat(4, 1fr);
}
</style>
