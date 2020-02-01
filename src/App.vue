<template>
  <v-app>
    <div>
      <Header/>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container>
        <router-view/>
      </v-container>

    </v-content>
    <Footer/>
  </v-app>
</template>

<script>

import Footer from './components/Footer'
import Header from './components/Header'
export default {
  name: 'App',
  components: { Footer, Header },
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>
