<template>
  <div id="app">
    <h1>ToDo Application</h1>
    <AddTodo @add-todo="addTodo"/>
    <hr/>
    <TodoList
      v-bind:todos="todos"
      v-on:remove-todo="removeTodo"
    />
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
export default {
  name: 'app',
  components: {
    TodoList, AddTodo
  },
  data () {
    return {
      todos: [
        { id: 1, title: 'buy car', completed: false },
        { id: 2, title: 'buy bike', completed: false },
        { id: 3, title: 'buy snowboard', completed: false }
      ]
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
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
