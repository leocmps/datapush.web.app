<template>
  <div class="full-screen">
    <v-card
      elevation="10"
      height="auto"
      width="400"
    >
      <v-card-title class="d-flex flex-column">
        <div>Cadastrar em DataPush</div>
        <v-card-text>
          <div class="mb-2">
            Email
          </div>
          <v-text-field
            label="Email"
            outlined
          />
          <div class="d-flex justify-space-between mb-2">
            <div>Password</div>
            <div>Forgot password?</div>
          </div>
          <v-text-field
            label="Password"
            outlined
          />
          <v-btn
            class="white--text"
            color="#05386B"
            height="50"
            to="/"
            width="370"
          >
            Sign in
          </v-btn>
        </v-card-text>
      </v-card-title>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SignUp extends Vue {}
</script>
<style scoped>
.full-screen {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
