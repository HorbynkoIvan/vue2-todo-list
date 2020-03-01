<template>
  <button :text="text"
         @click="$emit('click', $event)"
         :size="size"
         :color="color">
    <slot></slot>
  </button>
</template>

<script>
//import { VBtn } from 'vuetify/lib'

export default {
  name: 'VButton',
  props: {
    title: String,
    size: String,
    color: String,
    btnClass: String,
    text: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss">
 /* button{
    width: 100px;
    background: red;
  }*/
</style>
