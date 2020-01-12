<template>
  <div>
    <li>
      <span v-bind:class="{done: todo.completed}">
        <input type="checkbox" name="" id="" v-on:change="todo.completed = !todo.completed">
        <strong>{{index+1}}</strong>
         {{todo.title}}
      </span>
     <button class="rm" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
    </li>
  </div>
</template>

<script>
export default
{
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  }
}
</script>

<style scoped>
  li{
    display: flex;
    justify-content: space-between;
    border: 1px solid #2c3e50;
    padding: 10px;
    margin: 10px 0;
  }
  .rm{
    color: white;
    background: red;
    border-radius: 50%;
    border: none;
  }
  .done{
    text-decoration: line-through;
  }
</style>
