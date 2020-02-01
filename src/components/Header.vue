<template>
  <v-toolbar dense dark>
    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer />

    <v-toolbar-items>
      <v-btn flat text>
        Home
      </v-btn>
      <v-btn flat text>
        ToDo
      </v-btn>
      <v-btn flat text>
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
