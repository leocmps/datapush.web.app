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
        <div>Entrar em DataPush</div>
        <div class="text-caption d-flex">
          <div>Novo aqui?</div>
          <a
            class="ml-1"
            style="color: #514A9D !important"
            @click="goTo('/sign-up')"
          >
            Criar uma conta
          </a>
        </div>
      </v-card-title>
      <v-card-text>
        <v-form v-model="formValid">
          <div class="mb-2">
            Email
          </div>
          <v-text-field
            v-model="email"
            label="Email"
            outlined
          />
          <div class="d-flex justify-space-between mb-2">
            <div>Senha</div>
            <a
              style="color: #514A9D !important"
              @click="goTo('/password-recovery')"
            >
              Esqueceu a senha?
            </a>
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
          @click="login"
        >
          Entrar
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SignIn extends Vue {
  email = ''
  password = ''
  formValid = false
  inProgress = false

  created () {
    window.addEventListener('keyup', this.keyUpHandler)
  }

  destroyed () {
    window.removeEventListener('keyup', this.keyUpHandler)
  }

  async keyUpHandler (event: KeyboardEvent) {
    if (event.code === 'Enter') await this.login()
  }

  goTo (route: string) {
    this.$router.push(route)
  }

  async login () {
    if (!this.hasEmailAndPassword) return
    const { email, password } = this
    try {
      this.inProgress = true
      const res = await (this as any).$firebase.auth().signInWithEmailAndPassword(email, password);
      (window as any).uid = res.user.uid
      this.$router.push({ name: 'Home' })
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
