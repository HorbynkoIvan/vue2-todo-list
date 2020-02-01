<template>
  <v-toolbar dense dark>
    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-btn to="/" flat text>
        Home
      </v-btn>
      <v-btn to="/todo" flat text>
        ToDo
      </v-btn>
      <v-btn to="/tabs_vertical" flat text>
        Tabs
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>
