<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title">
    <button>Create</button>
  </form>
</template>
<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    onSubmit () {
      console.log('submit ', this.title)
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  form{
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    input{
      width: 500px;
      padding: 10px;
    }
    button{
      padding: 10px;
    }
  }
</style>
