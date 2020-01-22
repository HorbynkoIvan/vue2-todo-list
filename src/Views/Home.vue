<template>
  <div>
    <v-btn to="/todos" class="ma-2" outlined color="indigo">ToDo component</v-btn>
    <v-btn to="/tabs_vertical" class="ma-2" outlined color="indigo">Tabs Vertical</v-btn>
    <ListCheckbox/>
  </div>
</template>

<script>
import ListCheckbox from '../components/ListCheckbox'
export default {
  name: 'Home',

  components: {
    ListCheckbox
  }
}
</script>
