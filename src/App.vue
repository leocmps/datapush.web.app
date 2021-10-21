<template>
  <v-app class="bg">
    <v-navigation-drawer
      v-if="!isLoginRoute"
      absolute
      color="#006ABA"
      dark
      expand-on-hover
      permanent
    >
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ $firebase.auth().currentUser.displayName }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list nav>
        <v-list-item
          link
          to="/"
        >
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          to="/dashboard"
        >
          <v-list-item-icon>
            <v-icon>mdi-office-building</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Empresas</v-list-item-title>
        </v-list-item>
        <v-list-item
          link
          to="/dashboard-cvm"
        >
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Código CVM</v-list-item-title>
        </v-list-item>
        <!-- <v-list-item
          link
          to="/account-details"
        >
          <v-list-item-icon>
            <v-icon>mdi-account-details</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Detalhes da Conta</v-list-item-title>
        </v-list-item> -->
      </v-list>
      <template v-slot:append>
        <v-list nav>
          <v-list-item
            link
            @click="signOut"
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

  async signOut () {
    try {
      await (this as any).$firebase.auth().signOut();
      (window as any).uid = null
      this.$router.push({ name: 'SignIn' })
    } catch (err) {
      alert(err)
    }
  }

  get isLoginRoute () {
    return this.$route.name === 'SignIn' || this.$route.name === 'SignUp' || this.$route.name === 'PasswordRecovery'
  }

  get mainMargin () {
    return this.$route.name === 'SignIn' || this.$route.name === 'SignUp' || this.$route.name === 'PasswordRecovery' ? '' : 'ml-16'
  }
}
</script>
<style>

html {
  overflow: hidden !important;
}

.scroller {
  overflow: auto !important
}

.full-height {
  height: 100%
}

.bg {
  background: #24C6DC !important;
  background: -webkit-linear-gradient(to right, #514A9D, #24C6DC) !important;
  background: linear-gradient(to right, #514A9D, #24C6DC) !important;
}

.v-application a {
  color: #514A9D;
}

::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
</style>
