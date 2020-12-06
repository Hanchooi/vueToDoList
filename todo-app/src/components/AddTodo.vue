<template>
  <div>
      <v-form ref="form" v-model="valid" lazy-validation @submit="addTodo">
        <v-text-field v-model="title" name="title" :counter="10" :rules="nameRules" label="Things to do" required></v-text-field>
        <button type="submit">Add</button>
      </v-form>
  </div>
</template>

<script>
import {v4 as uuid} from 'uuid';
export default {
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault();

      const newTodoObj = {
        id: uuid(),
        title: this.title,
        completed: false
      }
      
      this.$emit('add-todo', newTodoObj);
      this.title = '';
    }
  }
}
</script>

<style scoped>
</style>