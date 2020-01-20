<template>
  <v-container>
    <router-link to="/">Home</router-link>
    <h2>Add or Check</h2>
    <AddTodo @add-todo="addTodo"/>
    <Loader v-if="loading"/>
    <TodoList
      v-else-if="todos.length"
      v-bind:todos="todos"
      v-on:remove-todo="removeTodo"
    />
    <p v-else>No ToDos!</p>
  </v-container>
</template>

<script>
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import Loader from '../components/Loader'

export default {
  name: 'app',
  components: {
    TodoList, AddTodo, Loader
  },
  data () {
    return {
      todos: [],
      loading: true
    }
  },
  methods: {
    removeTodo (id) {
      this.todos = this.todos.filter((item) => {
        return item.id !== id
      })
    },
    addTodo (newTodo) {
      this.todos.push(newTodo)
    }
  },
  mounted () {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.todos = json
          this.loading = false
        }, 500
        )
      })
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
