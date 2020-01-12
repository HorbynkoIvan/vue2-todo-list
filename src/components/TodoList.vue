<template>
  <div class="wrapper">
    <ul>
      <Todoitem
        v-for="(todo, index) of todos"
        v-bind:todo="todo"
        v-bind:key="index"
        v-on:remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
import Todoitem from './Todoitem'
export default {
  props: ['todos'],
  components: {
    Todoitem
  },
  methods: {
    removeTodo (id) {
      this.$emit('remove-todo', id)
    }
  }
}
</script>

<style scoped>
  .wrapper{
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
