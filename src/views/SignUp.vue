<template>
  <div class="full-screen">
    <v-card
      elevation="10"
      height="auto"
      width="400"
    >
      <v-img
        height="200"
        src="../assets/login-img.jpg"
      />
      <v-card-title class="d-flex flex-column">
        <div>Cadastrar em DataPush</div>
        <div class="text-caption d-flex">
          <div>Já possuí uma conta?</div>
          <a
            class="ml-1"
            style="color: #514A9D !important"
            @click="goTo('/sign-in')"
          >
            Entrar
          </a>
        </div>
      </v-card-title>
      <v-card-text>
        <v-form v-model="formValid">
          <div class="mb-2">
            Nome completo
          </div>
          <v-text-field
            v-model="name"
            label="Nome completo"
            outlined
          />
          <div class="mb-2">
            Email
          </div>
          <v-text-field
            v-model="email"
            label="Email"
            outlined
          />
          <div class="mb-2">
            Senha
          </div>
          <v-text-field
            v-model="password"
            label="Senha"
            outlined
            type="password"
          />
        </v-form>
        <v-btn
          class="white--text"
          color="#514A9D"
          :disabled="!hasEmailAndPassword"
          height="50"
          :loading="inProgress"
          width="368"
          @click="register"
        >
          Cadastrar
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SignUp extends Vue {
  email = ''
  password = ''
  name = ''
  inProgress = false
  formValid = false

  goTo (route: string) {
    this.$router.push(route)
  }

  created () {
    window.addEventListener('keyup', this.keyUpHandler)
  }

  destroyed () {
    window.removeEventListener('keyup', this.keyUpHandler)
  }

  async keyUpHandler (event: KeyboardEvent) {
    if (event.code === 'Enter') await this.register()
  }

  async setUserDisplayName () {
    await (this as any).$firebase.auth().currentUser.updateProfile({
      displayName: this.name
    })
  }

  async register () {
    if (!this.hasEmailAndPassword) return
    try {
      this.inProgress = true
      const { email, password } = this
      await (this as any).$firebase.auth().createUserWithEmailAndPassword(email, password)
      if ((this as any).$firebase.auth().currentUser) await this.setUserDisplayName()
      this.$router.push({ name: 'SignIn' })
    } catch (err) {
      alert(err)
    } finally {
      this.inProgress = false
    }
  }

  get hasEmailAndPassword () {
    return !!this.email && !!this.password
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
