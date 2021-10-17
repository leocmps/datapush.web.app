<template>
  <div class="full-screen">
    <v-card
      elevation="10"
      height="auto"
      width="400"
    >
      <v-card-title class="d-flex flex-column">
        <div>Recuperar senha</div>
      </v-card-title>
      <v-card-text>
        <div class="mb-2">
          Nova senha
        </div>
        <v-text-field
          v-model="password"
          label="Nova senha"
          outlined
          type="password"
        />
        <div class="mb-2">
          Confirmar senha
        </div>
        <v-text-field
          v-model="confirmPassword"
          label="Confirmar senha"
          outlined
          type="password"
        />
        <div class="mb-4">
          <div
            class="d-flex"
            :class="{'success-text': hasLowerCase}"
          >
            <v-icon
              :color="hasLowerCase ? 'green' : ''"
              size="15"
            >
              mdi-check
            </v-icon>
            Ao menos uma letra minúscula.
          </div>
          <div
            class="d-flex"
            :class="{'success-text': hasUpperCase}"
          >
            <v-icon
              :color="hasUpperCase ? 'green' : ''"
              size="15"
            >
              mdi-check
            </v-icon>
            Ao menos uma letra maiúscula.
          </div>
          <div
            class="d-flex"
            :class="{'success-text': hasSpecialCharacter}"
          >
            <v-icon
              :color="hasSpecialCharacter ? 'green' : ''"
              size="15"
            >
              mdi-check
            </v-icon>
            Ao menos um caractere especial.
          </div>
          <div
            class="d-flex"
            :class="{'success-text': hasSixLetters}"
          >
            <v-icon
              :color=" hasSixLetters? 'green' : ''"
              size="15"
            >
              mdi-check
            </v-icon>
            Ao menos 6 letras.
          </div>
          <div
            class="d-flex"
            :class="{'success-text': passwordIsTheSame}"
          >
            <v-icon
              :color=" passwordIsTheSame? 'green' : ''"
              size="15"
            >
              mdi-check
            </v-icon>
            As senhas estão iguais.
          </div>
        </div>
        <v-btn
          class="white--text"
          color="#05386B"
          :disabled="!passwordIsValid"
          height="50"
          to="/"
          width="370"
        >
          Confirmar
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ChangePassword extends Vue {
  password = ''
  confirmPassword = ''

  get hasLowerCase () {
    return /[a-z]/.test(this.password)
  }

  get hasUpperCase () {
    return /[A-Z]/.test(this.password)
  }

  get hasSpecialCharacter () {
    const format = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/
    return format.test(this.password)
  }

  get hasSixLetters () {
    return this.password.length >= 6
  }

  get passwordIsTheSame () {
    if (!this.password || !this.confirmPassword) return false
    return this.password === this.confirmPassword
  }

  get passwordIsValid () {
    return this.hasLowerCase && this.hasUpperCase && this.hasSpecialCharacter && this.hasSixLetters && this.passwordIsTheSame
  }
}
</script>
<style scoped>
.full-screen {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.success-text {
  color: green;
}
</style>
