<template>
  <v-container>
    <v-btn to="/" class="ma-2" outlined color="indigo">Home</v-btn>

    <SimpleDialog :dialog='dialog'>
      <slot slot='title'>{{dialogTitle}}</slot>
    </SimpleDialog>

  </v-container>
</template>

<script>
import SimpleDialog from '../components/SimpleDialog'

export default {
  name: 'Dialogs',
  components: { SimpleDialog },
  data () {
    return {
      dialog: true
    }
  }
}
</script>

<style>

</style>
