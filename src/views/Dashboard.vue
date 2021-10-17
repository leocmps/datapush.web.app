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
      :style="{gridTemplateRows: templateRows}"
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
  companies = [
    {
      companyName: 'BCO BRASIL S.A.',
      issuer: 'BBAS',
      tradingName: 'BRASIL',
      segment: 'Bancos',
      codeCvm: '1023'
    },
    {
      companyName: 'ALPARGATAS S.A.',
      issuer: 'ALPA',
      tradingName: 'ALPARGATAS',
      segment: 'Calçados',
      codeCvm: '10456'
    },
    {
      companyName: 'SARAIVA LIVREIROS S.A. - EM RECUPERAÇÃO JUDICIAL',
      issuer: 'SLED',
      tradingName: 'SARAIVA LIVR',
      segment: 'Produtos Diversos',
      codeCvm: '10472'
    },
    {
      companyName: 'SONDOTECNICA ENGENHARIA SOLOS S.A.',
      issuer: 'SOND',
      tradingName: 'SONDOTECNICA',
      segment: 'Engenharia Consultiva',
      codeCvm: '10880'
    },
    {
      companyName: 'SONDOTECNICA ENGENHARIA SOLOS S.A.',
      issuer: 'SOND',
      tradingName: 'SONDOTECNICA',
      segment: 'Engenharia Consultiva',
      codeCvm: '10880'
    },
    {
      companyName: 'SONDOTECNICA ENGENHARIA SOLOS S.A.',
      issuer: 'SOND',
      tradingName: 'SONDOTECNICA',
      segment: 'Engenharia Consultiva',
      codeCvm: '10880'
    },
    {
      companyName: 'SONDOTECNICA ENGENHARIA SOLOS S.A.',
      issuer: 'SOND',
      tradingName: 'SONDOTECNICA',
      segment: 'Engenharia Consultiva',
      codeCvm: '10880'
    },
    {
      companyName: 'SONDOTECNICA ENGENHARIA SOLOS S.A.',
      issuer: 'SOND',
      tradingName: 'SONDOTECNICA',
      segment: 'Engenharia Consultiva',
      codeCvm: '10880'
    },
    {
      companyName: 'SONDOTECNICA ENGENHARIA SOLOS S.A.',
      issuer: 'SOND',
      tradingName: 'SONDOTECNICA',
      segment: 'Engenharia Consultiva',
      codeCvm: '10880'
    }
  ]

  created () {
    this.$store.commit('setCompanies', this.companies)
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
