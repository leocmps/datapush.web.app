<template>
  <div class="full-screen">
    <div class="d-flex mb-8">
      <img src="https://img.icons8.com/emoji/48/000000/waving-hand-light-skin-tone.png">
      <div class="font-weight-light white--text text-h3 ml-2">
        Bem-vindo!
      </div>
    </div>
    <div
      class="text-subtitle-1 white--text text-center mb-8"
      style="max-width: 500px"
    >
      O DataPush é um robô automatizado que obtém demonstrações financeiras, fatos relevantes,
      comunicados, entre outras informações importantes de empresas listadas na
      B3.
    </div>
    <div class="text-subtitle-2 white--text mb-2">
      Desenvolvedores
    </div>
    <div class="text-caption white--text d-flex">
      <div class="px-2 d-flex flex-column text-center">
        Eliandro Freitas
        <div>190870</div>
      </div>
      <div class="px-2 d-flex flex-column text-center">
        Gabriel Baran
        <div>200255</div>
      </div>
      <div class="px-2 d-flex flex-column text-center">
        Leonardo Campos
        <div>2000203</div>
      </div>
      <div class="px-2 d-flex flex-column text-center">
        Paulo Oliveira
        <div>200748</div>
      </div>
    </div>
    <v-btn
      class="white--text"
      color="#514A9D"
      style="margin-top: 180px"
      @click="goTo('/dashboard')"
    >
      Explorar
      <v-icon size="15">
        mdi-arrow-right
      </v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  goTo (route: string) {
    this.$router.push(route)
  }
}
</script>
<style scoped>
.full-screen {
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
