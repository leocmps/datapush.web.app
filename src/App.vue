<template>
  <v-app style="background: #05386B">
    <v-navigation-drawer
      v-if="!isLoginRoute"
      absolute
      expand-on-hover
      permanent
    >
      <v-list>
        <v-list-item
          link
          to="/"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Leonardo Campos</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list nav>
        <v-list-item
          link
          to="/dashboard"
        >
          <v-list-item-icon>
            <v-icon>mdi-monitor-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          to="/account-details"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-details</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Detalhes da Conta</v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list nav>
          <v-list-item
            link
            to="/sign-in"
          >
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>
    <v-main :class="mainMargin">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  mounted () {
    (this as any).$firebase.auth().onAuthStateChanged((user: any) => {
      (window as any).uid = user ? user.uid : null
      this.$router.push({ name: (window as any).uid ? 'Home' : 'SignIn' })
    })
  }

  get isLoginRoute () {
    return this.$route.name === 'SignIn' || this.$route.name === 'SignUp' || this.$route.name === 'PasswordRecovery'
  }

  get mainMargin () {
    return this.$route.name === 'SignIn' || this.$route.name === 'SignUp' || this.$route.name === 'PasswordRecovery' ? '' : 'ml-16'
  }
}
</script>
<style scoped>
.full-height {
  height: 100%
}
</style>
