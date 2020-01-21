<template>
  <div>
    <router-link to="/todos">ToDo component</router-link>
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
