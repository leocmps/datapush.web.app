<template>
  <div>
    <div class="full-screen mt-4">
      <v-text-field
        v-model="filterByname"
        v-debounce:500ms="getCompaniesFilteredByName"
        append-icon="mdi-magnify"
        background-color="white"
        class="mr-1"
        filled
        label="Pesquisar empresa"
        rounded
        style="max-width: 600px"
      />
    </div>
    <div
      v-if="inProgress"
      class="d-flex align-center justify-center"
      style="height: 80vh"
    >
      <v-progress-circular
        color="white"
        indeterminate
        size="100"
        width="10"
      />
    </div>
    <div
      v-else
      class="scroller"
      style="max-height: 850px"
    >
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
                CNPJ:
              </div>
              {{ cnpjFormatter(company.cnpj) }}
            </div>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Dashboard extends Vue {
  filterByname = ''
  inProgress = false

  async created () {
    try {
      this.inProgress = true
      await this.$store.dispatch('getCompanies')
    } finally {
      this.inProgress = false
    }
  }

  cnpjFormatter (cnpj: string) {
    if (cnpj.length < 14) return '-'
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
  }

  async getCompaniesFilteredByName () {
    try {
      this.inProgress = true
      if (this.filterByname) await this.$store.dispatch('getCompaniesFiltered', this.filterByname)
      else await this.$store.dispatch('getCompanies')
    } finally {
      this.inProgress = false
    }
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
