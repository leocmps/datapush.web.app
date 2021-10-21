<template>
  <div>
    <div
      v-if="inProgress"
      class="d-flex align-center justify-center"
      style="height: 90vh"
    >
      <v-progress-circular
        color="white"
        indeterminate
        size="100"
        width="10"
      />
    </div>
    <div v-else>
      <div class="full-screen">
        <v-text-field
          v-model="filterByCVM"
          background-color="white"
          class="mr-3 mt-16"
          filled
          label="Pesquisar CVM"
          rounded
          style="max-width: 300px;"
        />
        <v-btn
          class="white--text mt-8"
          color="#514A9D"
          @click="getCompaniesFilteredByCVM"
        >
          Buscar
          <v-icon
            class="ml-2"
            size="16"
          >
            mdi-magnify
          </v-icon>
        </v-btn>
      </div>
      <div
        v-if="showNoCompanyFoundMessage"
        class="d-flex flex-column align-center"
        style="width: 100%; margin-top: 260px"
      >
        <img
          src="../assets/company.png"
          width="100"
        >
        <div class="text-subtitle-1 white--text">
          Nenhum empresa encontada.
        </div>
        <div class="text-subtitle-2 white--text">
          Insira um código válido para encontar uma empresa.
        </div>
      </div>
      <div
        v-else
        class="full-screen"
        style="margin-top: 200px"
      >
        <v-card
          v-if="company"
          class="mx-2"
          height="200"
          min-width="400"
          width="400"
        >
          <v-card-text>
            <p class="text-h6 text--primary text-truncate text-center">
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
                Segmento:
              </div>
              {{ company.segment }}
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
export default class DashboardCVM extends Vue {
  filterByCVM = ''
  inProgress = false

  async getCompaniesFilteredByCVM () {
    try {
      this.inProgress = true
      if (this.filterByCVM) await this.$store.dispatch('getCompaniesByCode', this.filterByCVM)
    } catch (err) {
      alert(err)
    } finally {
      this.inProgress = false
    }
  }

  cnpjFormatter (cnpj: string) {
    if (cnpj.length < 14) return '-'
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
  }

  get company () {
    return this.$store.state.company
  }

  get showNoCompanyFoundMessage () {
    return !this.inProgress && !this.company
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
