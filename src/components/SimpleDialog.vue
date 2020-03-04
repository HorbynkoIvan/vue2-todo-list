<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="730px"
      content-class="custom-dialog"
      :class="dialogClass"
    >
      <v-card class="pb-10 pb-md-12">
        <v-toolbar elevation="0" dense>
          <v-spacer />
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>md-close</v-icon>
          </v-btn>
        </v-toolbar>

        <v-card-title class="headline justify-center mt-0 mt-md-10">
          <slot name="title"></slot>
        </v-card-title>

        <slot name="text1"></slot>

        <slot name="divider"></slot>

        <slot name="text2"></slot>

        <v-card-actions class="justify-center">
          <slot name="btnType1"></slot>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {
  VDialog,
  VCard,
  VCardTitle,
  VRow,
  VBtn,
  VToolbar,
  VSpacer,
  VCardActions,
  VIcon
} from 'vuetify/lib'

export default {
  name: 'SimpleDialog',
  props: {
    dialog: Boolean,
    dialogClass: String
  },
  data () {
    return {}
  },
  components: {
    'v-dialog': VDialog,
    'v-card': VCard,
    'v-card-title': VCardTitle,
    'v-row': VRow,
    'v-toolbar': VToolbar,
    'v-spacer': VSpacer,
    'v-btn': VBtn,
    'v-card-actions': VCardActions,
    'v-icon': VIcon
  }
}
</script>
