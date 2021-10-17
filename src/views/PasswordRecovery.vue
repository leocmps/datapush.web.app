<template>
  <div class="full-screen">
    <v-card
      elevation="10"
      height="auto"
      width="400"
    >
      <v-card-title class="d-flex flex-column">
        <div>Recuperar senha</div>
        <div class="text-caption">
          Para começar, informe seu e-mail.
        </div>
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="email"
          label="Email"
          outlined
        />
        <v-btn
          class="white--text"
          color="#05386B"
          :disabled="!validateEmail(email)"
          height="50"
          :loading="inProgress"
          width="370"
          @click="sendRecoveryEmail"
        >
          Enviar
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PasswordRecovery extends Vue {
  email = ''
  inProgress = false

  validateEmail (email: string) {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  created () {
    window.addEventListener('keyup', this.keyUpHandler)
  }

  destroyed () {
    window.removeEventListener('keyup', this.keyUpHandler)
  }

  async keyUpHandler (event: KeyboardEvent) {
    if (event.code === 'Enter') await this.sendRecoveryEmail()
  }

  async sendRecoveryEmail () {
    if (!this.validateEmail(this.email)) return
    try {
      this.inProgress = true
      const { email } = this
      await (this as any).$firebase.auth().sendPasswordResetEmail(email)
      alert('Enviamos um e-mail para que você possa recuperar sua senha.')
      this.$router.push({ name: 'SignIn' })
    } catch (err) {
      alert(err)
    } finally {
      this.inProgress = false
    }
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
</style>
